<template>
	<div class="component scene-editor-component">
		<!-- <img src="file:\\C:\Users\Nick\Documents\Programming\game-engine\sample-projects\project-import-test\tilesets\BaseChip_pipo.png" /> -->
		<div class="main">
			<div class="editor-panel left">
				<scene-hierarchy v-if="scene"></scene-hierarchy>
				<scene-information v-if="scene"></scene-information>
			</div>
			<div style="flex: 1; display: flex; flex-direction: column; overflow: hidden">
				<scene-listing v-if="scene" :selected-scene="scene.name" @on-scene-selected="loadEditorScene($event)"></scene-listing>

				<scene-toolbar v-if="scene"></scene-toolbar>

				<div class="canvas-container" style="min-width: 512px; overflow: auto">
					<canvas id="editor-canvas" tabindex="-1" width="512" height="512"></canvas>
				</div>

				<tilemap-palette v-if="scene"></tilemap-palette>
			</div>
			<div class="editor-panel right">
				<div style="flex: 1">
					<div class="scene-editor-panel-header">
						<span class="title" style="font-weight: bold; color: #e7e7e7"><i class="fa fa-cube fa-lg"></i> Inspector</span>
					</div>
					<inspector v-if="scene"></inspector>
				</div>
				<scene-layers v-if="scene"></scene-layers>
			</div>
		</div>

		<play />
	</div>
</template>

<script lang="ts">
// Vue.
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

// Custom typescript.
import EditorRenderer from '../editor-renderer';

// Child components.
import SceneHierarchy from './SceneHierarchy.vue';
import SceneListing from './SceneListing.vue';
import Inspector from './Inspector.vue';
import SceneLayers from './SceneLayers.vue';
import SceneInformation from './SceneInformation.vue';
import SceneToolbar from './SceneToolbar.vue';
import Play from './Play.vue';
import TilemapPalette from './TilemapPalette.vue';

// Services.
import SceneService from '../services/scene.service';
import ProjectStorageService from '../services/project-storage.service';
import SceneStorageService from '../services/scene-storage.service';

// Engine models.
import EngineConfig from '../../../engine/src/engine-config';
import Time from '../../../engine/src/time';
import Mouse from '../../../engine/src/graphics/mouse';
import Project from '../models/project';
import Tileset from '../../../engine/src/graphics/tileset';

import EntityManager from '../../../engine/src/components/EntityManager';
import Entity from '../../../engine/src/components/entity';
import Layer from '../../../engine/src/graphics/layer';
import EditorGlobal from '../editor-global';
import Scene from '../../../engine/src/models/scene';

// Logger.
import { Logger } from '../../../engine/src/logging/logger';

// Vuex.
import { Action, State } from 'vuex-class';
import Configuration from '../../../engine/src/configuration';

@Component({
	components: {
		SceneHierarchy,
		SceneListing,
		Inspector,
		Play,
		SceneLayers,
		TilemapPalette,
		SceneInformation,
		SceneToolbar
	}
})
export default class SceneEditor extends Vue {
	@State project;
	@State scene;
	@State entity;
	@State transformMode;

	@Action setScene;
	@Action setEntity;

	sceneService: SceneService = new SceneService();

	editorGlobal: EditorGlobal = EditorGlobal;
	sceneStorageService: SceneStorageService = new SceneStorageService();

	editorRenderer: EditorRenderer = null;
	isLoading: boolean = true;

	public isPlaying: boolean = false;

	async mounted() {
		Configuration.RegisterManagers();
		this.loadEditorScene(this.project.engineConfig.scenes[0]);
	}

	loadEditorScene(sceneName: string): void {
		let scene: Scene = new SceneStorageService().load(this.project, sceneName);

		this.setEntity(EntityManager.getInstance().entities[1]);
		this.setScene(scene);

		this.editorRenderer = new EditorRenderer();

		this.editorRenderer.scene = this.scene;
		this.editorRenderer.selectedEntity = this.entity;
		this.editorRenderer.init();

		window.requestAnimationFrame((time: number) => this.mainLoop(time));
	}

	updateScene(): void {
		// EditorGlobal.sceneService.updateScene(EditorGlobal.scene).then((response) => {
		//   console.log(response);
		// })
	}

	onEntitySelected(entity: Entity): void {
		this.setEntity(entity);
		this.editorRenderer.selectedEntity = entity;
	}

	mainLoop(time: number) {
		window.requestAnimationFrame((time: number) => this.mainLoop(time));

		Time.calculateDeltaTime(time);
		Mouse.update(this.editorRenderer.mousePosition);

		this.editorRenderer.update();
		this.editorRenderer.draw();
	}
}
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

.editor-panel {
	background-color: #252526; 
	display: flex; 
	flex-direction: column; 
	flex-shrink: 0;

	&.left {
		flex-basis: 300px;
	}

	&.right {
		flex-basis: 400px;
	}
}

.canvas-container {
	padding: 120px;
	background: #181818;
	flex: 1;
}
</style>
