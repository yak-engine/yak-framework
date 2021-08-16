import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprite-renderer',
  templateUrl: './sprite-renderer.component.html',
  styleUrls: ['./sprite-renderer.component.scss']
})
export class SpriteRendererComponent {
  @Input()
	public inspectorComponentData: any;
}
