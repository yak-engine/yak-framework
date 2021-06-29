<template>
	<div class="component scene-editor-component">
		<div class="main">
			<div class="editor-panel left">
				<scene-hierarchy v-if="scene"></scene-hierarchy>
				<project-hierarchy v-if="scene"></project-hierarchy>
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
				<inspector v-if="scene"></inspector>
				<scene-layers v-if="scene" :layers="scene.layers" @on-layer-modified="sceneStorageService.updateLayer"></scene-layers>
			</div>
		</div>

		<play v-if="isPlayMode" />
	</div>
</template>

<script lang="ts">
// Vue.
import { Component, Vue } from 'vue-property-decorator';

// Custom typescript.
import EditorRenderer from '../editor-renderer';

// Child components.
import SceneHierarchy from './SceneHierarchy.vue';
import ProjectHierarchy from './ProjectHierarchy.vue';
import SceneListing from './SceneListing.vue';
import Inspector from './Inspector.vue';
import SceneLayers from './SceneLayers.vue';
import SceneInformation from './SceneInformation.vue';
import SceneToolbar from './SceneToolbar.vue';
import Play from './Play.vue';
import TilemapPalette from './TilemapPalette.vue';

// Services.
import SceneService from '../services/scene.service';
import SceneStorageService from '../services/scene-storage.service';

// Vuex.
import { Action, State } from 'vuex-class';
import ManagerFactory from '../../../engine/src/manager-factory';
import CameraComponent from '../../../engine/src/components/CameraComponent';
import ColliderComponent from '../../../engine/src/components/ColliderComponent';
import ImageComponent from '../../../engine/src/components/ImageComponent';
import ScriptComponent from '../../../engine/src/components/ScriptComponent';
import ScriptComponentManager from '../../../engine/src/components/managers/ScriptComponentManager';
import ImageComponentManager from '../../../engine/src/components/managers/ImageComponentManager';
import ColliderComponentManager from '../../../engine/src/components/managers/ColliderComponentManager';
import SpriteRendererComponentManager from '../../../engine/src/components/managers/SpriteRendererComponentManager';
import MaterialComponentManager from '../../../engine/src/components/managers/MaterialComponentManager';
import CameraComponentManager from '../../../engine/src/components/managers/CameraComponentManager';
import TransformComponentManager from '../../../engine/src/components/managers/TransformComponentManager';
import TagComponentManager from '../../../engine/src/components/managers/TagComponentManager';
import TagComponent from '../../../engine/src/components/TagComponent';
import TransformComponent from '../../../engine/src/components/TransformComponent';
import MaterialComponent from '../../../engine/src/components/MaterialComponent';
import SpriteRendererComponent from '../../../engine/src/components/SpriteRendererComponent';
import SceneManager from '../../../engine/src/scene-manager';
import LoadSceneReturn from '../../../engine/src/models/returns/load-scene-return';
import EntityManager from '../../../engine/src/entity-manager';
import Entity from '../../../engine/src/models/entity';

@Component({
	components: {
		SceneHierarchy,
		ProjectHierarchy,
		SceneListing,
		Inspector,
		Play,
		SceneLayers,
		TilemapPalette,
		SceneInformation,
		SceneToolbar
	},
})
export default class SceneEditor extends Vue {
	@State project;
	@State scene;
	@State entity;
	@State transformMode;
	@State isPlayMode;

	@Action setScene;
	@Action setEntity;

	sceneService: SceneService = new SceneService();

	sceneStorageService: SceneStorageService = new SceneStorageService();

	editorRenderer: EditorRenderer = null;
	isLoading: boolean = true;

	public isPlaying: boolean = false;

	async mounted() {
        ManagerFactory.register(TagComponent, TagComponentManager);
        ManagerFactory.register(TransformComponent, TransformComponentManager);
        ManagerFactory.register(CameraComponent, CameraComponentManager);
        ManagerFactory.register(MaterialComponent, MaterialComponentManager);
        ManagerFactory.register(SpriteRendererComponent, SpriteRendererComponentManager);
        ManagerFactory.register(ColliderComponent, ColliderComponentManager);
        ManagerFactory.register(ImageComponent, ImageComponentManager);
        ManagerFactory.register(ScriptComponent, ScriptComponentManager);

		this.loadEditorScene(this.project.engineConfig.scenes[0]);
	}

	public async loadEditorScene(sceneName: string): Promise<void> {
		let loadSceneRtn: LoadSceneReturn = await SceneManager.load(sceneName, this.project.path);

		console.log(loadSceneRtn);

		this.setEntity(EntityManager.getInstance().entities[1]);
		this.setScene(loadSceneRtn.scene);

		this.editorRenderer = new EditorRenderer();

		this.editorRenderer.scene = loadSceneRtn.scene;
		this.editorRenderer.tilesets = loadSceneRtn.tilesets;
		this.editorRenderer.setSelectedEntity(this.entity);
		this.editorRenderer.init();

		window.requestAnimationFrame((time: number) => this.mainLoop(time));
	}

	onEntitySelected(entity: Entity): void {
		this.setEntity(entity);
		this.editorRenderer.setSelectedEntity(entity);
	}

	mainLoop(time: number) {
		window.requestAnimationFrame((time: number) => this.mainLoop(time));
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
