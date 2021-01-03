import Entity from "../../components/entity";

// class NativeScriptableEntity {
//     constructor(public scritableEntity: typeof ScriptableEntity) {
        
//     }
// }

/**
 * User inherits this on the script classes.
 */
export default class ScriptableEntity {
    /**
     * Gets set by the script system when instantiating the scriptable entity.
     */
    public entity: Entity;

    public onCreate(): void {

    }

    public update(): void {

    }
}