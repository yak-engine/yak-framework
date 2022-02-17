import Component from 'src/lib/components/Component';
import { Entity } from 'src/lib/models/entity';
/**
 * User inherits this on the script classes.
 */
export declare class ScriptableEntity {
    /**
     * Gets set by the script system when instantiating the scriptable entity.
     */
    entity: Entity;
    /**
     * Executed when the script instance is created.
     */
    onCreate(): string | void;
    /**
     * Executed every iteration of the main loop.
     */
    update(): string | void;
    /**
     * Fires when the entity has a trigger collider and interacts with another collider.
     * @param entity The entity that fired the enter trigger.
     */
    onTriggerEnter(entity: Entity): void;
    /**
     * Fires when the entity has a trigger collider and interacts with another collider.
     * @param entity The entity the fire the leave trigger.
     */
    onTriggerLeave(entity: Entity): void;
    /**
     * Fires when the entity has a trigger collider and interacts with another collider.
     * @param entity The entity that fired the stay trigger.
     */
    onTriggerStay(entity: Entity): void;
    /**
     * Adds a new component to the entity associated with the script.
     * @param component The component to add to the entity.
     */
    addComponent(component: Component): void;
    /**
     * Gets a component of the specified type from the entity associated with the script. If no component is found then
     * null will be return.
     *
     * @param componentType The component type to get from the entity.
     * @returns The instance of the component.
     */
    getComponent<TComponent>(componentType: typeof Component): TComponent;
}
//# sourceMappingURL=ScriptableEntity.d.ts.map