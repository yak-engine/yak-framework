import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/models/project';
import { StateService } from 'src/app/services/state.service';
import Configuration from '../../../../../engine/src/configuration';

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
