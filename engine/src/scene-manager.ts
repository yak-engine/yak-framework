import EntityManager from "./components/EntityManager";
import TilesetManager from "./components/TilesetManager";
import Tileset from "./graphics/tileset";
import Scene from "./models/scene";
import SceneConfig from "./models/scene-config";

export default class SceneManager {
    public static async load(sceneName: string): Promise<Scene> {
        let scene: Scene = new Scene();

        let sceneConfig: SceneConfig = (<SceneConfig>await (await fetch(`./api/scenes/${sceneName}.yaml`)).json());

        // Parsed entities to typescript objects.
        EntityManager.getInstance().parseEntities(sceneConfig);

        // Load tilesets.
        let tilesets: Tileset[] = TilesetManager.loadTilesets(sceneConfig);

        scene.name = sceneConfig.name;
        scene.rows = sceneConfig.columns;
        scene.columns = sceneConfig.columns;
        scene.tileSize = sceneConfig.tileSize;
        scene.tilesets = tilesets;

        return scene;
    }
}