import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import Scene from '../../../../../../engine/src/models/scene';

@Component({
  selector: 'app-scene-information',
  templateUrl: './scene-information.component.html',
  styleUrls: ['./scene-information.component.scss']
})
export class SceneInformationComponent {
  public scene!: Scene;

  public sceneCopy?: Scene = undefined;

  constructor(private _stateService: StateService) {
    this._stateService.scene$.subscribe((scene) => {

    })
  }

  // @Watch('scene')
  onSceneChanged(newValue: Scene, oldValue: Scene): void {
    if(newValue) {
      this.sceneCopy = Object.assign({}, this.scene);
    }
  }
}
