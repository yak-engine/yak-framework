import Entity from "./entity";
import Transform from "../primitives/transform";
import TagComponent from "./tag/TagComponent";
import TransformComponent from "./transform/TransformComponent";
import SpriteRendererComponent from "./sprite-renderer/SpriteRendererComponent";
import CameraComponent from "./camera/CameraComponent";
import TilemapComponent from "./tilemap/TilemapComponent";
import SceneConfig from "../models/scene-config";
import Camera from "../graphics/camera";
import Point from "../primitives/point";
import ColliderComponent from "./collider/ColliderComponent";
import ComponentManager from "./ComponentManager";
import ManagerFactory from "./ManagerFactory";
import Configuration from "../configuration";
import Constants from "../constants";
import Component from "./Component";

export default class EntityManager {
    private static instance: EntityManager;

    public static getInstance(): EntityManager {
        if (!EntityManager.instance) {
            EntityManager.instance = new EntityManager();
        }

        return EntityManager.instance;
    }

    public entities: Entity[] = [];

    public create(): Entity {
        let entity: Entity = new Entity();
        entity.id = this.entities.length;
        this.entities.push(entity);

        this.addRequiredComponents(entity);

        return entity;
    }

    public destroy(entity: Entity): void {
        let index = this.entities.findIndex(x => x.id === entity.id);

        if (index !== -1) {
            this.entities.splice(index, 1);
        }
    }

    public parseEntities(sceneConfig: SceneConfig): void {
        let parsedEntities: Entity[] = [];

        // Bootstrap entities.
        ((sceneConfig.entities as unknown) as Entity[]).forEach((sourceEntity) => {
            let parsedEntity = new Entity();

            parsedEntity.id = sourceEntity.id;
            parsedEntity.enabled = sourceEntity.enabled;

            for(let sourceProperty in sourceEntity) {
                let sourceComponent = sourceEntity[sourceProperty];

                if (sourceComponent) {
                    if (sourceProperty === 'spriteRendererComponent') {
                        parsedEntity.addComponent(new SpriteRendererComponent(sourceComponent.layer, sourceComponent.tileset, sourceComponent.row, sourceComponent.column));
                    }
                    else if (sourceProperty === 'transformComponent') {
                        parsedEntity.addComponent(new TransformComponent(new Transform(sourceComponent.x, sourceComponent.y, sourceComponent.width, sourceComponent.height)));
                    }
                    else if (sourceProperty === 'cameraComponent') {
                        let camera: Camera = new Camera();

                        camera.viewport = new Transform(sourceComponent.camera.viewport.x, sourceComponent.camera.viewport.y, sourceComponent.camera.viewport.width, sourceComponent.camera.viewport.height);
                        camera.max = new Point(sourceComponent.camera.max.x, sourceComponent.camera.max.y);

                        parsedEntity.addComponent(new CameraComponent(camera));
                    }
                    else if (sourceProperty === 'tagComponent') {
                        parsedEntity.addComponent(new TagComponent(sourceComponent.name));
                    }
                    else if (sourceProperty === 'tilemapComponent') {
                        parsedEntity.addComponent(new TilemapComponent(sourceComponent.tiles, sourceComponent.tilesetIndex));
                    }
                    else if (sourceProperty === 'colliderComponent') {
                        parsedEntity.addComponent(new ColliderComponent(sourceComponent.transform, sourceComponent.isTrigger));
                    }
                }
            }

            parsedEntities.push(parsedEntity);
        });

        EntityManager.getInstance().entities = parsedEntities;

        console.log(EntityManager.getInstance().entities);
    }

    public packEntities(): any[] {
        let entityConfigs: any[] = [];

        EntityManager.getInstance().entities.forEach((entity) => {
            let entityConfig: any = {};

            Constants.componentNames.forEach((componentName) => {
                let componentInstance: Component = entity.getComponent(componentName);

                if (componentInstance) {
                    entityConfig[componentName.charAt(0).toLowerCase() + componentName.slice(1)] = componentInstance;
                }
            });

            entityConfigs.push(entityConfig);
        });

        return entityConfigs;
    }

    private addRequiredComponents(entity: Entity): void {
        entity.addComponent<TagComponent>(new TagComponent());
        entity.addComponent<TransformComponent>(new TransformComponent(Transform.empty));
    }
}