import Scene from "../../models/scene";
import Tileset from "../tileset";
export default abstract class BaseRenderer {
    /**
     * The canvas to render the current scene to.
     */
    engineCanvas: HTMLCanvasElement;
    /**
     * The current scene to render.
     */
    scene: Scene;
    /**
     * The tilesets to use for the current scene.
     */
    tilesets: Tileset[];
    constructor(scene: Scene, tilesets: Tileset[]);
    /**
     * Called when the application loads.
     */
    abstract init(): void;
    /**
     * Draws to the renderer.
     */
    abstract draw(): void;
}
//# sourceMappingURL=base-renderer.d.ts.map