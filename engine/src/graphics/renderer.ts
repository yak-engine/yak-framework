import pointWorldPosition from "../helpers/current-viewport-grid-square";
import Point from "../primitives/point";
import Transform from "../primitives/transform";
import UIFragmentsRenderer from "../ui/ui-fragments-renderer";
import Layer from "./layer";
import Tileset from "./tileset";
import Configuration from "../configuration";
import Camera from "./camera";
import Input from "./input";
import isTransformEmpty from "../helpers/is-transform-empty";
import SpriteRendererComponent from "../components/sprite-renderer/SpriteRendererComponent";
import EntityManager from "../components/EntityManager";
import Entity from "../components/entity";
import MaterialComponent from "../components/material/MaterialComponent";
import TransformComponent from "../components/transform/TransformComponent";
import TilemapComponent from "../components/tilemap/TilemapComponent";
import Scene from "../models/scene";
import ManagerFactory from "../components/ManagerFactory";
import TagComponent from "../components/tag/TagComponent";
import TagComponentManager from "../components/tag/TagComponentManager";

export default class Renderer {
    /**
     * The canvas located within the default index.html document.
     */
    public engineCanvas: HTMLCanvasElement = null;

    /**
     * The 2D rendering context for the default canvas.
     */
    public context: CanvasRenderingContext2D = null;

    /**
     * The renderer that handle drawing the UI fragments to the given canvas context.
     */
    public uiFragmentsRender: UIFragmentsRenderer = new UIFragmentsRenderer(this);

    /**
     * The current position of the mouse in relation to the canvas. NOT the document.
     */
    public mousePosition: Point = new Point(0, 0);

    /**
     * The last position of the mouse within the canvas. 
     */
    public lastMousePosition: Point = new Point(0, 0);

    /**
     * The last grid position of the mouse within the canvas.
     */
    public gridCoordinates: Point;

    /**
     * Flag to determine if the mouse is down (specifcally left mouse clicks).
     */
    public isMouseDown: boolean = false;

    /**
     * Flag to determine if the canvas has selection mode enabled.
     */
    public isSelectionMode: boolean = false;

    /**
     * The transform of the current selection. If selection mode is off this
     * will be an empty transform.
     */
    public selectionTransform: Transform = new Transform(0, 0, 0, 0);

    /**
     * The current scene being rendered.
     */
    public scene: Scene;

    /**
     * The main scene camera this is always here.
     */
    public mainCamera: Camera = new Camera();

    /**
     * Main input tracking class.
     */
    public input: Input = new Input();

    public playerEntity: Entity;

    public defaultTilemapComponent: TilemapComponent;

    /**
     * Default constructor. Queries the canvas together with the canvas context
     * and bootstraps the canvas events.
     */
    constructor() {

    }

