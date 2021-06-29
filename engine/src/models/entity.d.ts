import Component from "../components/component";
import ScriptComponent from "../components/ScriptComponent";
/**
 * Base object class used for sprites, colliders, primitives, etc. Contains
 * shared code common across most classes.
 *
 * @author NSSure
 * @since 11/8/2020
 */
export default class Entity {
    /**
     * Generates a unique 12 character ID for each entity.
     */
    id: string;
    /**
     * The name of the entity.
     */
    name: string;
    /**
     * Determines if the entity should be rendered.
     */
    enabled: boolean;
    addComponent(componentInstance: Component): void;
    getComponent<TComponent>(componentType: any): TComponent;
    getScriptInstances(): ScriptComponent[];
    getComponentName: any;
}
//# sourceMappingURL=entity.d.ts.map