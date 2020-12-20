<template>
  <div class="new-project-component">
    <div class="modal-overlay" :class="{'open': isOpen}" style="z-index: 999">
      <div class="modal">
        <div class="modal-header">Create New Project</div>
        <div class="modal-content">
          <div class="form-section">
            <div class="form-label">Project name</div>
            <input type="text" v-model="project.name" placeholder="Enter a project name" />
          </div>

          <div class="form-section">
            <div class="form-label">Project path</div>
            <directory-dialog @on-directory-selected="project.path = $event"></directory-dialog>
          </div>

          <div class="button-group">
            <button type="button" class="button fill-green-darken-1 text-white" @click="saveProject()">Save project</button>
            <button type="button" class="button fill-red-darken-1 text-white" @click="$emit('on-new-project-cancelled')">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { app, OpenDialogReturnValue } from "electron/main";
import { Component, Prop, Vue } from "vue-property-decorator";
import ProjectStorageService from "../services/project-storage.service";
import Project from "../models/project";
import DirectoryDialog from "./DirectoryDialog.vue";

@Component({
  components: {
    DirectoryDialog
  }
})
export default class NewProject extends Vue {
  @Prop() isOpen: boolean;

  project: Project = new Project();

  async selectTargetPath(): Promise<void> {
    let results: OpenDialogReturnValue = await (window as any).electron.dialog.showOpenDialog({
        properties: ['openDirectory'],
        defaultPath: 'C:/Users/Nick/Documents/Programming/game-engine/sample-projects'
    });

    if (results) {
        this.project.path = results.filePaths[0];
    }
  }

  saveProject(): void {
    new ProjectStorageService().create(this.project);
  }
};

</script>

<style scoped lang="scss">
input {
  width: calc(100% - 10px);
}
</style>