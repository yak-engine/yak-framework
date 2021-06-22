import Entity from "./entity";
import Transform from "../primitives/transform";
import TagComponent from "./tag/TagComponent";
import TransformComponent from "./transform/TransformComponent";
import SpriteRendererComponent from "./sprite-renderer/SpriteRendererComponent";
import CameraComponent from "./camera/CameraComponent";
import Camera from "../graphics/camera";
import Point from "../primitives/point";
import ColliderComponent from "./collider/ColliderComponent";
import ComponentManager from "./ComponentManager";
import ManagerFactory from "./ManagerFactory";
import Constants from "../constants";
import Component from "./Component";
import SystemManager from "../systems/system-manager";
import System from "../systems/system";
import EntityConfig from "../models/entity-config";
import Scene from "../models/scene";

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
        this.entities.push(entity);
        
        let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';

        for (var i = 0; i < 8; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz,randomPoz+1);
        }
        
        entity.id = `entity-${randomString}`;

        this.addRequiredComponents(entity);

        return entity;
    }

    /**
     * Disposes of the given entity along with any references within any component manager or systems.
     * 
     * @param entity The entity to dispose of.
     */
    public dispose(entity: Entity): void {
        let index = this.entities.findIndex(x => x.id === entity.id);

        if (index !== -1) {
            // Remove all references stored in each of the component manager instances.
            ManagerFactory.managers.forEach((manager: ComponentManager) => manager.dispose(entity));
            SystemManager.systems.forEach((system: System) => system.dispose(entity));

            this.entities.splice(index, 1);
        }
    }

    /**
     * Loads the entities.
     * @param sceneConfig 
     */
    public parseEntities(sceneConfig: Scene): void {
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
                    else if (sourceProperty === 'colliderComponent') {
                        parsedEntity.addComponent(new ColliderComponent(sourceComponent.transform, sourceComponent.isTrigger));
                    }
                }
            }

            parsedEntities.push(parsedEntity);
        });

        EntityManager.getInstance().entities = parsedEntities;
    }

    /**
     * Packs the entities within each component manager into a single array for saving to the scene json file.
     * @returns The list of packed entities.
     */
    public packEntities(): EntityConfig[] {
        let entityConfigs: EntityConfig[] = [];

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

    public getComponents(entity: Entity): Component[] {
        let components = [];

        ManagerFactory.managers.forEach((manager) => {
            if (manager.map[entity.id]) {
                components.push(manager.instances[manager.map[entity.id]])
            }
        });

        return components;
    }
}