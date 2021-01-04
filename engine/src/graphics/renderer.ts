import pointWorldPosition from "../helpers/current-viewport-grid-square";
import Point from "../primitives/point";
import Transform from "../primitives/transform";
import UIFragmentsRenderer from "../ui/ui-fragments-renderer";
import Layer from "./layer";
import Configuration from "../configuration";
import Camera from "./camera";
import Input from "./input";
import isTransformEmpty from "../helpers/is-transform-empty";
import EntityManager from "../components/EntityManager";
import Entity from "../components/entity";
import TilemapComponent from "../components/tilemap/TilemapComponent";
import Scene from "../models/scene";
import ManagerFactory from "../components/ManagerFactory";
import TagComponent from "../components/tag/TagComponent";
import SystemManager from "../systems/system-manager";

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

        // TODO: Don't do this here refactor this out into a system.
        // Load and store a reference to the default tilemap component.
        this.defaultTilemapComponent = ManagerFactory.get(TilemapComponent.name).components[0] as TilemapComponent;

        // TODO: DON'T DO THIS.
        // EntityManager.getInstance().entities.forEach((entity: Entity) => {
        //     let tag: string = entity.getComponent<TagComponent>(TagComponent.name).name;

        //     if (tag === 'player') {
        //         this.playerEntity = entity;
        //     }
        // });

        // let tagManager: TagComponentManager = ManagerFactory.get(TagComponent.name);
        // console.log(tagManager);
        // let componentDataIndex: number = tagManager.data.findIndex(x => (x as TagComponent).name === 'player');
        // this.playerEntity = EntityManager.getInstance().entities[tagManager.dataEntityMap[componentDataIndex]];

        // console.log(this.playerEntity);

        // Bootstrap components
        this.mainCamera.viewport = new Transform(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
        this.mainCamera.max = new Point((this.scene.columns * this.scene.tileSize) - this.mainCamera.viewport.width, (this.scene.rows * this.scene.tileSize) - this.mainCamera.viewport.height);
    }

    update(): void {
        SystemManager.systems.forEach((system) => {
            system.update();
        });

        // let horizontal = Input.horizontal();
        // let vertical = Input.vertical();

        // let playerTransform: Transform = this.playerEntity.getComponent<TransformComponent>(TransformComponent.name).transform;
        // let camera: Camera = (ManagerFactory.get(CameraComponent.name).data[0] as CameraComponent).camera;

        // if (horizontal !== 0) {
        //     let movementX = horizontal * 150;
        //     playerTransform.x += movementX;

        //     if (camera.viewport.x > (camera.viewport.width - 100)) {
        //         playerTransform.clampX(0, camera.viewport.width - this.scene.tileSize);
        //     }
        //     else {
        //         playerTransform.clampX(0, camera.viewport.width);
        //     }
        // }

        // if (vertical !== 0) {
        //     let movementY = vertical * 150;
        //     playerTransform.y += movementY;
        //     playerTransform.y = Math.max(0, Math.min(playerTransform.y, this.scene.rows * this.scene.tileSize - 32));

        //     if (camera.viewport.y > (camera.viewport.height - 100)) {
        //         playerTransform.clampY(0, camera.viewport.height - this.scene.tileSize);
        //     }
        //     else {
        //         playerTransform.clampY(0, camera.viewport.height - 100);
        //     }
        // }

        // if (playerTransform.x >= camera.viewport.width - 100 || playerTransform.x < 100) {
        //     camera.viewport.x += playerTransform.x;
        //     // camera.viewport.x = Math.max(0, Math.min(camera.viewport.x, camera.max.x));
        // }

        // if (playerTransform.y >= camera.viewport.height - 100 || playerTransform.y <= 100) {
        //     camera.viewport.y += vertical * 150;
        //     camera.viewport.y = Math.max(0, Math.min(camera.viewport.y, camera.max.y));
        // }
    }

    draw() {
        this.clearCanvas();
        this.fillCanvas();

        SystemManager.systems.forEach((system) => {
            system.draw(this.context);
        });
        
        this.uiFragmentsRender.run();

        this.resizeCanvas();
    }

    // Refactor into tilemap system
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
                            this.scene.tilesets[this.defaultTilemapComponent.tilesetIndex].image, //this.tilesets[layer.tileset].image,
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
        // if (this.getCanvasWidth() !== window.innerWidth || this.getCanvasHeight() !== window.innerHeight) {
        //     this.setCanvasWidth(window.innerWidth);
        //     this.setCanvasHeight(window.innerHeight);
        // }

        if (this.getCanvasWidth() !== Configuration.width || this.getCanvasHeight() !== Configuration.height) {
            this.setCanvasWidth(Configuration.width);
            this.setCanvasHeight(Configuration.height);
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