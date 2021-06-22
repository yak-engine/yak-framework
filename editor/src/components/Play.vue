
<template>
  <div class="play-component">
    <div class="modal-overlay" :class="{ 'open': isPlayMode }">
      <div class="modal">
        <div class="modal-header flex flex-r justify-content-between">
          <span class="modal-title">Play Preview</span>
          <div class="modal-actions">
            <button type="button" class="fill-transparent cursor-pointer" @click="setIsPlayMode(false)">
                <i class="fa fa-close fa-lg text-red"></i>
            </button>
          </div>
        </div>
        <div ref="playPreviewContainer" style="width: 640px; height: 360px;">
          <!-- C:\Users\Nick\Documents\Programming\game-engine\yak-framework\editor\public\preview\bundle\play.html -->
          <iframe :src="previewUrl" frameborder="0"></iframe>
          <canvas id="engine-canvas"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Ref, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";

import Application from '../../../engine/src/application';
import Configuration from "../../../engine/src/configuration";
import Project from "../models/project";

@Component
export default class Play extends Vue {
  @State project: Project;
  @State isPlayMode: boolean;

  @Action setIsPlayMode;

  application: Application = null;

  previewUrl: string = '';

  @Ref('playPreviewContainer')
  playPreviewContainer: HTMLDivElement;

  mounted(): void {
      this.previewUrl = `preview/play.html?baseUrl=${encodeURIComponent(this.project.path)}`;

      console.log(this.previewUrl);

      Configuration.width = this.playPreviewContainer.clientWidth;
      Configuration.height = this.playPreviewContainer.clientHeight;

      // this.application = new Application(this.project.path);

      // this.application.start();
  }
};

</script>

<style lang="scss" scoped>
.play-overlay {
  display: flex;
  flex-direction: column;
}

.play-header {
  background: #007ACC;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.play-header .title {
  font-size: 18px;
}

.play-body {
  flex: 1;
}

iframe {
    width: 100%;
    height: 100%;
}

.modal {
  width: auto !important;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
</style>