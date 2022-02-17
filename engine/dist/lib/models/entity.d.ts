import { ScriptComponent } from 'src/lib/components/ScriptComponent';
/**
 * Base object class used for sprites, colliders, primitives, etc. Contains
 * shared code common across most classes.
 *
 * @author NSSure
 * @since 11/8/2020
 */
export declare class Entity {
    /**
     * Generates a unique 12 character ID for each entity.
     */
    id: string;
    /**
     * The name of the entity.
     */
    name?: string;
    /**
     * Determines if the entity should be rendered.
     */
    enabled: boolean;
    addComponent<TComponent>(componentInstance: TComponent): void;
    getComponent<TComponent>(componentType: any): TComponent;
    getScriptInstances(): ScriptComponent[];
}
//# sourceMappingURL=entity.d.ts.map