import { Tileset } from 'src/lib/graphics/tileset';
import { Scene } from 'src/lib/models/scene';

export default class LoadSceneReturn {
    public scene: Scene;
    public tilesets: Array<Tileset> = new Array();
    
    constructor(scene: Scene, tilesets: Tileset[]) {
        this.scene = scene;
        this.tilesets = tilesets;
    }
}