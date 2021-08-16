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

	}

	public ngOnInit(): void {
		this._stateService.scene$.subscribe((scene: Scene | null) => this.scene = scene);
		this._stateService.project$.subscribe((project: Project | null) => this.project = project);
	}

	async mounted() {
        // ManagerFactory.register(TagComponent, new TagComponentManager());
        // ManagerFactory.register(TransformComponent, new TransformComponentManager());
        // ManagerFactory.register(CameraComponent, new CameraComponentManager());
        // ManagerFactory.register(MaterialComponent, new MaterialComponentManager());
        // ManagerFactory.register(SpriteRendererComponent, new SpriteRendererComponentManager());
        // ManagerFactory.register(ColliderComponent, new ColliderComponentManager());
        // ManagerFactory.register(ImageComponent, new ImageComponentManager());
        // ManagerFactory.register(ScriptComponent, new ScriptComponentManager());

		this.loadEditorScene(this.project?.manifest.scenes[0]);
	}

	public async loadEditorScene(sceneName: string): Promise<void> {
		let loadSceneRtn: LoadSceneReturn = await SceneManager.load(sceneName, this.project?.path);

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
