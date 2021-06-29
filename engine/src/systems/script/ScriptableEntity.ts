import Component from "../../components/Component";
import Entity from "../../models/entity";

/**
 * User inherits this on the script classes.
 */
export default class ScriptableEntity {
    /**
     * Gets set by the script system when instantiating the scriptable entity.
     */
    public entity: Entity;

    /**
     * Executed when the script instance is created.
     */
    public onCreate(): string | void {};

    /**
     * Executed every iteration of the main loop.
     */
    public update(): string | void {};

    /**
     * Fires when the entity has a trigger collider and interacts with another collider.
     * @param entity The entity that fired the enter trigger.
     */
    public onTriggerEnter(entity: Entity): void {};

    /**
     * Fires when the entity has a trigger collider and interacts with another collider.
     * @param entity The entity the fire the leave trigger.
     */
    public onTriggerLeave(entity: Entity): void {};

    /**
     * Fires when the entity has a trigger collider and interacts with another collider.
     * @param entity The entity that fired the stay trigger.
     */
    public onTriggerStay(entity: Entity): void {};

    /**
     * Adds a new component to the entity associated with the script.
     * @param component The component to add to the entity.
     */
    public addComponent(component: Component): void {
        this.entity.addComponent(component);
    }

    /**
     * Gets a component of the specified type from the entity associated with the script. If no component is found then
     * null will be return.
     * 
     * @param componentType The component type to get from the entity.
     * @returns The instance of the component.
     */
    public getComponent<TComponent>(componentType: typeof Component): TComponent {
        return this.entity.getComponent(componentType) as TComponent;
    }
}