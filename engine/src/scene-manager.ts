import EntityManager from './components/EntityManager';
import Configuration from './configuration';
import Tileset from './graphics/tileset';
import Scene from './models/scene';
import LoadSceneReturn from './models/load-scene-return';

export default class SceneManager {
	public static async load(sceneName: string, baseUrl: string = null): Promise<LoadSceneReturn> {
		console.log('[ENGINE]: Started loading scene.');

		let scenePath: string = `scenes\\${sceneName}.json`;

		if (baseUrl) {
			scenePath = `${baseUrl}\\${scenePath}`;
		}

		console.log(scenePath);

		let response = await fetch(scenePath);
		console.log('[ENGINE]: Scene feteched successfully;');

		let scene: Scene = await response.json();
		console.log('[ENGINE]: Scene parsed successfully;');

		// Parsed entities to typescript objects.
		EntityManager.getInstance().parseEntities(scene);
		
        console.log('[ENGINE]: Scene entities parsed successfully.');

		let tilesets: Tileset[] = [];

		scene.tilesets.forEach(async (tilesetName, index) => {
			let tilesetImage = new Image();
			
			let tilesetPath: string = `tilesets/${tilesetName}`;

			if (Configuration.baseUrl) {
				tilesetPath = `file://${Configuration.baseUrl.replace(/\\/g, "/")}/${tilesetPath}`;
            }

			tilesetImage.src = tilesetPath;

			await tilesetImage.decode();

			tilesets.push(new Tileset(tilesetImage));
		});

		return new LoadSceneReturn(scene, tilesets);
	}
}
