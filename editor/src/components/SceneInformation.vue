<template>
  <div class="scene-information-component">
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
import { State } from 'vuex-class';

@Component
export default class SceneInformation extends Vue {
  @State scene;
};

</script>

<style scoped lang="scss">
.scene-information-component {
  flex: 1;
}
</style>