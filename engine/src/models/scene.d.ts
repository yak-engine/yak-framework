import Layer from "../graphics/layer";
export default class Scene {
    /**
     * The friendly name of the scene.
     */
    name: string;
    /**
     * The total number of sprite rows.
     */
    rows: number;
    /**
     * The total number of sprite columns.
     */
    columns: number;
    /**
     * The width and height of the base tilset sprites.
     */
    tileSize: number;
    /**
     * The name of the image source file for each of the tilsets used during the scene.
     */
    tilesets: Array<string>;
    /**
     * The tilemap for the current scene.
     */
    tilemap: any;
    /**
     * The entities that exist within the scene.
     */
    entities: Array<any>;
    /**
     * The layers to which content will be rendered to the screen.
     */
    layers: Array<Layer>;
}
//# sourceMappingURL=scene.d.ts.map