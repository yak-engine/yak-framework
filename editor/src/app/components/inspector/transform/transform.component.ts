import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.scss']
})
export class TransformComponent {
  @Input()
	public inspectorComponentData: any; // EngineTransformComponent;
}
