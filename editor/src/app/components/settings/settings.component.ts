// Third party imports.
import { Component, Input } from '@angular/core';

// Local imports.
import { EditorSettings } from 'models/editor-settings';

@Component({
  selector: '[app-settings]',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  @Input()
  public isOpen: boolean = false;

  public editorSettings: EditorSettings = {
    defaultProjectDirectory: '',
    defaultProjectPath: '',
    lastProjectPath: '',
    windowHeight: 1280,
    windowWidth: 720,
    windowState: 'maximized'
  };
  
  save(): void {
    // new SettingsStorageService().save(this.editorSettings);
  }

  // @Watch('isOpen')
  // onEntityChanged(newValue: any, oldValue: any): void {
  //   if(this.isOpen) {
  //     this.editorSettings = new SettingsStorageService().load() || new EditorSettings();
  //   }
  // }
}
