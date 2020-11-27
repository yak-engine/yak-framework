
<template>
  <div class="play-component" v-if="isVisible">
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
  @Prop() isVisible: boolean = false;

  // previewUrl: string = 'http://localhost:9000/play.html';
  previewUrl: string = 'http://localhost:9001';

  mounted() {
    this.previewUrl = `${this.previewUrl}?rootPath=${encodeURIComponent('')}&sceneName=scene1`;
    console.log(this.previewUrl);
  }
}
</script>

<style lang="scss" scoped>
.play-overlay {
  padding: 60px;
}

iframe {
    width: 100%;
    height: 100%;
}
</style>