// Third party imports.
import { Component, OnInit } from '@angular/core';

// Local imports.
import { StateService } from 'services/state.service';

// Engine imports.
import { TagComponent, EntityManager, Entity, Scene } from '@yak/engine';

@Component({
  selector: '[app-scene-hierarchy]',
  templateUrl: './scene-hierarchy.component.html',
  styleUrls: ['./scene-hierarchy.component.scss']
})
export class SceneHierarchyComponent implements OnInit {
	/**
	 * The currently loaded scene.
	 */
	public scene: Scene;
	
	/**
	 * The currently selected entity. This entity will be highlighed within the editor renderer.
	 */
	public selectedEntity: Entity;

	private isAddingEntity: boolean = false;
	public entities: Entity[] = [];
	private pendingEntity: Entity = new Entity();

	public entityNameMap = {};

	constructor(private _stateService: StateService) {

	}

	public ngOnInit(): void {
		this._stateService.scene$.subscribe((scene: Scene) => this.scene = scene);

		this.entities = EntityManager.getInstance().entities;
		this.entities.forEach((entity) => this.entityNameMap[entity.id] = entity.getComponent<TagComponent>(TagComponent).name)
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
			return tagComponent.name.charAt(0).toUpperCase() + tagComponent.name.slice(1);
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
