<template>
  <div class="component scene-editor-component">
      <div
        class="main"
        style="height: 100%; flex: 1; display: flex; flex-direction: row"
      >
        <div class="editor-left" style="width: 300px; background-color: #212121; display: flex; flex-direction: column;">
            <div style="flex: 1;">
              <div style="padding: 8px 15px; background-color: #181818; border-bottom: 1px solid black;" class="is-shadowed">
                <span style="font-weight: bold; color: #e7e7e7;">Scene Hierarchy</span>
              </div>
              <scene-hierarchy :entities="scene.entities" v-on:on-entity-clicked="entity = $event"></scene-hierarchy>
            </div>
            <!-- TODO: Refactor into it's own component. -->
            <div style="flex: 1;">
              <div style="padding: 8px 15px; background-color: #181818; border-bottom: 1px solid black;" class="is-shadowed">
                <span style="font-weight: bold; color: #e7e7e7;">Scene Configuration</span>
              </div>
              <div style="padding: 15px; display: grid; grid-template-columns: repeat(3, 1fr)">
                <div class="form-section">
                  <div class="form-label text-small">Tile size</div>
                  <input class="tag-name" type="text" v-model.number="scene.spriteSize" @change="updateScene()" />
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
        </div>
        <div style="flex: 1">
          <scene-listing :selected-scene="scene.name" @on-scene-selected="loadEditorScene($event)"></scene-listing>
          <ul class="nav nav-menu mb-0 fill-dark text-white is-shadowed" style="z-index: 500; border-bottom: 1px solid black;">
              <div class="nav-left">
                <ul class="nav-item">
                  <li>
                    <div
                      role="button"
                      class="btn-toolbar-item"
                      tabindex="0"
                      data-editor-mode="1"
                      title="Select"
                    >
                      <i
                        class="fa fa-mouse-pointer text-blue-lighten-5"
                      ></i>
                    </div>
                  </li>
                  <li>
                    <div
                      role="button"
                      class="btn-toolbar-item"
                      tabindex="0"
                      data-editor-mode="2"
                      title="Stamp"
                    >
                      <i class="fa fa-cube text-white"></i>
                    </div>
                  </li>
                  <li>
                    <div
                      role="button"
                      class="btn-toolbar-item"
                      tabindex="0"
                      data-editor-mode="3"
                      title="Shape fill"
                    >
                      <i class="fa fa-object-group text-white"></i>
                    </div>
                  </li>
                  <li>
                    <div
                      role="button"
                      class="btn-toolbar-item"
                      tabindex="0"
                      data-editor-mode="4"
                      title="Bucket fill"
                    >
                      <i class="fa fa-flask text-white"></i>
                    </div>
                  </li>
                  <li>
                    <div
                      role="button"
                      class="btn-toolbar-item"
                      tabindex="0"
                      data-editor-mode="5"
                    >
                      <i class="fa fa-object-group text-white"></i>
                    </div>
                  </li>
                  <li>
                    <div
                      role="button"
                      class="btn-toolbar-item"
                      tabindex="0"
                      data-editor-mode="6"
                      title="Eraser"
                    >
                      <i class="fa fa-eraser text-red-lighten-2"></i>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="nav-right">
                <ul class="nav-item">
                  <li class="menu-item">
                      <div role="button" tabindex="0" class="btn-play" @click="isPlaying = true">
                          <i class="fa fa-play text-green-darken-2 mr-default"></i>
                          <span class="text-white">PLAY</span>
                      </div>
                  </li>
                </ul>
              </div>
          </ul>
          <div
            class="canvas-container"
            style="
            background-color: #323232;
              display: flex;
              height: 100%;
              flex: 1;
              justify-content: center;
              align-items: center;
            "
          >
            <div style="min-width: 512px; overflow: auto">
              <canvas
                id="editor-canvas"
                tabindex="-1"
                width="512"
                height="512"
              ></canvas>
            </div>
          </div>
        </div>
        <div class="editor-right" style="width: 400px; background-color: #212121; display: flex; flex-direction: column;">
          <div style="flex: 1;">
            <div style="padding: 8px 15px; background-color: #181818; border-bottom: 1px solid black;" class="is-shadowed">
              <span style="font-weight: bold; color: #e7e7e7;"><i class="fa fa-cube fa-lg"></i> Inspector</span>
            </div>
            <inspector v-if="scene && scene.entities" :entity="entity"></inspector>
          </div>
          <!-- TODO: Refactor to be under the inspector in the right side drawer. -->
          <div style="flex: 1;">
            <div style="padding: 8px 15px; background-color: #181818; border-bottom: 1px solid black;" class="is-shadowed">
              <span style="font-weight: bold; color: #e7e7e7;">Manage Scene Layers</span>
            </div>

          </div>
        </div>
      </div>

    <play :is-visible="isPlaying" v-on:on-play-stopped="isPlaying = false"></play>
  </div>
</template>

<script lang="ts">

import EditorRenderer from '../editor-renderer';
import { Component, Prop, Vue } from "vue-property-decorator";

import SceneHierarchy from './SceneHierarchy.vue';
import SceneListing from './SceneListing.vue';
import Inspector from './Inspector.vue';

import SceneService from '../services/scene.service';

import Play from './Play.vue';

@Component({
  components: {
    SceneHierarchy,
    SceneListing,
    Inspector,
    Play
  }
})
export default class SceneEditor extends Vue {
  scene: any = {};
  sceneService: SceneService = new SceneService();

  entity: any = {};

  editorRenderer: EditorRenderer;
  isLoading: boolean = true;

  public isPlaying: boolean = false;

  // scene: Scene;

  constructor() {
    super();

    console.log((window as any).appQuit);

    // fetch("./bundle/scenes/scene1.json")
    //   .then((response) => response.json())
    //   .then((scene: Scene) => {
    //     this.scene = scene;

    //     this.editorRenderer = new EditorRenderer();
    //     this.editorRenderer.currentLayer = this.scene.layers[0];

    //     window.requestAnimationFrame((time: number) => this.mainLoop(time));
    //   })
    //   .finally(() => (this.isLoading = false));
  }

  test(entity) {
    this.entity = entity;
    console.log(this.entity);
  }

  async mounted() {
    this.loadEditorScene('scene1');

    this.editorRenderer = new EditorRenderer();
    window.requestAnimationFrame((time: number) => this.mainLoop(time));
  }

  loadEditorScene(sceneName: string): void {
    this.sceneService.getScene(sceneName).then((scene) => {
      this.scene = scene;
      this.entity = this.scene.entities[1];
      console.log(this.scene);
    });
  }

  updateScene(): void {
    this.sceneService.updateScene(this.scene).then((response) => {
      console.log(response);
    })
  }

  mainLoop(time: number) {
    window.requestAnimationFrame((time: number) => this.mainLoop(time));
    this.editorRenderer.run();
  }
};

</script>

<style scoped lang="scss">
input {
  width: calc(100% - 15px);
}
</style>