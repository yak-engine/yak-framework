import Tileset from "../tileset";
import Camera from "../camera";
import MaterialComponent from "../../components/MaterialComponent";
import BaseRenderer from "./base-renderer";
import Scene from "../../models/scene";
export default class CanvasRenderer extends BaseRenderer {
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
    /**
     * The 2D rendering context for the default canvas.
     */
    context: CanvasRenderingContext2D;
    /**
     * The main scene camera this is always here.
     */
    mainCamera: Camera;
    /**
     * Default constructor.
     */
    constructor(scene: Scene, tilesets: Tileset[]);
    /**
     * Initializes the canvas for the renderer.
     */
    init(): void;
    /**
     * Draw any entities to the canvas if they have the sprite renderer component.
     */
    draw(): void;
    private render;
    applyMaterial(materialComponent: MaterialComponent): void;
    /**
     * Clears the canvas for the next draw call.
     *
     * @author NSSure
     * @since 11/8/2020
     */
    clearCanvas(): void;
    /**
     * Resizes the canvas canvas to fit the dimensions of the viewport.
     *
     * @author NSSure
     * @since 11/8/2020
     */
    resizeCanvas(): void;
    /**
     * Gets the current width of the canvas.
     */
    getCanvasHeight(): number;
    /**
     * Gets the current height of the canvas.
     */
    getCanvasWidth(): number;
    /**
     * Sets the height of the canvas.
     * @param height The height to set the canvas to.
     */
    setCanvasHeight(height: number): void;
    /**
     * Sets the width of the canvas.
     * @param width The width to set the canvas to.
     */
    setCanvasWidth(width: number): void;
    onCanvasMouseDown(event: MouseEvent): void;
    onCanvasMouseUp(event: MouseEvent): void;
    onCanvasMouseMove(event: MouseEvent): void;
}
//# sourceMappingURL=canvas-renderer.d.ts.map