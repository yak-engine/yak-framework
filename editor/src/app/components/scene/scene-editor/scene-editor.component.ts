import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import SceneStorageService from 'src/app/services/scene-storage.service';
import SceneService from 'src/app/services/scene.service';
import { StateService } from 'src/app/services/state.service';
import EditorRenderer from 'src/editor-renderer';
import Scene from '../../../../../../engine/src/models/scene';
import LoadSceneReturn from '../../../../../../engine/src/models/returns/load-scene-return';
import EntityManager from '../../../../../../engine/src/entity-manager';
import SceneManager from '../../../../../../engine/src/scene-manager';
import Entity from '../../../../../../engine/src/models/entity';
import ManagerFactory from '../../../../../../engine/src/manager-factory';
import TagComponent from '../../../../../../engine/src/components/TagComponent';
import TransformComponent from '../../../../../../engine/src/components/TransformComponent';
import CameraComponent from '../../../../../../engine/src/components/CameraComponent';
import MaterialComponent from '../../../../../../engine/src/components/MaterialComponent';
import SpriteRendererComponent from '../../../../../../engine/src/components/SpriteRendererComponent';
import ColliderComponent from '../../../../../../engine/src/components/ColliderComponent';
import ImageComponent from '../../../../../../engine/src/components/ImageComponent';
import ScriptComponent from '../../../../../../engine/src/components/ScriptComponent';

import TagComponentManager from '../../../../../../engine/src/components/managers/TagComponentManager';
import TransformComponentManager from '../../../../../../engine/src/components/managers/TransformComponentManager';
import CameraComponentManager from '../../../../../../engine/src/components/managers/CameraComponentManager';
import MaterialComponentManager from '../../../../../../engine/src/components/managers/MaterialComponentManager';
import SpriteRendererComponentManager from '../../../../../../engine/src/components/managers/SpriteRendererComponentManager';
import ColliderComponentManager from '../../../../../../engine/src/components/managers/ColliderComponentManager';
import ImageComponentManager from '../../../../../../engine/src/components/managers/ImageComponentManager';
import ScriptComponentManager from '../../../../../../engine/src/components/managers/ScriptComponentManager';

@Component({
  selector: '[app-scene-editor]',
  templateUrl: './scene-editor.component.html',
  styleUrls: ['./scene-editor.component.scss']
})
export class SceneEditorComponent implements OnInit {
	public scene: Scene | null = null;

	public project: Project | null = null;

	public sceneService: SceneService = new SceneService();

	public sceneStorageService: SceneStorageService = new SceneStorageService();

	public editorRenderer: EditorRenderer | null = null;
	
	public isLoading: boolean = true;

	public isPlaying: boolean = false;

	public isPlayMode: boolean = false;

	constructor(private _stateService: StateService) {
        ManagerFactory.register(TagComponent.name, new TagComponentManager());
        ManagerFactory.register(TransformComponent.name, new TransformComponentManager());
        ManagerFactory.register(CameraComponent.name, new CameraComponentManager());
        ManagerFactory.register(MaterialComponent.name, new MaterialComponentManager());
        ManagerFactory.register(SpriteRendererComponent.name, new SpriteRendererComponentManager());
        ManagerFactory.register(ColliderComponent.name, new ColliderComponentManager());
        ManagerFactory.register(ImageComponent.name, new ImageComponentManager());
        ManagerFactory.register(ScriptComponent.name, new ScriptComponentManager());
	}

	public ngOnInit(): void {
		this._stateService.scene$.subscribe((scene: Scene | null) => this.scene = scene);
		this._stateService.project$.subscribe((project: Project | null) => {
			this.project = project;
			console.log(this.project);
			this.loadEditorScene('scene1');
		});
	}

	async mounted() {


		// this.project?.manifest.scenes[0]
		this.loadEditorScene('scene1');
	}

	public async loadEditorScene(sceneName: string): Promise<void> {
		let loadSceneRtn: LoadSceneReturn = await SceneManager.load(sceneName, 'assets');

		console.log(loadSceneRtn);

		this._stateService.setEntity(EntityManager.getInstance().entities[1]);
		this._stateService.setScene(loadSceneRtn.scene);

		this.editorRenderer = new EditorRenderer(loadSceneRtn.scene, loadSceneRtn.tilesets);

		this.editorRenderer.scene = loadSceneRtn.scene;
		this.editorRenderer.tilesets = loadSceneRtn.tilesets;
		this.editorRenderer.setSelectedEntity(EntityManager.getInstance().entities[1]);
		this.editorRenderer.init();

		window.requestAnimationFrame((time: number) => this.mainLoop(time));
	}

	onEntitySelected(entity: Entity): void {
		this._stateService.setEntity(entity);
		this.editorRenderer?.setSelectedEntity(entity);
	}

	mainLoop(time: number) {
		window.requestAnimationFrame((time: number) => this.mainLoop(time));
		this.editorRenderer?.draw();
	}
}
