import EntityManager from './entity-manager';
import Configuration from './configuration';
import Tileset from './graphics/tileset';
import Scene from './models/scene';
import LoadSceneReturn from './models/returns/load-scene-return';
import { Logger } from './logging/logger';

export default class SceneManager {
	public static async load(sceneName: string, baseUrl: string = ''): Promise<LoadSceneReturn> {
		Logger.info('Started loading scene.', SceneManager.name);

		let scenePath: string = `${sceneName}.json`;

		if (baseUrl) {
			scenePath = `${baseUrl}\\${scenePath}`;
		}

		let response = await fetch(scenePath);
		let scene: Scene = await response.json();

		Logger.info('Scene loaded and parsed successfully', SceneManager.name);

		// Parsed entities to typescript objects.
		EntityManager.getInstance().parseEntities(scene);
		
		let tilesets: Array<Tileset> = new Array();

		for (let tilesetName of scene.tilesets) {
			let tilesetImage = new Image();

			let tilesetPath: string = `tilesets/${tilesetName}`;

			if (Configuration.baseUrl) {
				tilesetPath = `file://${Configuration.baseUrl.replace(/\\/g, "/")}/${tilesetPath}`;
            }

			tilesetImage.src = tilesetPath;

			await tilesetImage.decode();

			tilesets.push(new Tileset(tilesetImage));

			Logger.info(`Scene tileset ${tilesetName} loaded`, SceneManager.name);
		}

		Logger.info('Finished loading scene', SceneManager.name);

		return new LoadSceneReturn(scene, tilesets);
	}
}
