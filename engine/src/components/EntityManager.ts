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
import Constants from "../constants";
import Component from "./Component";

export default class EntityManager {
    private static instance: EntityManager;

    public static getInstance(): EntityManager {
        if (!EntityManager.instance) {
            console.log('entity manager created');
            EntityManager.instance = new EntityManager();
        }

        return EntityManager.instance;
    }

    public entities: Entity[] = [];

    public create(): Entity {
        let entity: Entity = new Entity();

        this.entities.push(entity);

        entity.id = this.entities.length;
        entity.index = this.entities.length - 1;

        this.addRequiredComponents(entity);

        return entity;
    }

    public destroy(entity: Entity): void {
        let index = this.entities.findIndex(x => x.id === entity.id);

        if (index !== -1) {
            this.entities.splice(index, 1);
        }

        // Remove all references stored in each of the component manager instances.
        ManagerFactory.managers.forEach((manager: ComponentManager) => manager.dispose(entity));
    }

    public parseEntities(sceneConfig: SceneConfig): void {
        let parsedEntities: Entity[] = [];

        // Bootstrap entities.
        sceneConfig.entities.forEach((entityConfig) => {
            let parsedEntity = new Entity();

            parsedEntity.id = entityConfig.id;
            parsedEntity.enabled = entityConfig.enabled;

            for(let sourceProperty in entityConfig) {
                let sourceComponent = entityConfig[sourceProperty];

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
    }

    public packEntities(): any[] {
        let entityConfigs: any[] = [];

        EntityManager.getInstance().entities.forEach((entity) => {
            let entityConfig: any = {};

            Constants.componentTypes.forEach((componentType) => {
                let componentInstance: Component = entity.getComponent(componentType);

                if (componentInstance) {
                    entityConfig[componentType.name.charAt(0).toLowerCase() + componentType.name.slice(1)] = componentInstance;
                }
            });

            if (Object.keys(entityConfig).length !== 0 && entityConfig.constructor === Object) {
                entityConfigs.push(entityConfig);
            }
        });

        return entityConfigs;
    }

    private addRequiredComponents(entity: Entity): void {
        entity.addComponent(new TagComponent(`entity${entity.id}`));
        entity.addComponent(new TransformComponent(Transform.empty));
    }
}