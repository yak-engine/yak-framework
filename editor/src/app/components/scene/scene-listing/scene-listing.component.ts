// Third party imports.
import { Component, OnInit } from '@angular/core';

// Local imports.
import SceneService from 'services/scene.service';

// Engine imports.
import { Scene } from '@yak-engine/models/scene';

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
