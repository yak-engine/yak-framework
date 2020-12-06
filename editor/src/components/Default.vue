<template>
  <div class="component default-component">
    <main-menu @on-open-project="isOpeningProject = true" :engine-config="engineConfig"></main-menu>
    <scene-editor></scene-editor>
    <project-selection 
      :is-open="isOpeningProject" 
      @on-project-opened="bootstrapProject($event)" 
      @on-open-project-cancelled="isOpeningProject = false"
      @on-project-open-closed="isOpeningProject = false">
      </project-selection>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

import MainMenu from './MainMenu.vue';
import SceneEditor from './SceneEditor.vue';
import ProjectSelection from './ProjectSelection.vue';
import Project from '../models/project';
import ProjectStorageService from '../services/project-storage.service';
import EngineConfig from '../../../engine/src/engine-config';

@Component({
  components: {
    MainMenu,
    SceneEditor,
    ProjectSelection
  }
})
export default class Default extends Vue {
  isOpeningProject: boolean = false;

  engineConfig: EngineConfig = new EngineConfig();

  bootstrapProject(project: Project): void {
    this.engineConfig = new ProjectStorageService().open(project.path);
  }
};

</script>

<style scoped lang="scss">

</style>