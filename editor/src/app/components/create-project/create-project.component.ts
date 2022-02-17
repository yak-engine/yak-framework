// Third party imports.
import { Component } from '@angular/core';

// Local imports.
import { Project } from 'models/project';

@Component({
  selector: '[app-create-project]',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {
  // public isOpen: boolean

  public project: Project = {
    path: '',
    manifest: {},
    tree: {}
  }

  async selectTargetPath(): Promise<void> {
    // let results: OpenDialogReturnValue = await (window as any).electron.dialog.showOpenDialog({
    //     properties: ['openDirectory'],
    //     defaultPath: 'C:/Users/Nick/Documents/Programming/game-engine/sample-projects'
    // });

    // if (results) {
    //     this.project.path = results.filePaths[0];
    // }
  }

  saveProject(): void {
    // new ProjectStorageService().create(this.project);
  }
}
