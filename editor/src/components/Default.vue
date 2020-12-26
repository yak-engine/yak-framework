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
        @on-modal-saved="sceneInformation.setScene(sceneInformation.sceneCopy)" 
        @on-modal-closed="isOpeningSceneConfig = false">
        <scene-information ref="sceneInformation"></scene-information>
      </modal>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Ref, Vue, Watch } from 'vue-property-decorator';

import MainMenu from './MainMenu.vue';
import SceneEditor from './SceneEditor.vue';
import ProjectSelection from './ProjectSelection.vue';
import Modal from './Modal.vue';
import SceneInformation from './SceneInformation.vue';
import Settings from './Settings.vue';
import Project from '../models/project';
import ProjectStorageService from '../services/project-storage.service';
import EngineConfig from '../../../engine/src/engine-config';
import SettingsStorageService from '../services/settings-storage.service';
import EditorSettings from '../models/editor-settings';
import NewScene from './NewScene.vue';
import NewProject from './NewProject.vue';
import EditorGlobal from '../editor-global';

import { mapActions } from 'vuex';

import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
import Configuration from '../../../engine/src/configuration';
import { watchFile } from 'fs-extra';
import Scene from '../../../engine/src/models/scene';
import SceneStorageService from '../services/scene-storage.service';
import SceneConfig from '../../../engine/src/models/scene-config';

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
export default class Default extends Vue {
  isOpeningProject: boolean = false;
  isOpeningSettings: boolean = false;
  isAddingProject: boolean = false;
  isAddingScene: boolean = false;
  isOpeningSceneConfig: boolean = false;

  isLoaded: boolean = false;

  @State project: Project;
  @State scene: Scene;
  @Action setProject;
  @Action setScene;

  @Ref('sceneInformation')
  sceneInformation: SceneInformation;

  mounted(): void {
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

  @Watch('scene')
  onSceneChanged(newValue: Scene, oldValue: Scene): void {
    if (newValue) {


      let sceneConfig: SceneConfig = new SceneConfig();

      EditorGlobal.sceneConfig.name = this.scene.name;
      EditorGlobal.sceneConfig.rows = this.scene.columns;
      EditorGlobal.sceneConfig.columns = this.scene.columns;
      EditorGlobal.sceneConfig.tileSize = this.scene.tileSize;
      // EditorGlobal.sceneConfig.tilesets = scene.tilesets;
      EditorGlobal.sceneConfig.layers = this.scene.layers;

      console.log(EditorGlobal.sceneConfig);

      // TODO: Set project path properly.
      new SceneStorageService().save(EditorGlobal.sceneConfig, this.project.path);
    }
  }
};

</script>

<style scoped lang="scss">
.default-component {
  height: 100%;
  overflow: hidden;
}
</style>