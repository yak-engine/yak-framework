import Entity from "../../components/entity";
import EntityManager from "../../components/EntityManager";
import MaterialComponent from "../../components/material/MaterialComponent";
import SpriteRendererComponent from "../../components/sprite-renderer/SpriteRendererComponent";
import TransformComponent from "../../components/transform/TransformComponent";
import Configuration from "../../configuration";
import Transform from "../../primitives/transform";
import Runnable from "../system";

export default class RenderSystem extends Runnable {
    public name: string = 'render-system';

    update(): void {

    }

    draw(context: CanvasRenderingContext2D): void {
        // Run through renderer system.
        // EntityManager.getInstance().entities.forEach((entity: Entity) => {
        //     let transformComponent: Transform = entity.getComponent<TransformComponent>(SpriteRendererComponent.name).transform;
        //     let spriteRendererComponent = entity.getComponent<SpriteRendererComponent>(SpriteRendererComponent.name);

        //     if (spriteRendererComponent) {
        //         let materialComponent = entity.getComponent<MaterialComponent>(MaterialComponent.name);

        //         if (materialComponent) {
        //             context.fillStyle = materialComponent.fillStyle;
        //             context.globalAlpha = materialComponent.alpha;
        //         }

        //         this.context.drawImage(
        //             Configuration.engineConfig.scen.tilesets[0].image,// this.tilesets[spriteRendererComponent.layer].image,
        //             spriteRendererComponent.column * this.scene.tileSize,
        //             spriteRendererComponent.row * this.scene.tileSize,
        //             this.scene.tileSize,
        //             this.scene.tileSize,
        //             transform.x - cameraOffsetX,
        //             transform.y - cameraOffsetY,
        //             this.scene.tileSize,
        //             this.scene.tileSize
        //         );
        //     }

        //     // Reset renderer context to default values.
        //     context.fillStyle = Configuration.canvasFill;
        //     context.globalAlpha = 1;
        // });
    }
}