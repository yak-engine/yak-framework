<template>
  <div class="scene-information-component" v-if="scene">
    <div style="padding: 8px 15px; background-color: #181818; border-bottom: 1px solid black;" class="is-shadowed">
      <span style="font-weight: bold; color: #e7e7e7;">Scene Configuration</span>
    </div>
    <div style="padding: 15px; display: grid; grid-template-columns: repeat(3, 1fr)">
      <div class="form-section">
        <div class="form-label text-small">Tile size</div>
        <input class="tag-name" type="text" v-model.number="scene.tileSize" @change="updateScene()" />
      </div>

      <div class="form-section">
        <div class="form-label text-small">Rows</div>
        <input class="tag-name" type="text" v-model.number="scene.rows" @change="updateScene()" />
      </div>

      <div class="form-section">
        <div class="form-label text-small">Columns</div>
        <input class="tag-name" type="text" v-model.number="scene.columns" @change="updateScene()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import Scene from '../../../engine/src/models/scene';

@Component
export default class SceneInformation extends Vue {
  scene: Scene = null;
};

</script>

<style scoped lang="scss">
.default-component {
  height: 100%;
  overflow: hidden;
}
</style>