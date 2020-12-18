<template>
  <div class="component scene-editor-component">
      <div
        class="main"
        style="height: 100%; flex: 1; display: flex; flex-direction: row"
      >
        <div class="editor-left" style="background-color: #212121; display: flex; flex-direction: column; flex-shrink: 0; flex-basis: 300px;">
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
        <div style="flex: 1; display: flex; flex-direction: column; overflow: hidden;">
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
            <div class="canvas-container" style="min-width: 512px; overflow: auto">
              <canvas
                id="editor-canvas"
                tabindex="-1"
                width="512"
                height="512"
              ></canvas>
            </div>
        </div>
        <div class="editor-right" style="background-color: #212121; display: flex; flex-direction: column; flex-shrink: 0; flex-basis: 400px;">
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
            <!-- component goes here -->
            <scene-layers :layers="scene.layers"></scene-layers>
          </div>
        </div>
      </div>

    <play :is-visible="isPlaying" v-on:on-play-stopped="isPlaying = false"></play>
  </div>
</template>

<script lang="ts">

import EditorRenderer from '../editor-renderer';
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import SceneHierarchy from './SceneHierarchy.vue';
import SceneListing from './SceneListing.vue';
import Inspector from './Inspector.vue';
import SceneLayers from './SceneLayers.vue';

import SceneService from '../services/scene.service';

import Play from './Play.vue';
import EngineConfig from '../../../engine/src/engine-config';
import ProjectStorageService from '../services/project-storage.service';
import Scene from '../../../engine/src/graphics/scene';
import Project from '../models/project';
import Tileset from '../../../engine/src/graphics/tileset';
import { Logger } from '../../../engine/src/logging/logger';
import EntityManager from '../../../engine/src/components/EntityManager';
import Entity from '../../../engine/src/components/entity';

@Component({
  components: {
    SceneHierarchy,
    SceneListing,
    Inspector,
    Play,
    SceneLayers
  }
})
export default class SceneEditor extends Vue {
  @Prop() project: Project;

  @Watch('project')
  onPropertyChanged(newValue: Project, oldValue: Project) {
    if (newValue && newValue.engineConfig) {
      this.loadEditorScene(newValue.engineConfig.scenes[0]);
    }
  }

  scene: Scene = new Scene();
  sceneService: SceneService = new SceneService();

  entity: any = {};

  editorRenderer: EditorRenderer = null;
  isLoading: boolean = true;

  public isPlaying: boolean = false;

  async mounted() {
    this.editorRenderer = new EditorRenderer();
  }

  loadEditorScene(sceneName: string): void {
    const path = window.require('path');
    const fs = window.require('fs');
    const yaml = window.require('js-yaml');

    let scenePath: string = path.join(this.project.path, `scenes/${sceneName}.yaml`);

    if (!fs.existsSync(scenePath)){
        throw "Scene does not exist.";
    }

    this.scene = yaml.safeLoad(fs.readFileSync(scenePath, 'utf8'));

    // Load the tilesets
    let loadedTilesets = 0;

    this.scene.tilesets.forEach((tilesetPath: string) => {
      console.log(tilesetPath);

        let imageData = fs.readFileSync(path.join(this.project.path, `tilesets/${tilesetPath}`));
        let base64 = btoa([].reduce.call(new Uint8Array(imageData),function(p,c){return p+String.fromCharCode(c)},''))
        let dataUrl = `data:image/png;base64,${base64}`;

        let image = new Image();

        image.onload = () => {
            this.editorRenderer.tilesets.push(new Tileset(image));
            
            loadedTilesets++;

            if (loadedTilesets === this.scene.tilesets.length) {
              EntityManager.getInstance().entities = (this.scene.entities as unknown) as Set<Entity>;

              let tilemapComponent = this.scene.entities[2].tilemapComponent;
              this.editorRenderer.scene = this.scene;
              console.log(tilemapComponent);
              this.editorRenderer.init(tilemapComponent);
              window.requestAnimationFrame((time: number) => this.mainLoop(time));
            }
        }

        image.onerror = () => {
          Logger.data('failed to load tileset');
        }
        
        // image.src = path.join(this.project.path, `tilesets/${tilesetPath}`);
        image.src = dataUrl;
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

.scene-editor-component {
  overflow: hidden;
}

.canvas-container {
  padding: 120px;
  background: #181818;
  flex: 1;
}
</style>