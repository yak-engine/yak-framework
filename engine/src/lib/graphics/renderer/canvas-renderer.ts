// Local imports.
import { Point } from "../../primitives/point";
import { Transform } from "../../primitives/transform";
import { BaseRenderer } from "./base-renderer";
import { Scene } from '../../scene/scene';
import { ManagerFactory } from '../../core/manager-factory';

// Component imports.
import { SpriteRendererComponent } from '../../scene/components';
import { MaterialComponent } from '../../scene/components';
import { TransformComponent } from '../../scene/components';
import { TilemapComponent } from '../../scene/components';

import { Logger } from '../../logging/logger';

import { Layer } from '../../graphics/layer';
import { Tileset } from '../../graphics/tileset';
import { Camera } from '../../graphics/camera';
import { ComponentManager } from "../../core/component-manager";

export class CanvasRenderer extends BaseRenderer {
    /**
     * The canvas to render the current scene to.
     */
    public engineCanvas: HTMLCanvasElement;

    /**
     * The current scene to render.
     */
    public scene: Scene;

    /**
     * The tilesets to use for the current scene.
     */
    public tilesets: Tileset[] = [];

    /**
     * The 2D rendering context for the default canvas.
     */
    public context: CanvasRenderingContext2D;

    /**
     * The main scene camera this is always here.
     */
    public mainCamera: Camera = new Camera();

    /**
     * Default constructor.
     */
    constructor(scene: Scene, tilesets: Tileset[]) {
        super();

        this.scene = scene;
        this.tilesets = tilesets;

        if (!this.scene) {
            throw "You cannot initialize the renderer without a scene.";
        }

        if (!this.tilesets || this.tilesets.length === 0) {
            throw "You cannot initialize the renderer without any tilesets.";
        }

        this.engineCanvas = <HTMLCanvasElement>document.querySelector('#engine-canvas');
        this.context = <CanvasRenderingContext2D>this.engineCanvas.getContext('2d');
    }

    /**
     * Initializes the canvas for the renderer.
     */
    public init() {
        Logger.info('Started initializing canvas renderer', CanvasRenderer.name);

        this.engineCanvas.addEventListener('mousedown', (event) => this.onCanvasMouseDown(event));
        this.engineCanvas.addEventListener('mouseup', (event) => this.onCanvasMouseUp(event));
        this.engineCanvas.addEventListener('mousemove', (event) => this.onCanvasMouseMove(event));

        // Initialize the camera for the renderer.
        this.mainCamera.viewport = new Transform(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
        this.mainCamera.max = new Point((this.scene.columns * this.scene.tileSize) - this.mainCamera.viewport.width, (this.scene.rows * this.scene.tileSize) - this.mainCamera.viewport.height);

        Logger.info('Finished initializing canvas renderer', CanvasRenderer.name);
    }

    /**
     * Draw any entities to the canvas if they have the sprite renderer component.
     */
    draw(): void {
        /**
         * Clear the canvas for the next render call.
         */
        this.clearCanvas();

        /**
         * Render the tilemap and standalone sprites.
         */
        this.render();

        /**
         * Ensure the canvas is resized to match the current size of the viewport.
         */
        this.resizeCanvas();
    }

    private render(): void {
        this.scene.layers.forEach((layer: Layer, index: number) => {
            if (layer.enabled) {
                // Render the tilemap sprites for the current layer.
                let tilemapManager: ComponentManager<TilemapComponent> = ManagerFactory.get(TilemapComponent.name);

                tilemapManager.instances.forEach((tilemapInstance: TilemapComponent) => {
                    var startCol = 0; // Math.floor(camera.viewport.x / this.scene.tileSize);
                    var endCol = 64; // startCol + (camera.viewport.width / this.scene.tileSize) + 1;
                    var startRow = 0; // Math.floor(camera.viewport.y / this.scene.tileSize);
                    var endRow = 64; // startRow + (camera.viewport.height / this.scene.tileSize) + 1;
                    var offsetX = 0; // -camera.viewport.x + startCol * this.scene.tileSize;
                    var offsetY = 0; // -camera.viewport.y + startRow * this.scene.tileSize;

                    for (let col = startCol; col <= endCol; col++) {
                        for (let row = startRow; row <= endRow; row++) {
                            let sprite: number = tilemapInstance.tiles[row * 64 + col]; // this.scene.columns

                            var x = (col - startCol) * 32 + offsetX; // this.scene.tileSize
                            var y = (row - startRow) * 32 + offsetY; // this.scene.tileSize

                            this.context.drawImage(
                                this.tilesets[tilemapInstance.tilesetIndex].image!, //this.tilesets[layer.tileset].image,
                                sprite * 32,
                                0,
                                32,
                                32,
                                Math.round(x),
                                Math.round(y),
                                32,
                                32
                            );
                        }
                    }
                });

                // Render any standalone sprites for the current layer.
                let spriteManager: ComponentManager<SpriteRendererComponent> = ManagerFactory.get(SpriteRendererComponent.name);

                spriteManager.entities.forEach((entity) => {
                    let spriteRenderer = spriteManager.getInstance(entity) as SpriteRendererComponent;
                    let spriteTransform = entity.getComponent(TransformComponent) as TransformComponent;

                    let material = entity.getComponent(MaterialComponent) as MaterialComponent;

                    if (material) {
                        this.applyMaterial(material);
                    }

                    this.context.drawImage(
                        this.tilesets[0].image!,// this.tilesets[spriteRendererComponent.layer].image,
                        spriteRenderer.column! * this.scene.tileSize,
                        spriteRenderer.row! * this.scene.tileSize,
                        this.scene.tileSize,
                        this.scene.tileSize,
                        spriteTransform.transform.x - 0, // cameraOffsetX,
                        spriteTransform.transform.y - 0, // cameraOffsetY,
                        this.scene.tileSize,
                        this.scene.tileSize
                    );
                });
            }
        })
    }

    applyMaterial(materialComponent: MaterialComponent): void {
        this.context.fillStyle = materialComponent.fillStyle!;
        this.context.globalAlpha = materialComponent.alpha;
    }

    /**
     * Clears the canvas for the next draw call.
     * 
     * @author NSSure
     * @since 11/8/2020
     */
    clearCanvas(): void {
        this.context.clearRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
    }

    /**
     * Resizes the canvas canvas to fit the dimensions of the viewport.
     * 
     * @author NSSure
     * @since 11/8/2020
     */
    resizeCanvas(): void {
        if (this.getCanvasWidth() !== window.innerWidth || this.getCanvasHeight() !== window.innerHeight) {
            this.setCanvasWidth(window.innerWidth);
            this.setCanvasHeight(window.innerHeight);
        }
    }

    /**
     * Gets the current width of the canvas.
     */
    getCanvasHeight(): number {
        return this.engineCanvas.height;
    }

    /**
     * Gets the current height of the canvas.
     */
    getCanvasWidth(): number {
        return this.engineCanvas.width;
    }

    /**
     * Sets the height of the canvas.
     * @param height The height to set the canvas to.
     */
    setCanvasHeight(height: number): void {
        this.engineCanvas.height = height;
    }

    /**
     * Sets the width of the canvas.
     * @param width The width to set the canvas to.
     */
    setCanvasWidth(width: number): void {
        this.engineCanvas.width = width;
    }

    onCanvasMouseDown(event: MouseEvent): void {
        console.log('mousedown');
    }

    onCanvasMouseUp(event: MouseEvent): void {
        console.log('mouseup');
    }

    onCanvasMouseMove(event: MouseEvent): void {
        console.log('mousemove');
    }
}