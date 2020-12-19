import Layer from "../../engine/src/graphics/layer";
import Sprite from "../../engine/src/graphics/sprite";
import Point from "../../engine/src/primitives/Point";
import Tileset from "../../engine/src/graphics/tileset";
import Scene from '../../engine/src/graphics/scene';
import SpriteRendererComponent from "../../engine/src/components/sprite-renderer/SpriteRendererComponent";
import MaterialComponent from "../../engine/src/components/material/MaterialComponent";
import TransformComponent from "../../engine/src/components/transform/TransformComponent";
import EntityManager from "../../engine/src/components/EntityManager"

import { EditorMode } from "./enums/EditorMode";
import Entity from '../../engine/src/components/entity';

import Configuration from "../../engine/src/configuration";
import Transform from "../../engine/src/primitives/transform";

export default class EditorRenderer {
    /**
     * The canvas located within the default index.html document.
     */
    public engineCanvas: HTMLCanvasElement;

    /**
     * The 2D rendering context for the default canvas.
     */
    public context: CanvasRenderingContext2D;

    /**
     * The current mode for the sprite editor.
     */
    public editorMode: EditorMode = EditorMode.NONE;

    /**
    * Flag to determine if the canvas context menu is open.
    */
    public isContextMenuOpen: boolean = false;

    /**
    * The context menu DOM element.
    */
    public currentContextMenu: HTMLDivElement;
    
    public currentLayer: Layer;

    public highlightCurrentLayer: boolean = false;

    public selectedSprites: Array<Sprite> = new Array();
    
    public hoveredSprite: Sprite;

    public scene: Scene = null;

    /**
     * The tilesets being used for the current scene. Get loaded on startup.
     */
    public tilesets: Tileset[] = [];

    constructor() {
        this.engineCanvas = <HTMLCanvasElement>document.querySelector('#editor-canvas');
        this.context = <CanvasRenderingContext2D>this.engineCanvas.getContext('2d');

        Configuration.RegisterManagers();

        // this.canvas = canvas;
        // document.addEventListener('keydown', (event: KeyboardEvent) => {
        //     if (event.key.toLowerCase() == 'escape') {
        //         this.editorMode = EditorMode.NONE;
        //     }
        // });
        // this.canvas.engineCanvas.addEventListener('focusout', (event) => {
        //     if (this.isContextMenuOpen) {
        //         this.isContextMenuOpen = false;
        //         document.body.removeChild(this.currentContextMenu);
        //     }
        // })
        // this.canvas.engineCanvas.oncontextmenu = this.onCanvasContextMenu;
        // this.canvas.engineCanvas.addEventListener('mousedown', (event) => this.onCanvasMouseDown(event));
        // this.canvas.engineCanvas.addEventListener('mouseup', (event) => this.onCanvasMouseUp(event));
    }

    entities: Entity[] = [];

