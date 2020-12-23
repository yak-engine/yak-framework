import Layer from "../graphics/layer";

export default class SceneConfig {
    name: string;
    rows: number;
    columns: number;
    tileSize: number;
    tilesets: Array<string> = new Array();
    entities: Array<any> = new Array();
    layers: Array<Layer> = new Array();
}