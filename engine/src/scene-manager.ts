import EntityManager from "./components/EntityManager";
import TilesetManager from "./components/TilesetManager";
import Configuration from "./configuration";
import Tileset from "./graphics/tileset";
import Scene from "./models/scene";
import SceneConfig from "./models/scene-config";

export default class SceneManager {
    public static async load(sceneName: string): Promise<Scene> {
        let scene: Scene = new Scene();

        let scenePath: string = `scenes\\${sceneName}.json`;

        if (Configuration.baseUrl) {
            scenePath = `${Configuration.baseUrl}\\${scenePath}`;
        }

        console.log(scenePath);

        let response = await fetch(scenePath);

        return response.json().then(async (sceneConfig) => {
            // // Parsed entities to typescript objects.
            EntityManager.getInstance().parseEntities(sceneConfig);
    
            // // Load tilesets.
            let tilesets: Tileset[] = await TilesetManager.loadTilesets(sceneConfig);
    
            scene.name = sceneConfig.name;
            scene.rows = sceneConfig.columns;
            scene.columns = sceneConfig.columns;
            scene.tileSize = sceneConfig.tileSize;
            scene.tilesets = tilesets;
    
            return scene;
        });
    }
}