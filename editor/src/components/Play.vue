
<template>
  <div class="play-component">
    <h1>test</h1>
    <div class="modal-overlay" :class="{ 'open': isPlayMode }">
      <div class="modal">
        <div class="modal-header flex flex-r justify-content-between">
          <span class="modal-title">My Projects</span>
          <div class="modal-actions">
            <button type="button" @click="$emit('on-play-stopped')">
                <i class="fa fa-close fa-lg text-red"></i>
            </button>
          </div>
        </div>
        <div class="modal-content">
          <canvas id="engine-canvas"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { State } from "vuex-class";

import Application from '../../../engine/src/application';
import Project from "../models/project";

@Component
export default class Play extends Vue {
  @State project: Project;
  @State isPlayMode: boolean;

  application: Application = null;

  @Watch('isPlayMode', { immediate: true })
  onIsVisibleChanged(newValue: boolean, oldValue: boolean): void {
    if (newValue) {
      this.application = new Application(this.project.path);
      this.application.start();
    }
    else {
      this.application = null;
    }

    console.log(this.application);
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
</style>