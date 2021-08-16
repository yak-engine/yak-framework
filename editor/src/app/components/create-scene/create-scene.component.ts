import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-scene',
  templateUrl: './create-scene.component.html',
  styleUrls: ['./create-scene.component.scss']
})
export class CreateSceneComponent {
  scene: any = {};

  addScene(): void {
    // new SceneService().addScene(this.scene).then(() => {
    //   this.$emit('on-new-scene-saved');
    // });
  }
}
