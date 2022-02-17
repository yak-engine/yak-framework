
import { PaletteMode } from './app/enums/palette-mode';

import { Layer } from '@yak-engine/graphics/layer';
import Sprite from '@yak-engine/graphics/sprite';
import { Tileset } from '@yak-engine/graphics/tileset';
import { Entity } from '@yak-engine/models/entity';
import Configuration from '@yak-engine/configuration';
import { Transform } from '@yak-engine/primitives/transform';
import isTransformEmpty from '@yak-engine/helpers/is-transform-empty';
import pointWorldPosition from '@yak-engine/helpers/current-viewport-grid-square';
import Mouse from '@yak-engine/graphics/mouse';
import { Scene } from '@yak-engine/models/scene';
import { Point } from '@yak-engine/primitives/point';

import test from '@yak-engine/'

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
    public editorMode: PaletteMode = PaletteMode.NONE;

    /**
     * Flag to determine if the canvas context menu is open.
     */
    public isContextMenuOpen: boolean = false;

    /**
     * The context menu DOM element.
     */
    public currentContextMenu: HTMLDivElement | null = null;

    public currentLayer: Layer | null = null;

    public highlightCurrentLayer: boolean = false;

    public selectedSprites: Array<Sprite> = new Array();

    public hoveredSprite: Sprite | null = null;

    public scene: Scene;

    public mousePosition: Point = new Point(0, 0);

    public isMouseDown: boolean = false;

    public selectionTransform = Transform.empty;

    public gridCoordinates: Point = new Point(0, 0);

    public tilesets: Tileset[] = [];

    public mouse: Mouse = new Mouse();

    private selectedEntity: Entity | null = null;

    constructor(scene: Scene, tilsets: Tileset[]) {
        this.scene = scene;
        this.tilesets = tilsets;

        this.engineCanvas = <HTMLCanvasElement>document.querySelector('#editor-canvas');
        this.context = <CanvasRenderingContext2D>this.engineCanvas.getContext('2d');

        this.engineCanvas.addEventListener('mousedown', (event) => this.onCanvasMouseDown(event));
        this.engineCanvas.addEventListener('mouseup', (event) => this.onCanvasMouseUp(event));
        this.engineCanvas.addEventListener('mousemove', (event) => this.onCanvasMouseMove(event));
    }

    public init(): void {
        this.engineCanvas.width = this.scene.columns * this.scene.tileSize;
        this.engineCanvas.height = this.scene.rows * this.scene.tileSize;
    }

    /**
     * Clears the canvas for the next draw call.
     *
     * @author NSSure
     * @since 11/8/2020
     */
    public clearCanvas(): void {
        this.context.clearRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
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

    public setSelectedEntity(entity: Entity): void {
        this.selectedEntity = entity;

        // SystemManager.get('gizmo-system').data.push(new TransformGizmo(this.selectedEntity, this.context));
        // SystemManager.get('gizmo-system').data.push(new ColliderGizmo(this.selectedEntity, this.context));
    }

    public getSelectedEntity(): Entity | null {
        return this.selectedEntity;
    }

    public draw(): void {
        this.clearCanvas();
        this.drawTilemap();
        this.drawGridLines();
    }

    private drawTilemap(): void {
        for (let col = 0; col <= 64; col++) {
            for (let row = 0; row <= 64; row++) {
                let sprite: number = this.scene.tilemap.tiles[row * this.scene.columns + col];
                this.context.drawImage(this.tilesets[0].image, sprite * this.scene.tileSize, 0, this.scene.tileSize, this.scene.tileSize, col * this.scene.tileSize, row * this.scene.tileSize, this.scene.tileSize, this.scene.tileSize);
            }
        }
    }

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

    private onCanvasMouseDown(event: MouseEvent): void {
        this.isMouseDown = true;
    }

    private onCanvasMouseUp(event: MouseEvent): void {
        this.isMouseDown = false;
    }

    private onCanvasMouseMove(event: MouseEvent): void {
        this.mousePosition = new Point(event.offsetX, event.offsetY);
        this.gridCoordinates = pointWorldPosition(this.mousePosition);

        if (isTransformEmpty(this.selectionTransform)) {
            this.selectionTransform = new Transform(this.gridCoordinates.x * Configuration.gridSquareSize, this.gridCoordinates.y * Configuration.gridSquareSize, 0, 0);
        } else {
            this.selectionTransform.width = this.gridCoordinates.x * Configuration.gridSquareSize - this.selectionTransform.x + Configuration.gridSquareSize;
            this.selectionTransform.height = this.gridCoordinates.y * Configuration.gridSquareSize - this.selectionTransform.y + Configuration.gridSquareSize;
        }
    }
}