    init() {
        this.engineCanvas = <HTMLCanvasElement>document.querySelector('#engine-canvas');
        this.context = <CanvasRenderingContext2D>this.engineCanvas.getContext('2d');

        // Ensure we resize the canvas here.
        this.resizeCanvas();

        this.engineCanvas.addEventListener('mousedown', (event) => this.onCanvasMouseDown(event));
        this.engineCanvas.addEventListener('mouseup', (event) => this.onCanvasMouseUp(event));
        this.engineCanvas.addEventListener('mousemove', (event) => this.onCanvasMouseMove(event));

        // Load and store a reference to the default tilemap component.
        this.defaultTilemapComponent = ManagerFactory.get(TilemapComponent.name).data[0] as TilemapComponent;

        // TODO: DON'T DO THIS.
        EntityManager.getInstance().entities.forEach((entity) => {
            let tag: string = entity.getComponent<TagComponent>(TagComponent.name).name;

            if (tag === 'player') {
                this.playerEntity = entity;
            }
        });

        // let tagManager: TagComponentManager = ManagerFactory.get(TagComponent.name);
        // console.log(tagManager);
        // let componentDataIndex: number = tagManager.data.findIndex(x => (x as TagComponent).name === 'player');
        // this.playerEntity = EntityManager.getInstance().entities[tagManager.dataEntityMap[componentDataIndex]];

        console.log(this.playerEntity);

        // Bootstrap components
        this.mainCamera.viewport = new Transform(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
        this.mainCamera.max = new Point((this.scene.columns * this.scene.tileSize) - this.mainCamera.viewport.width, (this.scene.rows * this.scene.tileSize) - this.mainCamera.viewport.height);
    }

    draw() {
        this.clearCanvas();
        this.fillCanvas();
        this.drawLayers();

        // Run through renderer system.
        EntityManager.getInstance().entities.forEach((entity: Entity) => {
            let spriteRendererComponent = entity.getComponent<SpriteRendererComponent>(SpriteRendererComponent.name);

            if (spriteRendererComponent) {
                let materialComponent = entity.getComponent<MaterialComponent>(MaterialComponent.name);

                if (materialComponent) {
                    this.context.fillStyle = materialComponent.fillStyle;
                    this.context.globalAlpha = materialComponent.alpha;
                }

                let transform = entity.getComponent<TransformComponent>(TransformComponent.name).transform;

                if (spriteRendererComponent.row !== undefined) {
                    let cameraOffsetX = 0, cameraOffsetY = 0;

                    if (this.playerEntity.id !== entity.id) {
                        cameraOffsetX = this.mainCamera.viewport.x;
                        cameraOffsetY = this.mainCamera.viewport.y;
                    }

                    this.context.drawImage(
                        this.scene.tilesets[0].image,// this.tilesets[spriteRendererComponent.layer].image,
                        spriteRendererComponent.column * this.scene.tileSize,
                        spriteRendererComponent.row * this.scene.tileSize,
                        this.scene.tileSize,
                        this.scene.tileSize,
                        transform.x - cameraOffsetX,
                        transform.y - cameraOffsetY,
                        this.scene.tileSize,
                        this.scene.tileSize
                    );
                }
                else {
                    if (transform) {
                        this.context.fillRect(transform.x, transform.y, transform.width, transform.height);
                    }
                }
            }

            // Reset renderer context to default values.
            this.context.fillStyle = Configuration.canvasFill;
            this.context.globalAlpha = 1;
        });
        
        this.uiFragmentsRender.run();

        this.resizeCanvas();
    }

    drawLayers(): void {
        this.scene.layers.forEach((layer: Layer) => {
            if (layer.enabled) {
                let camera = this.mainCamera;
    
                var startCol = Math.floor(camera.viewport.x / this.scene.tileSize);
                var endCol = startCol + (camera.viewport.width / this.scene.tileSize) + 1;
                var startRow = Math.floor(camera.viewport.y / this.scene.tileSize);
                var endRow = startRow + (camera.viewport.height / this.scene.tileSize) + 1;
                var offsetX = -camera.viewport.x + startCol * this.scene.tileSize;
                var offsetY = -camera.viewport.y + startRow * this.scene.tileSize;
    
                for (let col = startCol; col <= endCol; col++) {
                    for (let row = startRow; row <= endRow; row++) {
                        // let sprite: number = layer.sprites[row * this.scene.columns + col];
                        let sprite: number = this.defaultTilemapComponent.tiles[row * this.scene.columns + col];
    
                        var x = (col - startCol) * this.scene.tileSize + offsetX;
                        var y = (row - startRow) * this.scene.tileSize + offsetY;
    
                        this.context.drawImage(
                            this.scene.tilesets[0].image, //this.tilesets[layer.tileset].image,
                            sprite * this.scene.tileSize,
                            0,
                            this.scene.tileSize,
                            this.scene.tileSize,
                            Math.round(x),
                            Math.round(y),
                            this.scene.tileSize,
                            this.scene.tileSize
                        );
                    }
                }
            }
        });
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
     * Adds a default back fill to the canvas.
     */
    fillCanvas(): void {
        this.context.fillStyle = Configuration.canvasFill;
        this.context.fillRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
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
        if (event.button === 0) {
            this.isMouseDown = true;
            // this.uiFragmentsRender.isHoveredFragmentClicked(this.mousePosition);
        }
    }

    onCanvasMouseUp(event: MouseEvent): void {
        this.isMouseDown = false;
    }

    onCanvasMouseMove(event: MouseEvent): void {
        this.mousePosition = new Point(event.offsetX, event.offsetY);
        this.gridCoordinates = pointWorldPosition(this.mousePosition);

        if (isTransformEmpty(this.selectionTransform)) {
            this.selectionTransform = new Transform(this.gridCoordinates.x * Configuration.gridSquareSize, this.gridCoordinates.y * Configuration.gridSquareSize, 0, 0);
        }
        else {
            this.selectionTransform.width = ((this.gridCoordinates.x * Configuration.gridSquareSize) - this.selectionTransform.x) + Configuration.gridSquareSize;
            this.selectionTransform.height = ((this.gridCoordinates.y * Configuration.gridSquareSize) - this.selectionTransform.y) + Configuration.gridSquareSize;
        }
    }
}