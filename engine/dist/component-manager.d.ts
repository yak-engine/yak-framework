import Entity from "./models/entity";
interface EntityComponentMap {
    [entityId: string]: number;
}
export default class ComponentManager<TComponent> {
    /**
     * The component instance for the specific manager that inherits the component manager. For example
     * if the TagComponentManager is the inherting then this will contain all of the tag component instances.
     */
    instances: TComponent[];
    /**
     * The component instance for the specific manager that inherits the component manager. For example
     * if the TagComponentManager is the inherting then this will contain all of the tag component instances.
     */
    entities: Entity[];
    /**
     * Contains a map between the id of an entity and all its associated component types.
     */
    map: EntityComponentMap;
    /**
     * Trys to add the instance of a component to an entity. If the component already exists for the entity and exception will be thrown.
     * Note that the entities may have multiple instances of the script component.
     * @param entity The entity to associated the component instance with.
     * @param componentInstance The component instance to associate with the entity.
     */
    addComponentInstance(entity: Entity, componentInstance: TComponent): void;
    getInstance(entity: Entity): TComponent;
    /**
     * Dispose of the entity reference and any related data. Called when an entity is destroyed.
     * @param entity The entity to dispose of the references for.
     */
    dispose(entity: Entity): void;
}
export {};
//# sourceMappingURL=component-manager.d.ts.map