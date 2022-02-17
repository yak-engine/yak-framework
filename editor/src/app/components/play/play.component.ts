// Third party imports.
import { Component, OnInit } from '@angular/core';

// Local imports.
import { Project } from 'models/project';
import { StateService } from 'services/state.service';

@Component({
  selector: '[app-play]',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  public project?: Project;

  public isPlayMode: boolean = false;

  constructor(private _stateService: StateService) {
    
  }

  public ngOnInit(): void {
    // this._stateService.project$?.subscribe((project: Project) => this.project = project);
  }

  // application: Application = null;

  previewUrl: string = '';

  mounted(): void {
      // this.previewUrl = `preview/play.html?baseUrl=${encodeURIComponent(this.project.path)}`;

      // this.application = new Application(this.project.path);

      // this.application.start();
  }

  public setIsPlayMode(val: boolean) {

  }
}