    public init(tilemapComponent: any): void {
        this.engineCanvas.width = this.scene.columns * this.scene.spriteSize;
        this.engineCanvas.height = this.scene.rows * this.scene.spriteSize;

        // Bootstrap entities.
        this.scene.entities.forEach((sourceEntity) => {
            let parsedEntity = new Entity();

            parsedEntity.id = sourceEntity.id;
            parsedEntity.isEnabled = sourceEntity.isEnabled;

            for(let sourceProperty in sourceEntity) {
                let sourceComponent = sourceEntity[sourceProperty];

                if (sourceComponent) {
                    if (sourceProperty === 'spriteComponent') {
                        parsedEntity.addComponent(new SpriteRendererComponent(sourceComponent.layer, sourceComponent.tileset, sourceComponent.row, sourceComponent.column));
                    }
                    else if (sourceProperty === 'transformComponent') {
                        parsedEntity.addComponent(new TransformComponent(new Transform(sourceComponent.x, sourceComponent.y, sourceComponent.width, sourceComponent.height)));
                    }
                }
            }

            this.entities.push(parsedEntity);
        })

        for (let col = 0; col <= 64; col++) {
            for (let row = 0; row <= 64; row++) {
                // let sprite: number = layer.sprites[row * this.scene.columns + col];
                // let tilemapComponent: any = this.tileMapEntity.getComponent<TilemapComponent>(TilemapComponent.name);
                let sprite: number = tilemapComponent.tiles[row * this.scene.columns + col]; // [row * this.scene.columns + col]

                this.context.drawImage(
                    this.tilesets[0].image,
                    0,
                    0,
                    32,
                    32,
                    col * 32,
                    row *32,
                    32,
                    32
                )

               if (sprite) {
                    // var x = (col - startCol) * this.scene.spriteSize + offsetX;
                // var y = (row - startRow) * this.scene.spriteSize + offsetY;

                // this.context.drawImage(
                //     this.tilesets[0].image, //this.tilesets[layer.tileset].image,
                //     sprite * this.scene.spriteSize,
                //     0,
                //     this.scene.spriteSize,
                //     this.scene.spriteSize,
                //     col * this.scene.spriteSize,
                //     row * this.scene.spriteSize,
                //     this.scene.spriteSize,
                //     this.scene.spriteSize
                // );
               }
            }
        }
    }

    public run(): void {
        // this.context.fillStyle = '#585858';
        // this.context.fillRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight());

        this.drawGridLines();

        // Run through renderer system.
        EntityManager.getInstance().entities.forEach((tt: Entity) => {
            let entity = new Entity();

            entity.id = tt.id;
            entity.isEnabled = tt.isEnabled;

            let spriteRendererComponent = entity.getComponent<SpriteRendererComponent>(SpriteRendererComponent.name);

            console.log(spriteRendererComponent);

            if (spriteRendererComponent) {
                let materialComponent = entity.getComponent<MaterialComponent>(MaterialComponent.name);

                if (materialComponent) {
                    this.context.fillStyle = materialComponent.fillStyle;
                    this.context.globalAlpha = materialComponent.alpha;
                }

                let transform = entity.getComponent<TransformComponent>(TransformComponent.name).transform;

                if (spriteRendererComponent.row !== undefined) {
                    // let cameraOffsetX = 0, cameraOffsetY = 0;

                    // if (this.playerEntity.id !== entity.id) {
                    //     cameraOffsetX = this.mainCamera.viewport.x;
                    //     cameraOffsetY = this.mainCamera.viewport.y;
                    // }

                    this.context.drawImage(
                        this.tilesets[0].image,// this.tilesets[spriteRendererComponent.layer].image,
                        spriteRendererComponent.column * this.scene.spriteSize,
                        spriteRendererComponent.row * this.scene.spriteSize,
                        this.scene.spriteSize,
                        this.scene.spriteSize,
                        transform.x, // transform.x - cameraOffsetX,
                        transform.y, // transform.y - cameraOffsetY
                        this.scene.spriteSize,
                        this.scene.spriteSize
                    );
                }
                else {
                    if (transform) {
                        this.context.fillRect(transform.x, transform.y, transform.width, transform.height);
                    }
                }
            }

            // Reset renderer context to default values.
            // this.context.fillStyle = Configuration.canvasFill;
            // this.context.globalAlpha = 1;
        });

        // this.drawSelectionTransform();
        // this.drawSpritePreview();
        // // TODO: Move this.
        // if (!this.currentLayer.locked) {
        //     if (this.editorMode === EditorMode.ERASER && this.canvas.isMouseDown) {
        //         let spriteIndex = this.currentLayer.sprites.findIndex(sprite => isCoordinateContained(this.canvas.mousePosition, sprite.transform));
        //         if (spriteIndex !== -1) {
        //             this.currentLayer.sprites.splice(spriteIndex, 1);
        //         }
        //     }
        //     // TODO: This is just test code.
        //     if (this.editorMode === EditorMode.SELECT_SAME_TILE) {
        //         let sprite = this.currentLayer.sprites.find(sprite => isCoordinateContained(this.canvas.mousePosition, sprite.transform));
        //         if (!sprite) {
        //             this.selectedSprites = new Array();
        //             this.hoveredSprite = null;
        //         }
        //         else {
        //             if (!this.hoveredSprite || !areTransformsEqual(sprite.tilesetTransform, this.hoveredSprite.tilesetTransform)) {
        //                 this.hoveredSprite = sprite;
        //                 this.selectedSprites = this.currentLayer.sprites.filter((sprite) => areTransformsEqual(this.hoveredSprite.tilesetTransform, sprite.tilesetTransform));
        //             }
        //         }
        //     }
        // }
        // this.highlightSelectedSprites();
    }

