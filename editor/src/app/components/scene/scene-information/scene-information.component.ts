// Third party imports.
import { Component } from '@angular/core';

// Local imports.
import { StateService } from 'services/state.service';

// Engine imports.
import { Scene } from '@yak/engine';

@Component({
  selector: '[app-scene-information]',
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

  onSceneChanged(newValue: Scene, oldValue: Scene): void {
    if(newValue) {
      this.sceneCopy = Object.assign({}, this.scene);
    }
  }
}
