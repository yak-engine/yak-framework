import CameraComponent from "./components/CameraComponent";
import ColliderComponent from "./components/ColliderComponent";
import ManagerFactory from "./manager-factory";
import SpriteRendererComponent from "./components/SpriteRendererComponent";
import TagComponent from "./components/TagComponent";
import TransformComponent from "./components/TransformComponent";
import Constants from "./constants";
import Camera from "./graphics/camera";
import Entity from "./models/entity";
import Point from "./primitives/point";
import Transform from "./primitives/transform";
import SystemManager from "./system-manager";
var EntityManager = /** @class */ (function () {
    function EntityManager() {
        this.entities = [];
    }
    EntityManager.getInstance = function () {
        if (!EntityManager.instance) {
            EntityManager.instance = new EntityManager();
        }
        return EntityManager.instance;
    };
    /**
     * Creates a new entity and stores it within the entity manager.
     * @returns The newly created entity populated with the required components.
     */
    EntityManager.prototype.create = function () {
        var entity = new Entity();
        this.entities.push(entity);
        var id = '';
        for (var i = 0; i < 8; i++) {
            var characterIndex = Math.floor(Math.random() * Constants.characters.length);
            id += Constants.characters.substring(characterIndex, characterIndex + 1);
        }
        entity.id = "entity-" + id;
        // Add the required components to the entity.
        entity.addComponent(new TagComponent("entity" + entity.id));
        entity.addComponent(new TransformComponent(Transform.empty));
        return entity;
    };
    /**
     * Disposes of the given entity along with any references within any component manager or systems.
     *
     * @param entity The entity to dispose of.
     */
    EntityManager.prototype.dispose = function (entity) {
        var index = this.entities.findIndex(function (x) { return x.id === entity.id; });
        if (index !== -1) {
            // Remove all references stored in each of the component manager instances.
            ManagerFactory.managers.forEach(function (manager) { return manager.dispose(entity); });
            SystemManager.systems.forEach(function (system) { return system.dispose(entity); });
            this.entities.splice(index, 1);
        }
    };
    /**
     * Loads the entities.
     * @param sceneConfig
     */
    EntityManager.prototype.parseEntities = function (sceneConfig) {
        var parsedEntities = [];
        // Bootstrap entities.
        sceneConfig.entities.forEach(function (entityConfig) {
            var parsedEntity = new Entity();
            parsedEntity.id = entityConfig.id;
            parsedEntity.enabled = entityConfig.enabled;
            for (var sourceProperty in entityConfig) {
                var sourceComponent = entityConfig[sourceProperty];
                if (sourceComponent) {
                    if (sourceProperty === 'spriteRendererComponent') {
                        parsedEntity.addComponent(new SpriteRendererComponent(sourceComponent.layer, sourceComponent.tileset, sourceComponent.row, sourceComponent.column));
                    }
                    else if (sourceProperty === 'transformComponent') {
                        parsedEntity.addComponent(new TransformComponent(new Transform(sourceComponent.x, sourceComponent.y, sourceComponent.width, sourceComponent.height)));
                    }
                    else if (sourceProperty === 'cameraComponent') {
                        var camera = new Camera();
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
    };
    /**
     * Packs the entities within each component manager into a single array for saving to the scene json file.
     * @returns The list of packed entities.
     */
    EntityManager.prototype.packEntities = function () {
        var entityConfigs = [];
        EntityManager.getInstance().entities.forEach(function (entity) {
            var entityConfig = {};
            Constants.componentTypes.forEach(function (componentType) {
                var componentInstance = entity.getComponent(componentType);
                if (componentInstance) {
                    entityConfig[componentType.name.charAt(0).toLowerCase() + componentType.name.slice(1)] = componentInstance;
                }
            });
            if (Object.keys(entityConfig).length !== 0 && entityConfig.constructor === Object) {
                entityConfigs.push(entityConfig);
            }
        });
        return entityConfigs;
    };
    EntityManager.prototype.getComponents = function (entity) {
        var components = [];
        ManagerFactory.managers.forEach(function (manager) {
            if (manager.map[entity.id]) {
                components.push(manager.instances[manager.map[entity.id]]);
            }
        });
        return components;
    };
    return EntityManager;
}());
export default EntityManager;
//# sourceMappingURL=entity-manager.js.map