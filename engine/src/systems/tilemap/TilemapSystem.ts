import ManagerFactory from "../../components/ManagerFactory";
import TilemapComponent from "../../components/tilemap/TilemapComponent";
import TilemapComponentManager from "../../components/tilemap/TilemapComponentManager";
import Configuration from "../../configuration";
import System from "../system";

export default class TilemapSystem extends System {
    public name: string = 'tilemap-system';

    update(): void {
        return;
    }

    draw(context: CanvasRenderingContext2D): void {
        let tilemapComponentManager: TilemapComponentManager = ManagerFactory.get(TilemapComponent.name);

        tilemapComponentManager.data.forEach((tilemapInstance: TilemapComponent) => {
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

                    context.drawImage(
                        Configuration.tilesets[tilemapInstance.tilesetIndex].image, //this.tilesets[layer.tileset].image,
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

        // this.scene.layers.forEach((layer: Layer) => {
        //     if (layer.enabled) {
        //         let camera = this.mainCamera;
    
        //         var startCol = Math.floor(camera.viewport.x / this.scene.tileSize);
        //         var endCol = startCol + (camera.viewport.width / this.scene.tileSize) + 1;
        //         var startRow = Math.floor(camera.viewport.y / this.scene.tileSize);
        //         var endRow = startRow + (camera.viewport.height / this.scene.tileSize) + 1;
        //         var offsetX = -camera.viewport.x + startCol * this.scene.tileSize;
        //         var offsetY = -camera.viewport.y + startRow * this.scene.tileSize;
    
        //         for (let col = startCol; col <= endCol; col++) {
        //             for (let row = startRow; row <= endRow; row++) {
        //                 // let sprite: number = layer.sprites[row * this.scene.columns + col];
        //                 let sprite: number = this.defaultTilemapComponent.tiles[row * this.scene.columns + col];
    
        //                 var x = (col - startCol) * this.scene.tileSize + offsetX;
        //                 var y = (row - startRow) * this.scene.tileSize + offsetY;

        //                 this.context.drawImage(
        //                     this.scene.tilesets[this.defaultTilemapComponent.tilesetIndex].image, //this.tilesets[layer.tileset].image,
        //                     sprite * this.scene.tileSize,
        //                     0,
        //                     this.scene.tileSize,
        //                     this.scene.tileSize,
        //                     Math.round(x),
        //                     Math.round(y),
        //                     this.scene.tileSize,
        //                     this.scene.tileSize
        //                 );
        //             }
        //         }
        //     }
        // });
    }
}