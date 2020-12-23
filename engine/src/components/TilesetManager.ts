import Tileset from "../graphics/tileset";
import SceneConfig from "../models/scene-config";

import { Logger } from "../logging/logger";

export default class TilesetManager {
    public static loadTilesets(sceneConfig: SceneConfig): Tileset[] {
        let tilesets: Tileset[] = [];

        sceneConfig.tilesets.forEach((tilesetPath: string) => {
           let image = new Image();

           image.onload = () => {
               tilesets.push(new Tileset(image));
           }

           image.onerror = () => {
               Logger.data('failed to load tileset');
           }
           
           image.src = `./tilesets/${tilesetPath}`;
        });

        while(tilesets.length !== sceneConfig.tilesets.length) {
            continue;
        }

        return tilesets;
    }
}