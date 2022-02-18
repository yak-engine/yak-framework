import { Scene } from '../scene/scene';
import { Tileset } from './tileset';

export abstract class BaseRenderer {
    /**
     * The canvas to render the current scene to.
     */
    public abstract engineCanvas: HTMLCanvasElement;

    /**
     * The current scene to render.
     */
    public abstract scene: Scene;

    /**
     * The tilesets to use for the current scene.
     */
    public abstract tilesets: Tileset[];

    /**
     * Called when the application loads.
     */
    abstract init(): void;

    /**
     * Draws to the renderer.
     */
    abstract draw(): void;
}