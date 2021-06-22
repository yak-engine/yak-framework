<template>
  <div id="app">
    <Default />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

import Default from "./components/Default.vue";
import { TransformMode } from "./enums/TransformMode";

@Component({
  components: {
    Default,
  },
})
export default class App extends Vue {
  @Action setTransformMode;

  constructor() {
    super();

    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "w":
          this.setTransformMode(TransformMode.MOVE);
          break;
        case "e":
          this.setTransformMode(TransformMode.SCALE);
          break;
        case "r":
          this.setTransformMode(TransformMode.ROTATE);
          break;
      }
    });
  }
}
</script>

<style lang="scss">
@import "./styles/main.scss";

.selected {
  background-color: #007acc;
  color: white;
}

.scene-editor-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #181818;
  border-bottom: 1px solid black;
  height: 47px;
  padding: 0 15px;

  .nav-item {
    li {
      &.selected {
        border-radius: 8px;
        outline: none;
        border: none;
      }
    }
  }

  .title {
    font-weight: bold;
    color: #e7e7e7;
  }

  .actions {
    display: flex;

    button {
      background-color: transparent;
      color: #ffffff;
      cursor: pointer;
    }
  }
}
</style>
