import Tileset from '../graphics/tileset';
import SceneConfig from '../models/scene-config';

import { Logger } from '../logging/logger';
import Configuration from '../configuration';

export default class TilesetManager {
	public static async loadTilesets(sceneConfig: SceneConfig): Promise<Tileset[]> {
        let tilesets: Tileset[] = [];

        let isLoading: boolean = true;

        // let img = await fetch('file:\\\\\\C:\\Users\\Nick\\Documents\\Programming\\game-engine\\sample-projects\\project-import-test\\tilesets\\BaseChip_pipo.png');
        // let blob: Blob = await img.blob();

        // let fileReader = new FileReader();

        // fileReader.readAsDataURL(blob);

        // fileReader.onload = () => {
        //     alert('hello');
        //     let base64 = fileReader.result as string;
        //     console.log(base64);
        //     let img = new Image();
        //     img.src = base64;
        //     let tileset = new Tileset(img);
        //     tilesets.push(tileset);
        //     isLoading = false;
        // }
        
		// sceneConfig.tilesets.forEach((tilesetName: string) => {
		// 	let image = new Image();

		// 	image.onload = () => {
		// 		tilesets.push(new Tileset(image));
        //     };
            
		// 	image.onerror = () => {
		// 		Logger.data('failed to load tileset');
		// 	};

		// 	// let tilesetPath: string = `tilesets\\${tilesetName}`;

		// 	// if (Configuration.baseUrl) {
		// 	// 	tilesetPath = `file:\\\\${Configuration.baseUrl}\\${tilesetPath}`;
        //     // }

        //     // console.log(tilesetPath);
            
        //     // image.src = tilesetPath;

        //     image.src = 'file:\\\C:\Users\Nick\Documents\Programming\game-engine\sample-projects\project-import-test\tilesets\BaseChip_pipo.png';
        // });

		// while (tilesets.length !== sceneConfig.tilesets.length) {
		// 	continue;
        // }
        
        while(isLoading) {
            continue;
        }

        console.log('loaded tilesets');

		return tilesets;
	}
}
