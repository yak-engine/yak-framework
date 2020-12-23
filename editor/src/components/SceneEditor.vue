<template>
  <div class="component scene-editor-component">
      <div class="main">
        <div class="editor-left" style="background-color: #212121; display: flex; flex-direction: column; flex-shrink: 0; flex-basis: 300px;">
            <div style="flex: 1;">
              <scene-hierarchy v-if="scene && testEntities" :entities="testEntities" v-on:on-entity-selected="onEntitySelected($event)"></scene-hierarchy>
            </div>
            <!-- TODO: Refactor into it's own component. -->
            <div style="flex: 1;">
              <scene-information></scene-information>
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
                    title="Position"
                  >
                    <i
                      class="fa fa-arrows"
                    ></i>
                  </div>
                </li>
                <li>
                  <div
                    role="button"
                    class="btn-toolbar-item"
                    tabindex="0"
                    data-editor-mode="1"
                    title="Scale"
                  >
                    <i
                      class="fa fa-sliders"
                    ></i>
                  </div>
                </li>
                <li>
                  <div
                    role="button"
                    class="btn-toolbar-item"
                    tabindex="0"
                    data-editor-mode="1"
                    title="Rotate"
                  >
                    <i
                      class="fa fa-refresh"
                    ></i>
                  </div>
                </li>
              </ul>
            </div>
            <div class="nav-right">
              <ul class="nav-item">
                <li class="menu-item">
                  <div
                    role="button"
                    tabindex="0"
                    class="btn-play"
                    @click="isPlaying = true"
                  >
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
          <tilemap-palette></tilemap-palette>
        </div>
        <div class="editor-right" style="background-color: #212121; display: flex; flex-direction: column; flex-shrink: 0; flex-basis: 400px;">
          <div style="flex: 1;">
            <div style="padding: 8px 15px; background-color: #181818; border-bottom: 1px solid black;" class="is-shadowed">
              <span style="font-weight: bold; color: #e7e7e7;"><i class="fa fa-cube fa-lg"></i> Inspector</span>
            </div>
            <inspector v-if="scene && testEntities" :entity="entity"></inspector>
          </div>
          <!-- TODO: Refactor to be under the inspector in the right side drawer. -->
          <div style="flex: 1;">
            <!-- component goes here -->
            <!-- <scene-layers 
              :layers="editorGlobal.scene.layers" 
              @on-layer-modified="sceneStorageService.updateLayer">
            </scene-layers> -->
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
import SceneInformation from './SceneInformation.vue';

import SceneService from '../services/scene.service';

import Play from './Play.vue';
import EngineConfig from '../../../engine/src/engine-config';
import Time from '../../../engine/src/time';
import Mouse from '../../../engine/src/graphics/mouse';
import ProjectStorageService from '../services/project-storage.service';
import Project from '../models/project';
import Tileset from '../../../engine/src/graphics/tileset';
import { Logger } from '../../../engine/src/logging/logger';
import EntityManager from '../../../engine/src/components/EntityManager';
import Entity from '../../../engine/src/components/entity';
import SpriteRendererComponent from '../../../engine/src/components/sprite-renderer/SpriteRendererComponent';
import TransformComponent from '../../../engine/src/components/transform/TransformComponent';
import Transform from '../../../engine/src/primitives/transform';
import CameraComponent from '../../../engine/src/components/camera/CameraComponent';
import TagComponent from '../../../engine/src/components/tag/TagComponent';
import TilemapComponent from '../../../engine/src/components/tilemap/TilemapComponent';
import TilemapPalette from './TilemapPalette.vue';
import Layer from '../../../engine/src/graphics/layer';
import EditorGlobal from '../editor-global';

import SceneStorageService from '../services/scene-storage.service';
import Scene from '../../../engine/src/models/scene';

import SceneManager from '../../../engine/src/scene-manager';
import TilemapComponentManager from '../../../engine/src/components/tilemap/TilemapComponentManager';
import ManagerFactory from '../../../engine/src/components/ManagerFactory';

@Component({
  components: {
    SceneHierarchy,
    SceneListing,
    Inspector,
    Play,
    SceneLayers,
    TilemapPalette,
    SceneInformation
  }
})
export default class SceneEditor extends Vue {
  @Watch('editorGlobal.project')
  onPropertyChanged(newValue: Project, oldValue: Project) {
    alert('fired');
    if (newValue && newValue.engineConfig) {
      this.loadEditorScene(newValue.engineConfig.scenes[0]);
    }
  }

  scene: Scene = new Scene();
  testEntities: Entity[] = [];
  sceneService: SceneService = new SceneService();

  editorGlobal: EditorGlobal = EditorGlobal;
  sceneStorageService: SceneStorageService = new SceneStorageService();

  entity: Entity = null;

  editorRenderer: EditorRenderer = null;
  isLoading: boolean = true;

  public isPlaying: boolean = false;

  async mounted() {
    // this.editorRenderer = new EditorRenderer();
    // this.loadEditorScene(EditorGlobal.project.engineConfig.scenes[0]);
  }

  loadEditorScene(sceneName: string): void {
    new SceneStorageService().load(sceneName);

    let tilemapEntity = EntityManager.getInstance().entities.find((entity) => {
      return entity.getComponent<TilemapComponent>(TilemapComponent.name);
    });

    console.log(tilemapEntity);

    let tilemapComponent: TilemapComponent = tilemapEntity.getComponent<TilemapComponent>(TilemapComponent.name);

    console.log(tilemapComponent);
    console.log(EntityManager.getInstance().entities);
    console.log(ManagerFactory.get(TilemapComponent.name));

    return;

    this.editorRenderer.scene = EditorGlobal.scene;
    this.editorRenderer.init(tilemapComponent);

    window.requestAnimationFrame((time: number) => this.mainLoop(time));
  }

  updateScene(): void {
    // EditorGlobal.sceneService.updateScene(EditorGlobal.scene).then((response) => {
    //   console.log(response);
    // })
  }

  onEntitySelected(entity: Entity): void {
    this.entity = entity;
    console.log(this.entity);
    this.editorRenderer.selectedEntity = this.entity;
  }

  mainLoop(time: number) {
    window.requestAnimationFrame((time: number) => this.mainLoop(time));

    Time.calculateDeltaTime(time);
    Mouse.update(this.editorRenderer.mousePosition);

    console.log(Mouse.xDiff);

    this.editorRenderer.update();
    this.editorRenderer.draw();
  }

  @Watch('editorRenderer.selectedEntity')
  onEntityChanged(newValue: any, oldValue: any): void {
    this.entity = newValue;
  }
};

</script>

<style scoped lang="scss">
.main {
  height: 100%; 
  flex: 1; 
  display: flex; 
  flex-direction: row;
}

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