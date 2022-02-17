import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: '[app-inspector]',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

	/**
	 * All of the 
	 */
	componentInstances: Array<BaseComponent> = [];

	isAddingComponent: boolean = false;

	get componentNames(): string[] {
		// return Constants.componentTypes.map((componentType) => componentType.name);
		return [];
	}

	save(): void {
		// this.entity.addComponent(new MaterialComponent('white', 0));
		// this.scene.name = 'test';
	}

	/**
	 * When the currently selected entity changes ensure we update the inspector with the 
	 * components associated with the given entity.
	 */
	// @Watch('entity', { immediate: true })
	onEntityChanged(newValue: any, oldValue: any): void {
		if(newValue) {
			// this.componentInstances = EntityManager.getInstance().getComponents(this.entity);
		}
	}
}
