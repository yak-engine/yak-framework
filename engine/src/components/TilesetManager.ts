import Configuration from '../configuration';
import Tileset from '../graphics/tileset';
import SceneConfig from '../models/scene-config';

export default class TilesetManager {
	public static loadTilesets(sceneConfig: SceneConfig, onCompleted: any): void {
        console.log('[ENGINE]: Started loading scene tilesets');

		let tilesets: Tileset[] = [];

		let tilesetsLoaded = 0;

		sceneConfig.tilesets.forEach(async (tilesetName, index) => {
            console.log(`[ENGINE]: Started fetching ${tilesetName} tileset`);

			let img = new Image();

			let tilesetPath: string = `tilesets/${tilesetName}`;

			if (Configuration.baseUrl) {
				tilesetPath = `file://${Configuration.baseUrl.replace(/\\/g, "/")}/${tilesetPath}`;
            }
            
            console.log(`[ENGINE] Tileset path: ${tilesetPath}`);

			img.onload = async () => {
				tilesetsLoaded++;
				tilesets.splice(index, 0, new Tileset(img));
                
                console.log(`[ENGINE]: Tileset loaded: ${tilesetPath}`);

				if (tilesetsLoaded === sceneConfig.tilesets.length) {
					console.log('[ENGINE] Scene tilesets loaded successfully.');
					console.log(tilesets);
					onCompleted(tilesets);
				}
            };
            
            img.onerror = async(error) => {
                console.error(error);
            }

            img.src = tilesetPath;
		});
	}
}
