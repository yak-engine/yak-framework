<template>
  <div class="project-listing-component">
    <div class="modal-overlay" :class="{'open': isOpen}" style="z-index: 999">
      <div class="modal">
        <div class="modal-header">My Projects</div>
        <div class="modal-content">
          <ul>
              <li v-for="(project, index) in projects" :key="index">
                  <div class="project-name">{{project.name}}</div>
                  <div class="project-path">{{project.path}}</div>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { app, OpenDialogReturnValue } from "electron/main";
import { Component, Prop, Vue } from "vue-property-decorator";
import ProjectStorageService from "../services/project-storage.service";

@Component
export default class ProjectListing extends Vue {
  @Prop() isOpen: boolean;

  projects: any[] = [];

  mounted(): void {
      this.projects = new ProjectStorageService().load<any[]>();
  }
};

</script>

<style scoped lang="scss">
.modal-overlay .modal .modal-content {
    padding: 0;
}

ul {
    li {
        border-bottom: 1px solid #181818;
        padding: 8px 12px;
        cursor: pointer;

        &:hover {
            background-color: #181818;
        }

        .project-name {
            font-size: 1.5em;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .project-path {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
    }
}
</style>