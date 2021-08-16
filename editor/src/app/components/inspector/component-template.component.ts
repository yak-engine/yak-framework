import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-template',
  templateUrl: './component-template.component.html',
  styleUrls: ['./component-template.component.scss']
})
export class ComponentTemplateComponent {
  @Input()
  public instance: any; // EngineComponent;

	public entity: any; // Entity;

	removeComponent(entityComponent: any): void {
		// this.entity.removeComponent(entityComponent.componentName);
		// this.saveCurrentScene();
	}
}
