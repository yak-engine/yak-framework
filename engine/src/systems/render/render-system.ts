import Entity from "../../components/entity";
import EntityManager from "../../components/EntityManager";
import ManagerFactory from "../../components/ManagerFactory";
import MaterialComponent from "../../components/material/MaterialComponent";
import SpriteRendererComponent from "../../components/sprite-renderer/SpriteRendererComponent";
import SpriteRendererComponentManager from "../../components/sprite-renderer/SpriteRendererComponentManager";
import TagComponent from "../../components/tag/TagComponent";
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
        let spriteRendererComponentManager: SpriteRendererComponentManager = ManagerFactory.get(SpriteRendererComponent.name);

        spriteRendererComponentManager.data.forEach((spriteRendererComponent: SpriteRendererComponent, index: number) => {
            let entityId: number = spriteRendererComponentManager.dataEntityMap.get(spriteRendererComponent.id);
            
            let entity: Entity = spriteRendererComponentManager.entities.find(x => x.id === entityId);

            let transform: Transform = (entity.getComponent(TransformComponent.name) as TransformComponent).transform;

            if (spriteRendererComponent) {
                let materialComponent = entity.getComponent(MaterialComponent.name) as MaterialComponent;

                if (materialComponent) {
                    context.fillStyle = materialComponent.fillStyle;
                    context.globalAlpha = materialComponent.alpha;

                    context.fillRect(transform.x, transform.y, transform.width, transform.height);
                }
                else {
                    context.drawImage(
                        Configuration.tilesets[0].image,// this.tilesets[spriteRendererComponent.layer].image,
                        spriteRendererComponent.column * Configuration.scene.tileSize,
                        spriteRendererComponent.row * Configuration.scene.tileSize,
                        Configuration.scene.tileSize,
                        Configuration.scene.tileSize,
                        transform.x - 0, // cameraOffsetX,
                        transform.y - 0, // cameraOffsetY,
                        Configuration.scene.tileSize,
                        Configuration.scene.tileSize
                    );
                }
            }

            // Reset renderer context to default values.
            context.fillStyle = Configuration.canvasFill;
            context.globalAlpha = 1;
        });
    }
}