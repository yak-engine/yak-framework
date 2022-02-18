import { Entity } from '../scene/entity';
import { Scene } from '../scene/scene';
export declare class EntityManager {
    private static characters;
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
    unpackEntityManifests(sceneConfig: Scene): void;
    /**
     * TODO: Move to the editor.
     *
     * Packs the entities within each component manager into a single array for saving to the scene json file.
     * @returns The list of packed entities.
     */
    packEntities(): any[];
    getComponents(entity: Entity): any[];
}
//# sourceMappingURL=entity-manager.d.ts.map