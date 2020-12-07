
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
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1000;
      "
    >
      <div
        class="play-overlay is-shadowed"
        style="
          position: absolute;
          inset: 120px;
          background-color: #181818;
          border-radius: 8px;
        ">

        <div class="play-header">
          <span class="title">Preview</span>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="background-color: transparent; cursor: pointer;" @click="$emit('on-play-stopped')">
            <span aria-hidden="true" style="font-size: 42px;">&times;</span>
          </button>
        </div>
        <div class="play-body">
          <iframe :src="previewUrl" frameborder="0"></iframe>
        </div>
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