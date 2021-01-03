import EntityManager from './components/EntityManager';
import TilesetManager from './components/TilesetManager';
import Configuration from './configuration';
import EngineConfig from './engine-config';
import Tileset from './graphics/tileset';
import Scene from './models/scene';
import SceneConfig from './models/scene-config';

export default class SceneManager {
	public static async load(sceneName: string): Promise<Scene> {
		console.log('[ENGINE]: Started loading scene.');

		let scene: Scene = new Scene();

		let scenePath: string = `scenes\\${sceneName}.json`;

		if (Configuration.baseUrl) {
			scenePath = `${Configuration.baseUrl}\\${scenePath}`;
		}

		let response = await fetch(scenePath);
		console.log('[ENGINE]: Scene feteched successfully;');

		let sceneConfig: SceneConfig = await response.json();
		console.log('[ENGINE]: Scene parsed successfully;');

		// Parsed entities to typescript objects.
		EntityManager.getInstance().parseEntities(sceneConfig);
		
        console.log('[ENGINE]: Scene entities parsed successfully.');

		scene.name = sceneConfig.name;
		scene.rows = sceneConfig.columns;
		scene.columns = sceneConfig.columns;
        scene.tileSize = sceneConfig.tileSize;
		scene.layers = sceneConfig.layers;

		Configuration.scene = scene;

		return new Promise((resolve, reject) => {
			TilesetManager.loadTilesets(sceneConfig, (tilesets: Tileset[]) => {
				scene.tilesets = tilesets;
				Configuration.tilesets = tilesets;
				resolve(scene);
			});
		});
	}
}
