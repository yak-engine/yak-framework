<template>
  <div class="component default-component">
    <div style="height: 100%; display: flex; flex-direction: column;" v-if="project">
      <main-menu 
        @on-new-project-clicked="isAddingProject = true"
        @on-new-scene-clicked="isAddingScene = true"
        @on-open-project="isOpeningProject = true"
        @on-open-settings="isOpeningSettings = true"
        :project="project">
      </main-menu>

      <scene-editor></scene-editor>

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
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

import MainMenu from './MainMenu.vue';
import SceneEditor from './SceneEditor.vue';
import ProjectSelection from './ProjectSelection.vue';
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

@Component({
  components: {
    MainMenu,
    SceneEditor,
    ProjectSelection,
    Settings,
    NewScene,
    NewProject
  }
})
export default class Default extends Vue {
  isOpeningProject: boolean = false;
  isOpeningSettings: boolean = false;
  isAddingProject: boolean = false;
  isAddingScene: boolean = false;

  project: Project = null;

  @Action setProject;

  mounted(): void {
    let editorSettings: EditorSettings = new SettingsStorageService().load() || new EditorSettings();

    if (editorSettings.defaultProjectPath) {
      this.project = new ProjectStorageService().open(editorSettings.defaultProjectPath, false);
    }
    else if (editorSettings.lastProjectPath) {
      this.project = new ProjectStorageService().open(editorSettings.lastProjectPath, false);
    }
    else {
      // Open project selection.
      this.isOpeningProject = true;
    }

    this.setProject(this.project);
  }
};

</script>

<style scoped lang="scss">
.default-component {
  height: 100%;
  overflow: hidden;
}
</style>