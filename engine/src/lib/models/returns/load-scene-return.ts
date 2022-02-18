import { Tileset } from '../../graphics/tileset';
import { Scene } from '../../scene/scene';

export class LoadSceneReturn {
    public scene: Scene;
    public tilesets: Array<Tileset> = new Array();
    
    constructor(scene: Scene, tilesets: Tileset[]) {
        this.scene = scene;
        this.tilesets = tilesets;
    }
}