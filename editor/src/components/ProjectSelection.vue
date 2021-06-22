<template>
  <div class="project-listing-component">
    <div class="modal-overlay" :class="{'open': isOpen}" style="z-index: 999">
      <div class="modal">
        <div class="modal-header flex flex-r justify-content-between">
          <span class="modal-title">My Projects</span>
          <div class="modal-actions">
            <button type="button" class="button fill-transparent text-white text-accent-hover" @click="$emit('on-new-project-clicked')">
              <i class="fa fa-plus"></i>&nbsp;New project
            </button>
            <button type="button" class="button fill-transparent text-white text-accent-hover" @click="importProject()">
              <i class="fa fa-upload"></i>&nbsp;Import
            </button>
            <div role="button" tabindex="0" @click="$emit('on-project-open-closed')">
                <i class="fa fa-close fa-lg text-red"></i>
            </div>
          </div>
        </div>
        <div class="modal-content">
          <ul v-if="projects && projects.length > 0">
              <li v-for="(project, index) in projects" :key="index" @click="openProject(project.path)">
                  <div class="project-name">{{project.name}}</div>
                  <div class="project-path">{{project.path}}</div>
              </li>
          </ul>
          <div v-else style="padding: 15px;">
            <span>You have no projects</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Project from "../models/project";
import ProjectStorageService from "../services/project-storage.service";

@Component
export default class ProjectSelection extends Vue {
  @Prop() isOpen: boolean;

  projects: any[] = [];

  mounted(): void {
    this.projects = new ProjectStorageService().load<any[]>();
  }

  async importProject(): Promise<void> {
    let results: string[] = await (window as any).electron.dialog.showOpenDialogSync({
        properties: ['openDirectory']
    });

    if (results) {
      try {
        new ProjectStorageService().open(results[0], true);
      }
      catch(ex) {
        (this as any).$sureToast.showError(ex);
      }
    }
  }

  openProject(projectPath: string): void {
    try {
      let openedProject: Project = new ProjectStorageService().open(projectPath, false);
      this.$emit('on-project-opened', openedProject);
    }
    catch(ex) {
      console.log(ex);
      (this as any).$sureToast.showError(ex);
    }
  }
};

</script>

<style scoped lang="scss">
.modal-overlay .modal .modal-content {
    padding: 0;
}

ul {
  max-height: 400px;

    li {
        border-bottom: 1px solid #181818;
        padding: 15px;
        cursor: pointer;

        &:hover {
            background-color: #181818;
        }

        .project-name {
            font-size: 18px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            margin-bottom: 5px;
        }

        .project-path {
            font-size: 14px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
    }
}
</style>