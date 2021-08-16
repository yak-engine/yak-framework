import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import TagComponent from '../../../../../../engine/src/components/TagComponent';
import EntityManager from '../../../../../../engine/src/entity-manager';
import Entity from '../../../../../../engine/src/models/entity';
import Scene from '../../../../../../engine/src/models/scene';

@Component({
  selector: '[app-scene-hierarchy]',
  templateUrl: './scene-hierarchy.component.html',
  styleUrls: ['./scene-hierarchy.component.scss']
})
export class SceneHierarchyComponent {
  // Store state.
	public scene!: Scene;
	public entity!: Entity;

	private isAddingEntity: boolean = false;
	public entities: Entity[] = [];
	private pendingEntity: Entity = new Entity();

	constructor(private _stateService: StateService) {
	}

	toggleAddMode(): void {
		this.isAddingEntity = true;
	}

	save(): void {
		EntityManager.getInstance().create();
	}

	selectEntity(entity: Entity): void {
		this._stateService.setEntity(entity);
		// this.$emit('on-entity-selected');
	}

	getName(entity: Entity): string {
		console.log(entity);

		let tagComponent: TagComponent = entity.getComponent<TagComponent>(TagComponent);
		
		if (tagComponent) {
			// return tagComponent.name.charAt(0).toUpperCase() + tagComponent.name.slice(1);
		}

		return 'Entity';
	}

	// @Watch('scene', { immediate: true })
	onPropertyChanged(newValue: Array<any>, oldValue: Array<any>) {
		if (newValue) {
			this.entities = EntityManager.getInstance().entities;
			this.selectEntity(this.entities[0]);
		}
	}
}
