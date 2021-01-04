import Component from "../../components/Component";
import Entity from "../../components/entity";

/**
 * User inherits this on the script classes.
 */
export default class ScriptableEntity {
    /**
     * Gets set by the script system when instantiating the scriptable entity.
     */
    public entity: Entity;

    public onCreate(): string | void {};
    public update(): string | void {};
    public onTriggerEnter(entity: Entity): void {};
    public onTriggerLeave(entity: Entity): void {};
    public onTriggerStay(entity: Entity): void {};

    public addComponent(component: Component): void {
        this.entity.addComponent(component);
    }

    // public getComponent<TComponent>(component: typeof TComponent): void {
    //     return this.entity.getComponent()
    // }
}