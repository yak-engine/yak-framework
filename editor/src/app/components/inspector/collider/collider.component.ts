import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collider',
  templateUrl: './collider.component.html',
  styleUrls: ['./collider.component.scss']
})
export class ColliderComponent {
  @Input()
	public inspectorComponentData: any;
}
