import ColliderComponent from '../../components/collider/ColliderComponent';
import ColliderComponentManager from '../../components/collider/ColliderComponentManager';
import ManagerFactory from '../../components/ManagerFactory';
import Transform from '../../primitives/transform';
import System from '../system';

import { CollisionDirection } from './collision-direction';

export default class CollisionSystem extends System {
    public name: string = 'collision-name';

	public update(): void {
		let collisionComponentManager: ColliderComponentManager = ManagerFactory.get(ColliderComponent.name);

		collisionComponentManager.data.forEach((colliderComponent: ColliderComponent) => {
			colliderComponent.isColliding = false;
		});

		// TODO: Replace this with a more robust collision dection implementation. For now this is fine for the number of sprites we are rendering with colliders.
		for (let i = 0; i < collisionComponentManager.entities.length; i++) {
			let sourceCollider: ColliderComponent = collisionComponentManager.entities[i].getComponent(ColliderComponent.name) as ColliderComponent;
			let sourceTransform: Transform = sourceCollider.transform;

			for (let ii = i + 1; ii < collisionComponentManager.entities.length; ii++) {
				let targetCollider: ColliderComponent = collisionComponentManager.entities[ii].getComponent(ColliderComponent.name) as ColliderComponent;
				let targetTransform: Transform = targetCollider.transform;

				if (collisionComponentManager.entities[i].id !== collisionComponentManager.entities[ii].id) {
					if (!sourceCollider.isTrigger && !targetCollider.isTrigger) {
						this.resolveCollision(sourceTransform, targetTransform);
					}
					else {
						// TODO: Fire trigger events.
						console.log('trigger collision');
					}
				}
			}
		}
	}

	private resolveCollision(transform1: Transform, transform2: Transform): CollisionDirection {
		// get the vectors to check against
		let vX = transform1.x + transform1.width / 2 - (transform2.x + transform2.width / 2);
		let vY = transform1.y + transform1.height / 2 - (transform2.y + transform2.height / 2);

		// Half widths and half heights of the objects
		let ww2 = transform1.width / 2 + transform2.width / 2;
		let hh2 = transform1.height / 2 + transform2.height / 2;
		let colDir = CollisionDirection.NONE;

		// if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
		if (Math.abs(vX) < ww2 && Math.abs(vY) < hh2) {
			// figures out on which side we are colliding (top, bottom, left, or right)
			let oX = ww2 - Math.abs(vX);
            let oY = hh2 - Math.abs(vY);

			if (oX >= oY) {
				if (vY > 0) {
					colDir = CollisionDirection.TOP;
					transform1.y += oY;
                }
                else {
					colDir = CollisionDirection.BOTTOM;
					transform1.y -= oY;
				}
			} else {
				if (vX > 0) {
					colDir = CollisionDirection.LEFT;
					transform1.x += oX;
                }
                else {
					colDir = CollisionDirection.RIGHT;
					transform1.x -= oX;
				}
			}
        }
        
		return colDir; // If you need info of the side that collided
	}

	public draw(): void {
		return;
	}
}
