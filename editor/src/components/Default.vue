<template>
  <div class="component default-component">
    <div style="height: 100%; display: flex; flex-direction: column;" v-if="isLoaded">
      <main-menu 
        @on-new-project-clicked="isAddingProject = true"
        @on-new-scene-clicked="isAddingScene = true"
        @on-open-project="isOpeningProject = true"
        @on-open-settings="isOpeningSettings = true"
        @on-open-scene-config="isOpeningSceneConfig = true">
      </main-menu>

      <scene-editor></scene-editor>

      <div class="footer">
        <div class="indicator" v-if="isExecutingSave">
          <i class="fa fa-spinner fa-pulse"></i>
          <span>Saving scene&hellip;</span>
        </div>
        <div class="version">Version 0.0.1</div>
      </div>

      <!-- Modals -->
      <project-selection 
        :is-open="isOpeningProject" 
        @on-project-opened="project = $event; isOpeningProject = false;" 
        @on-open-project-cancelled="isOpeningProject = false"
        @on-project-open-closed="isOpeningProject = false"
        @on-new-project-clicked="isOpeningProject = false; isAddingProject = true;">
      </project-selection>

      <settings 
        :is-open="isOpeningSettings" 
        @on-settings-closed="isOpeningSettings = false">
      </settings>
      
      <new-project 
        :is-open="isAddingProject" 
        @on-new-project-saved="isAddingProject = false" 
        @on-new-project-cancelled="isAddingProject = false">
      </new-project>

      <new-scene 
        :is-open="isAddingScene" 
        @on-new-scene-saved="isAddingScene = false" 
        @on-new-scene-cancelled="isAddingScene = false">
      </new-scene>

      <modal 
        :title="'Scene Configuration'" 
        :is-open="isOpeningSceneConfig" 
        @on-modal-saved="sceneInformation.setScene(sceneInformation.sceneCopy); isOpeningSceneConfig = false;" 
        @on-modal-closed="isOpeningSceneConfig = false">
        <scene-information ref="sceneInformation"></scene-information>
      </modal>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Ref } from 'vue-property-decorator';

import MainMenu from './MainMenu.vue';
import SceneEditor from './SceneEditor.vue';
import ProjectSelection from './ProjectSelection.vue';
import Modal from './Modal.vue';
import SceneInformation from './SceneInformation.vue';
import Settings from './Settings.vue';
import ProjectStorageService from '../services/project-storage.service';
import SettingsStorageService from '../services/settings-storage.service';
import EditorSettings from '../models/editor-settings';
import NewScene from './NewScene.vue';
import NewProject from './NewProject.vue';

import {
  Action, State,
} from 'vuex-class'

import BaseComponent from './BaseComponent';

@Component({
  components: {
    MainMenu,
    SceneEditor,
    ProjectSelection,
    Settings,
    NewScene,
    NewProject,
    Modal,
    SceneInformation
  }
})
export default class Default extends BaseComponent {
  isOpeningProject: boolean = false;
  isOpeningSettings: boolean = false;
  isAddingProject: boolean = false;
  isAddingScene: boolean = false;
  isOpeningSceneConfig: boolean = false;
  isLoaded: boolean = false;

  // @State project: Project;
  // @State scene: Scene;
  @Action setProject;
  @Action setScene;

  @State isExecutingSave;

  @Ref('sceneInformation')
  sceneInformation: SceneInformation;

  mounted(): void {
    // SystemManager.register(new GizmoSystem());

    let editorSettings: EditorSettings = new SettingsStorageService().load() || new EditorSettings();

    if (editorSettings.defaultProjectPath) {
      this.setProject(new ProjectStorageService().open(editorSettings.defaultProjectPath, false));
    }
    else if (editorSettings.lastProjectPath) {
      this.setProject(new ProjectStorageService().open(editorSettings.lastProjectPath, false));
    }
    else {
      // Open project selection.
      this.isOpeningProject = true;
    }

    this.isLoaded = true;
  }
};

</script>

<style scoped lang="scss">
.default-component {
  height: 100%;
  overflow: hidden;
}

.footer {
  background-color: #111;
  height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 15px;
  justify-content: space-between;
}

.footer .indicator {
  font-size: 14px;
}

.footer .indicator i {
  margin-right: 10px;
}

.footer .indicator span {
    font-size: 12px;
}

.footer .version {
  font-size: 12px;
  justify-self: flex-end;
  margin-left: auto;
}
</style>