<template>
  <div class="new-scene-component">
    <div class="modal-overlay" :class="{'open': isOpen}" style="z-index: 999">
      <div class="modal">
        <div class="modal-header">Create New Scene</div>
        <div class="modal-content">
          <div class="form-section">
            <div class="form-label">Scene name</div>
            <input type="text" v-model="scene.name" placeholder="Enter a scene name" />
          </div>

          <div class="form-section">
            <div class="form-label">Tile size</div>
            <input type="number" v-model.number="scene.tileSize" placeholder="Enter a tile size" />
          </div>

          <div class="form-section">
            <div class="form-label">Rows</div>
            <input type="number" v-model.number="scene.rows" placeholder="Enter how large the scene is on the y-axis" />
          </div>

          <div class="form-section">
            <div class="form-label">Columns</div>
            <input type="number" v-model.number="scene.columns" placeholder="Enter how large the scene is on the x-axis" />
          </div>

          <div class="button-group">
            <button type="button" class="button fill-green-darken-1 text-white" @click="addScene()">Save scene</button>
            <button type="button" class="button fill-red-darken-1 text-white" @click="$emit('on-new-scene-cancelled')">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";

import SceneService from "../services/scene.service";

@Component
export default class NewScene extends Vue {
  @Prop() isOpen: boolean;

  scene: any = {};

  addScene(): void {
    new SceneService().addScene(this.scene).then(() => {
      this.$emit('on-new-scene-saved');
    });
  }
};

</script>

<style scoped lang="scss">
input {
  width: calc(100% - 10px);
}
</style>