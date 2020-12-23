import Layer from "../graphics/layer";
import Tileset from "../graphics/tileset";

export default class Scene {
    name: string;
    rows: number;
    columns: number;
    tileSize: number;
    tilesets: Array<Tileset> = new Array();
    layers: Array<Layer> = new Array();
}