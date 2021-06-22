<template>
  <div class="camera-component">
    <div class="form-section">
      <div class="form-label">Tilemap</div>
      <select>
        <option v-for="(tilesetPath, index) in tilesetPaths" :key="index">{{tilesetPath}}</option>
      </select>
    </div>
    <button type="button" class="button fill-link text-white">Palette</button>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class TilemapComponent extends Vue {
  @State project;

  @Prop() inspectorComponentData: string;

  tilesetPaths: string[] = [];

  mounted(): void {
    const path = window.require('path');
    const fs = window.require('fs');

    let tilesetsPath: string = path.join(this.project.path, 'tilesets');

    if (!fs.existsSync(tilesetsPath)){
      throw "Required folder does not exist.";
    }
    
    fs.readdirSync(tilesetsPath).forEach(tilesetPath => this.tilesetPaths.push(tilesetPath));
  }
};

</script>

<style>

</style>