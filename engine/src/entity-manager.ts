import CameraComponent from "./components/CameraComponent";
import ColliderComponent from "./components/ColliderComponent";
import Component from "./components/component";
import ComponentManager from "./component-manager";
import ManagerFactory from "./manager-factory";
import SpriteRendererComponent from "./components/SpriteRendererComponent";
import TagComponent from "./components/TagComponent";
import TransformComponent from "./components/TransformComponent";
import Constants from "./constants";
import Camera from "./graphics/camera";
import Entity from "./models/entity";
import Scene from "./models/scene";
import Point from "./primitives/point";
import Transform from "./primitives/transform";
import System from "./systems/system";
import SystemManager from "./system-manager";
import { Logger } from "./logging/logger";

export default class EntityManager {
    private static instance: EntityManager;

    public static getInstance(): EntityManager {
        if (!EntityManager.instance) {
            EntityManager.instance = new EntityManager();
        }

        return EntityManager.instance;
    }

    public entities: Entity[] = [];

    /**
     * Creates a new entity and stores it within the entity manager.
     * @returns The newly created entity populated with the required components.
     */
    public create(): Entity {
        let entity: Entity = new Entity();

        this.entities.push(entity);
        
        var id: string = '';

        for (var i = 0; i < 8; i++) {
            var characterIndex = Math.floor(Math.random() * Constants.characters.length);
            id += Constants.characters.substring(characterIndex, characterIndex + 1);
        }
        
        entity.id = `entity-${id}`;

        // Add the required components to the entity.
        entity.addComponent(new TagComponent(`entity${entity.id}`));
        entity.addComponent(new TransformComponent(Transform.empty));

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
            // ManagerFactory.managers.forEach((manager: ComponentM) => manager.dispose(entity));
            // SystemManager.systems.forEach((system: System) => system.dispose(entity));

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

            Logger.info(`Scene entity ${entityConfig.id} parsed`, EntityManager.name);

            parsedEntities.push(parsedEntity);
        });

        EntityManager.getInstance().entities = parsedEntities;

        Logger.info(`Finished parsing ${parsedEntities.length} entities`, EntityManager.name);
    }

    /**
     * Packs the entities within each component manager into a single array for saving to the scene json file.
     * @returns The list of packed entities.
     */
    public packEntities(): Entity[] {
        let entityConfigs: Entity[] = [];

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