    public getCanvasHeight(): number {
        return this.engineCanvas.height;
    }

    public getCanvasWidth(): number {
        return this.engineCanvas.width;
    }

    public setCanvasHeight(height: number): void {
        this.engineCanvas.height = height;
    }

    public setCanvasWidth(width: number): void {
        this.engineCanvas.width = width;
    }

    /**
     * 
     */
    private highlightSelectedSprites(): void {
        // if (this.selectedSprites && this.selectedSprites.length > 0) {
        //     this.selectedSprites.forEach((selectedSprite: Sprite) => fillTransparentRect(this.canvas.context, selectedSprite.transform));
        // }
    }

    /**
     * 
     * @param transformCoordinates 
     */
    private openContextMenu(transformCoordinates: Point): void {
        // if (this.isContextMenuOpen) {
        //     document.body.removeChild(this.currentContextMenu);
        // }
        // Application.instance.stateManager.delete('pending-sprite-image');
        // this.isContextMenuOpen = true;
        // this.currentContextMenu = document.createElement('div');
        // this.currentContextMenu.classList.add('engine-context-menu');
        // this.currentContextMenu.style.position = 'absolute';
        // this.currentContextMenu.style.top = `${transformCoordinates.y + Application.instance.configuration.gridSquareSize}px`;
        // this.currentContextMenu.style.left = `${transformCoordinates.x + Application.instance.configuration.gridSquareSize}px`;
        // this.currentContextMenu.innerHTML = Application.contextMenuTemplate;
        // document.body.appendChild(this.currentContextMenu);
    }

    /**
     * 
     */
    private drawGridLines(): void {
        this.context.globalAlpha = 1;

        let spriteCountX = this.getCanvasWidth() / 32;
        let spriteCountY = this.getCanvasHeight() / 32;

        for (let column = 0; column < spriteCountX; column++) {
            this.context.beginPath(); 
            this.context.lineWidth = 0.5;
            this.context.strokeStyle = '#282828';
            this.context.moveTo(column * 32, 0);
            this.context.lineTo(column * 32, this.getCanvasHeight());
            this.context.stroke();
            this.context.closePath();
        }

        for (let row = 0; row < spriteCountY; row++) {
            this.context.beginPath(); 
            this.context.lineWidth = 0.5;
            this.context.strokeStyle = '#282828';
            this.context.moveTo(0, row * 32);
            this.context.lineTo(this.getCanvasWidth(), row * 32);
            this.context.stroke();
            this.context.closePath();
        }
    }

    /**
     * 
     */
    private drawSelectionTransform(): void {
        // if (this.editorMode === EditorMode.SELECTION || this.editorMode === EditorMode.SHAPE_FILL) {
        //     fillTransform(this.canvas.context, this.canvas.selectionTransform);
        // }
    }

