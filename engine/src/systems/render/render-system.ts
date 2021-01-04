import Entity from "../../components/entity";
import ManagerFactory from "../../components/ManagerFactory";
import MaterialComponent from "../../components/material/MaterialComponent";
import SpriteRendererComponent from "../../components/sprite-renderer/SpriteRendererComponent";
import SpriteRendererComponentManager from "../../components/sprite-renderer/SpriteRendererComponentManager";
import TransformComponent from "../../components/transform/TransformComponent";
import TransformComponentManager from "../../components/transform/TransformComponentManager";
import Configuration from "../../configuration";
import Transform from "../../primitives/transform";
import Runnable from "../system";

export default class RenderSystem extends Runnable {
    public name: string = 'render-system';

    update(): void {

    }

    draw(context: CanvasRenderingContext2D): void {
        // Run through renderer system.
        let manager: SpriteRendererComponentManager = ManagerFactory.get(SpriteRendererComponent.name);

        manager.entities.forEach((entity: Entity) => {
            let spriteRendererComponent: SpriteRendererComponent = entity.getComponent(SpriteRendererComponent);
            let transformComponent: TransformComponent = entity.getComponent(TransformComponent);

            if (spriteRendererComponent) {
                let materialComponent = entity.getComponent(MaterialComponent) as MaterialComponent;

                if (materialComponent) {
                    context.fillStyle = materialComponent.fillStyle;
                    context.globalAlpha = materialComponent.alpha;

                    context.fillRect(transformComponent.transform.x, transformComponent.transform.y, transformComponent.transform.width, transformComponent.transform.height);
                }
                else {
                    context.drawImage(
                        Configuration.tilesets[0].image,// this.tilesets[spriteRendererComponent.layer].image,
                        spriteRendererComponent.column * Configuration.scene.tileSize,
                        spriteRendererComponent.row * Configuration.scene.tileSize,
                        Configuration.scene.tileSize,
                        Configuration.scene.tileSize,
                        transformComponent.transform.x - 0, // cameraOffsetX,
                        transformComponent.transform.y - 0, // cameraOffsetY,
                        Configuration.scene.tileSize,
                        Configuration.scene.tileSize
                    );
                }
            }

            // Reset renderer context to default values.
            context.fillStyle = Configuration.canvasFill;
            context.globalAlpha = 1;
        });

        // manager.data.forEach((spriteRendererComponent: SpriteRendererComponent, index: number) => {
        //     let entityId: number = manager.dataEntityMap.get(spriteRendererComponent.id);
            
        //     let entity: Entity = manager.entities.find(x => x.id === entityId);




        // });
    }
}