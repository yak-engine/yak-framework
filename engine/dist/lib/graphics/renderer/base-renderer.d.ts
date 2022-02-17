import { Scene } from 'src/lib/models/scene';
import { Tileset } from 'src/lib/graphics/tileset';
export declare abstract class BaseRenderer {
    /**
     * The canvas to render the current scene to.
     */
    abstract engineCanvas: HTMLCanvasElement;
    /**
     * The current scene to render.
     */
    abstract scene: Scene;
    /**
     * The tilesets to use for the current scene.
     */
    abstract tilesets: Tileset[];
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