    /**
     * Rename this is draw hover preview. This will render an image instead of from a tileset.
     */
    private drawSpritePreview(): void {
        // if (this.editorMode == EditorMode.STAMP) {
        // let pendingSpite = Application.instance.stateManager.get<Sprite>('pending-sprite');
        //     if (pendingSpite) {
        //         Logger.data(pendingSpite);
        //         this.canvas.context.drawImage(
        //             this.canvas.tilesets[0].image,
        //              pendingSpite.transform.x * Application.instance.configuration.gridSquareSize, 
        //              pendingSpite.transform.y * Application.instance.configuration.gridSquareSize,
        //              Application.instance.configuration.gridSquareSize, 
        //              Application.instance.configuration.gridSquareSize,
        //              this.canvas.gridCoordinates.x * Application.instance.configuration.gridSquareSize,
        //              this.canvas.gridCoordinates.y * Application.instance.configuration.gridSquareSize,
        //              Application.instance.configuration.gridSquareSize,
        //              Application.instance.configuration.gridSquareSize,
        //         );
        //     }
        // }
    }

    /**
     * 
     * @param event 
     */
    private onCanvasContextMenu(event: MouseEvent): void {
        // event.preventDefault();
        // // Can't open context menu when in selection mode. The menu is opened after the selection is made.
        // if (this.editorMode === EditorMode.SELECTION) {
        //     return;
        // }
        // this.canvas.fragments.spriteFragments.some((sprite: Sprite) => {
        //     if (isCoordinateContained(this.canvas.mousePosition, sprite.transform)) {
        //         event.preventDefault();
        //         this.openContextMenu(new Point(sprite.transform.x, sprite.transform.y));
        //     }
        // });
    }

    private onCanvasMouseDown(event: MouseEvent): void {
        // if (this.isContextMenuOpen) {
        //     this.isContextMenuOpen = false;
        //     document.body.removeChild(this.currentContextMenu);
        // }
        // // On left click if selection mode empty selection transform.
        // if (event.button === 0) {
        //     if (this.editorMode === EditorMode.SELECTION || this.editorMode === EditorMode.SHAPE_FILL) {
        //         Logger.info('clear selection');
        //         this.canvas.selectionTransform = Transform.empty;
        //     }
        // }
        // if (Application.instance.stateManager.exists('pending-sprite') && this.editorMode == EditorMode.STAMP && !this.currentLayer.locked) {
        //     let sprite = Object.assign({}, Application.instance.stateManager.get<Sprite>('pending-sprite'));
        //     sprite.transform = new Transform(
        //         this.canvas.gridCoordinates.x * Application.instance.configuration.gridSquareSize,
        //         this.canvas.gridCoordinates.y * Application.instance.configuration.gridSquareSize,
        //         Application.instance.configuration.gridSquareSize,
        //         Application.instance.configuration.gridSquareSize
        //     );
        //     this.currentLayer.sprites.push(sprite);
        //     Logger.data(this.canvas.layers);
        // }
    }

    private onCanvasMouseUp(event: MouseEvent): void {
        // // On right click.
        // if (event.button === 2) {
        //     this.openContextMenu(this.canvas.mousePosition);
        // }
        // // Apply shape fill.
        // if (this.editorMode == EditorMode.SHAPE_FILL && event.button === 0 && Application.instance.stateManager.exists('pending-sprite') && !this.currentLayer.locked) {
        //     let rows = this.canvas.selectionTransform.height / Application.instance.configuration.gridSquareSize;
        //     let columns = this.canvas.selectionTransform.width / Application.instance.configuration.gridSquareSize;

        //     for (let row = 0; row < rows; row++) {
        //         for (let column = 0; column < columns; column++) {
        //             let sprite = Object.assign({}, Application.instance.stateManager.get<Sprite>('pending-sprite'));

        //             sprite.transform = new Transform(
        //                 (column * Application.instance.configuration.gridSquareSize) + this.canvas.selectionTransform.x,
        //                 (row * Application.instance.configuration.gridSquareSize) + this.canvas.selectionTransform.y,
        //                 Application.instance.configuration.gridSquareSize,
        //                 Application.instance.configuration.gridSquareSize
        //             );
        //             this.currentLayer.sprites.push(sprite);
        //         }
        //     }
        //     this.canvas.selectionTransform = Transform.empty;
        // }
    }
}