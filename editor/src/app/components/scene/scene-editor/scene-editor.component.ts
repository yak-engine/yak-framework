// Third party imports.
import { Component, OnInit } from '@angular/core';

// Local imports.
import { Project } from 'models/project';
import SceneStorageService from 'services/scene-storage.service';
import SceneService from 'services/scene.service';
import { StateService } from 'services/state.service';
import EditorRenderer from '../../../../editor-renderer';

// Engine imports.
import { Scene } from '@yak-engine/models/scene';
import LoadSceneReturn from '@yak-engine/models/returns/load-scene-return';
import EntityManager from '@yak-engine/entity-manager';
import SceneManager from '@yak-engine/scene-manager';
import { Entity } from '@yak-engine/models/entity';
import ManagerFactory from '@yak-engine/manager-factory';

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
        ManagerFactory.bootstrap();
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

		console.log(this._stateService.scene);

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
