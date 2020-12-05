

<template>
  <div class="scene-listing scene-listing-component fill-dark text-white is-shadowed" style="border-bottom: 1px solid black;">
    <div v-for="(scene, index) in scenes" :key="scene" class="scene" :class="{'selected': selectedScene === scene}">
      <span role="button" aria-label="Load scene" @click="selectScene(scene, index)">{{scene}}</span>
      <button type="button" aria-label="Delete scene" @click="deleteScene(scene, index)" style="background-color: transparent; cursor: pointer; padding: 0; padding-left: 5px;">
        <span class="text-red" aria-hidden="true" style="font-size: 18px;">×</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";

import SceneService from "../services/scene.service";

@Component
export default class SceneListing extends Vue {
  @Prop() selectedScene: string;

  scenes: Array<any> = new Array();

  mounted() {
    // new SceneService().listScenes().then((scenes) => this.scenes = scenes);
  }

  selectScene(sceneName: string, index: number): void {
    this.$emit('on-scene-selected', sceneName);
  }

  deleteScene(sceneName: string, index: number): void {
    new SceneService().deleteScene(sceneName).then(() => {
      this.scenes.splice(index, 1);
      this.$emit('on-scene-delete', sceneName);
    });
  }
};

</script>

<style scoped lang="scss">
.scene-listing {
  display: flex;
  flex-direction: row;

  .scene {
    flex-grow: 0;
    padding: 8px 15px;
    border-right: 1.5px solid black;
    cursor: pointer;
    
    &:last-child {
      border-right: none;
    }

    &.selected {

    }
  }
}
</style>