import { Component, Input, OnInit } from '@angular/core';
import SceneService from 'src/app/services/scene.service';
import Scene from '../../../../../../engine/src/models/scene';

@Component({
  selector: '[app-scene-listing]',
  templateUrl: './scene-listing.component.html',
  styleUrls: ['./scene-listing.component.scss']
})
export class SceneListingComponent implements OnInit {
  public scene?: Scene;

  constructor() { }

  public ngOnInit(): void {

  }

  scenes: Array<any> = new Array();

  mounted() {
    // new SceneService().listScenes().then((scenes) => this.scenes = scenes);
  }

  selectScene(sceneName: string, index: number): void {
    // this.$emit('on-scene-selected', sceneName);
  }

  deleteScene(sceneName: string, index: number): void {
    new SceneService().deleteScene(sceneName).then(() => {
      this.scenes.splice(index, 1);
      // this.$emit('on-scene-delete', sceneName);
    });
  }
}
