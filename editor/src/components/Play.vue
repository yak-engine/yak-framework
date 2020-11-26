
<template>
  <div class="play-component">
    <div
      class=""
      style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1000;
      "
    >
      <div
        class="play-overlay is-shadowed"
        style="
          position: absolute;
          top: 60px;
          left: 60px;
          right: 60px;
          bottom: 60px;
          background-color: #181818;
          border-radius: 8px;
        ">

        <iframe :src="previewUrl" frameborder="0"></iframe>

        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SceneHierarchy extends Vue {
  previewUrl: string = 'http://localhost:9000/bundle/play';

  mounted() {
    this.previewUrl = `${this.previewUrl}?rootPath=${encodeURIComponent('')}&sceneName=default-scene`;
    console.log(this.previewUrl);
  }
}
</script>

<style lang="scss" scoped>
iframe {
    width: 100%;
    height: 100%;
}
</style>