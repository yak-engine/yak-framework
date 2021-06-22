import Layer from '../../engine/src/graphics/layer';
import Sprite from '../../engine/src/graphics/sprite';
import Tileset from '../../engine/src/graphics/tileset';
import Point from '../../engine/src/primitives/point';
import SpriteRendererComponent from '../../engine/src/components/sprite-renderer/SpriteRendererComponent';
import TransformComponent from '../../engine/src/components/transform/TransformComponent';
import EntityManager from '../../engine/src/components/EntityManager';
import { PaletteMode } from './enums/PaletteMode';
import Entity from '../../engine/src/components/entity';
import Configuration from '../../engine/src/configuration';
import Transform from '../../engine/src/primitives/transform';
import isTransformEmpty from '../../engine/src/helpers/is-transform-empty';
import pointWorldPosition from '../../engine/src/helpers/current-viewport-grid-square';
import Mouse from '../../engine/src/graphics/mouse';
import Scene from '../../engine/src/models/scene';
import MaterialComponent from '../../engine/src/components/material/MaterialComponent';
import SystemManager from './systems/system-manager';

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
	public currentContextMenu: HTMLDivElement;

	public currentLayer: Layer;

	public highlightCurrentLayer: boolean = false;

	public selectedSprites: Array<Sprite> = new Array();

	public hoveredSprite: Sprite;

	public scene: Scene = null;

	public mousePosition: Point = new Point(0, 0);

	public isMouseDown: boolean = false;

	public selectionTransform = Transform.empty;

	public gridCoordinates: Point = new Point(0, 0);

	public tilesets: Tileset[] = [];

	public mouse: Mouse = new Mouse();

	private selectedEntity: Entity = null;

	constructor() {
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

	public getSelectedEntity(): Entity {
		return this.selectedEntity;
	}

	public update(): void {
		SystemManager.systems.forEach((system) => {
			system.data.forEach((instance) => {
				instance.update();
			});
		});
	}

	public draw(): void {
		// Draw calls.
		this.drawTilemap();
		this.drawEntities();
		this.drawSelectionTransform();
		this.drawGridLines();

		SystemManager.systems.forEach((system) => {
			system.data.forEach((instance) => {
				instance.draw();
			});
		});

		// Add as collider gizmo

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

	private drawTilemap(): void {
		for (let col = 0; col <= 64; col++) {
			for (let row = 0; row <= 64; row++) {
				let sprite: number = this.scene.tilemap.tiles[row * this.scene.columns + col];
				this.context.drawImage(this.tilesets[0].image, sprite * this.scene.tileSize, 0, this.scene.tileSize, this.scene.tileSize, col * this.scene.tileSize, row * this.scene.tileSize, this.scene.tileSize, this.scene.tileSize);
			}
		}
	}

	private drawEntities(): void {
		EntityManager.getInstance().entities.forEach((entity: Entity) => {
			let transformComponent = entity.getComponent<TransformComponent>(TransformComponent);

			if (transformComponent) {
				let transform = transformComponent.transform;

				let spriteRendererComponent = entity.getComponent<SpriteRendererComponent>(SpriteRendererComponent);

				if (spriteRendererComponent) {
					let materialComponent = entity.getComponent<MaterialComponent>(MaterialComponent);

					if (materialComponent) {
						this.context.fillStyle = materialComponent.fillStyle;
						this.context.globalAlpha = materialComponent.alpha;
					}

					if (spriteRendererComponent.row !== undefined) {
						this.context.drawImage(
							this.tilesets[0].image, // TODO: Remove this hardcoded index.
							spriteRendererComponent.column * this.scene.tileSize,
							spriteRendererComponent.row * this.scene.tileSize,
							this.scene.tileSize,
							this.scene.tileSize,
							transform.x,
							transform.y,
							transform.width,
							transform.height
						);
					} else {
						if (transform) {
							this.context.fillRect(transform.x, transform.y, transform.width, transform.height);
						}
					}
				}

				// Reset renderer context to default values.
				this.context.fillStyle = Configuration.canvasFill;
				this.context.globalAlpha = 1;
			}
		});
	}

	private highlightSelectedSprites(): void {
		// if (this.selectedSprites && this.selectedSprites.length > 0) {
		//     this.selectedSprites.forEach((selectedSprite: Sprite) => fillTransparentRect(this.canvas.context, selectedSprite.transform));
		// }
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

	private drawSelectionTransform(): void {
		// this.editorMode === EditorMode.SELECTION || this.editorMode === EditorMode.SHAPE_FILL
		if (false) {
			this.context.fillStyle = Configuration.selectionTransformFill;
			this.context.fillRect(this.selectionTransform.x, this.selectionTransform.y, this.selectionTransform.width, this.selectionTransform.height);
		}
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

	private onCanvasMouseDown(event: MouseEvent): void {
		this.isMouseDown = true;

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
		this.isMouseDown = false;

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
