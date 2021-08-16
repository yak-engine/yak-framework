import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-open-project]',
  templateUrl: './open-project.component.html',
  styleUrls: ['./open-project.component.scss']
})
export class OpenProjectComponent {
  projects: any[] = [];

  public isOpen: boolean = false;

  mounted(): void {
    // this.projects = new ProjectStorageService().load<any[]>();
  }

  async importProject(): Promise<void> {
    let results: string[] = await (window as any).electron.dialog.showOpenDialogSync({
        properties: ['openDirectory']
    });

    if (results) {
      try {
        // new ProjectStorageService().open(results[0], true);
      }
      catch(ex) {
        (this as any).$sureToast.showError(ex);
      }
    }
  }

  openProject(projectPath: string): void {
    try {
      // let openedProject: Project = new ProjectStorageService().open(projectPath, false);
      // this.$emit('on-project-opened', openedProject);
    }
    catch(ex) {
      console.log(ex);
      (this as any).$sureToast.showError(ex);
    }
  }
}
