import ColliderComponent from '../../components/collider/ColliderComponent';
import ColliderComponentManager from '../../components/collider/ColliderComponentManager';
import Entity from '../../components/entity';
import ManagerFactory from '../../components/ManagerFactory';
import ScriptComponent from '../../components/script/ScriptComponent';
import TransformComponent from '../../components/transform/TransformComponent';
import Transform from '../../primitives/transform';
import System from '../system';

import { CollisionDirection } from './collision-direction';

export default class CollisionSystem extends System {
	public name: string = 'collision-name';

	public currentEntityCollisions: Map<any, any[]> = new Map();

	public disposeEntityRefs(entity: Entity): void {
		if (this.currentEntityCollisions.has(entity.id)) {
			this.currentEntityCollisions.delete(entity.id);
		}

		this.currentEntityCollisions.forEach((values: any[], key: number) => {
			let valueIndex: any = values.indexOf(entity.id);

			if (valueIndex !== -1) {
				values.splice(valueIndex, 1);
			}
		});
	}

	public update(): void {
		let manager: ColliderComponentManager = ManagerFactory.get(ColliderComponent.name);
		
		// TODO: Replace this with a more robust collision dection implementation. For now this is fine for the number of sprites we are rendering with colliders.
		for (let i = 0; i < manager.entities.length; i++) {
			for (let ii = i + 1; ii < manager.entities.length; ii++) {
				this.resolveCollision(manager.entities[i], manager.entities[ii]);
			}
		}
	}

	private resolveCollision(sourceEntity: Entity, targetEntity: Entity): CollisionDirection {
		if (!sourceEntity || !targetEntity) {
			return;
		}

		let sourceCollider: ColliderComponent = sourceEntity.getComponent(ColliderComponent) as ColliderComponent;
		let targetCollider: ColliderComponent = targetEntity.getComponent(ColliderComponent) as ColliderComponent;

		let sourceTransformComponent: TransformComponent = (sourceEntity.getComponent(TransformComponent) as TransformComponent);
		let targetTransformComponent: TransformComponent = (targetEntity.getComponent(TransformComponent) as TransformComponent);

		if (!sourceTransformComponent || !targetTransformComponent) {
			console.log('[ENTITY NO LONGER EXISTS ABORTING COLLISION CHECK]');
			return;
		}

		let sourceTransform: Transform = sourceTransformComponent.transform;
		let targetTransform: Transform = targetTransformComponent.transform;

		// get the vectors to check against
		let vX = sourceTransform.x + sourceTransform.width / 2 - (targetTransform.x + targetTransform.width / 2);
		let vY = sourceTransform.y + sourceTransform.height / 2 - (targetTransform.y + targetTransform.height / 2);

		// Half widths and half heights of the objects
		let ww2 = sourceTransform.width / 2 + targetTransform.width / 2;
		let hh2 = sourceTransform.height / 2 + targetTransform.height / 2;

		let colDir = CollisionDirection.NONE;

		// If the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision.
		if (Math.abs(vX) < ww2 && Math.abs(vY) < hh2) {
			if (!this.currentEntityCollisions.has(sourceEntity.id) || this.currentEntityCollisions.get(sourceEntity.id).indexOf(targetEntity.id) === -1) {
				if (!this.currentEntityCollisions.has(sourceEntity.id)) {
					this.currentEntityCollisions.set(sourceEntity.id, [targetEntity.id]);
				}
				else {
					this.currentEntityCollisions.get(sourceEntity.id).push(targetEntity.id);
				}

				// Only resolve the collision if both the source and target colliders are not triggers.
				if (!sourceCollider.isTrigger && !targetCollider.isTrigger) {
					// figures out on which side we are colliding (top, bottom, left, or right)
					let oX = ww2 - Math.abs(vX);
					let oY = hh2 - Math.abs(vY);

					// TODO: Ensure we get the collision direction even for triggers.
					if (oX >= oY) {
						if (vY > 0) {
							colDir = CollisionDirection.TOP;
							sourceTransform.y += oY;
						} else {
							colDir = CollisionDirection.BOTTOM;
							sourceTransform.y -= oY;
						}
					} else {
						if (vX > 0) {
							colDir = CollisionDirection.LEFT;
							sourceTransform.x += oX;
						} else {
							colDir = CollisionDirection.RIGHT;
							sourceTransform.x -= oX;
						}
					}
				} else {
					console.log('TRIGGER ENTER');

					console.log(sourceEntity);
					console.log(targetEntity);

					sourceEntity.getScriptInstances().forEach((scriptInstance) => {
						if (scriptInstance.scriptableEntityInstance && scriptInstance.scriptableEntityInstance.onTriggerEnter) {
							scriptInstance.scriptableEntityInstance.onTriggerEnter(targetEntity);
						}
					});
					
					targetEntity.getScriptInstances().forEach((scriptInstance) => {
						if (scriptInstance.scriptableEntityInstance && scriptInstance.scriptableEntityInstance.onTriggerEnter) {
							scriptInstance.scriptableEntityInstance.onTriggerEnter(sourceEntity);
						}
					});
				}
			}
			else {
				console.log('TRIGGER STAY');

				sourceEntity.getScriptInstances().forEach((scriptInstance) => {
					if (scriptInstance.scriptableEntityInstance && scriptInstance.scriptableEntityInstance.onTriggerEnter) {
						scriptInstance.scriptableEntityInstance.onTriggerStay(targetEntity);
					}
				});
				
				targetEntity.getScriptInstances().forEach((scriptInstance) => {
					if (scriptInstance.scriptableEntityInstance && scriptInstance.scriptableEntityInstance.onTriggerEnter) {
						scriptInstance.scriptableEntityInstance.onTriggerStay(sourceEntity);
					}
				});
			}
		} else {
			if (this.currentEntityCollisions.has(sourceEntity.id) && this.currentEntityCollisions.get(sourceEntity.id).indexOf(targetEntity.id) !== -1) {
				this.currentEntityCollisions.delete(sourceEntity.id);

				ManagerFactory.get(ScriptComponent.name).components

				sourceEntity.getScriptInstances().forEach((scriptInstance) => {
					if (scriptInstance.scriptableEntityInstance && scriptInstance.scriptableEntityInstance.onTriggerEnter) {
						scriptInstance.scriptableEntityInstance.onTriggerLeave(targetEntity);
					}
				});
				
				targetEntity.getScriptInstances().forEach((scriptInstance) => {
					if (scriptInstance.scriptableEntityInstance && scriptInstance.scriptableEntityInstance.onTriggerEnter) {
						scriptInstance.scriptableEntityInstance.onTriggerLeave(sourceEntity);
					}
				});
			}
		}

		return colDir; // If you need info of the side that collided
	}

	public draw(): void {
		return;
	}
}
