import Component from "./components/component";
import Entity from "./models/entity";
import Scene from "./models/scene";
export default class EntityManager {
    private static instance;
    static getInstance(): EntityManager;
    entities: Entity[];
    /**
     * Creates a new entity and stores it within the entity manager.
     * @returns The newly created entity populated with the required components.
     */
    create(): Entity;
    /**
     * Disposes of the given entity along with any references within any component manager or systems.
     *
     * @param entity The entity to dispose of.
     */
    dispose(entity: Entity): void;
    /**
     * Loads the entities.
     * @param sceneConfig
     */
    parseEntities(sceneConfig: Scene): void;
    /**
     * Packs the entities within each component manager into a single array for saving to the scene json file.
     * @returns The list of packed entities.
     */
    packEntities(): Entity[];
    getComponents(entity: Entity): Component[];
}
//# sourceMappingURL=entity-manager.d.ts.map