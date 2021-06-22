import Tileset from "../graphics/tileset";
import Scene from "./scene";

export default class LoadSceneReturn {
    scene: Scene;
    tilesets: Tileset[] = [];

    constructor(scene: Scene, tilesets: Tileset[]) {
        this.scene = scene;
        this.tilesets = tilesets;
    }
}