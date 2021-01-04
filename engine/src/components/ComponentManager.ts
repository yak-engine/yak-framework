import Entity from "./entity";
import Component from "./Component";
import ScriptComponent from "./script/ScriptComponent";

class IndexMap {
    constructor(public entityIndex?: number, public componentIndexes?: number[]) {

    }
}

export default class ComponentManager {
    components: Component[] = [];
    entities: Entity[] = [];

    /**
     * Maps entity index to data index.
     */
    entityDataMap: Map<number, IndexMap> = new Map();

    addComponentInstance(entity: Entity, component: Component): void {
        if (this.entityDataMap.has(entity.id)) {
            if (component.constructor.name !== ScriptComponent.name) {
                throw "You can't not have multiple component of the same type on entity unless that component is a script.";
            }
        }

        this.entities.push(entity);
        this.components.push(component);

        component.id = this.components.length;

        if (!this.entityDataMap.has(entity.id)) {
            this.entityDataMap.set(entity.id, new IndexMap(this.entities.length - 1, [this.components.length - 1]));
        }
        else {
            console.log('ADDING SCRIPT COMPONENT');

            // We are adding a new script component.
            this.entityDataMap.get(entity.id).componentIndexes.push(this.components.length - 1);
        }
    }

    /**
     * Dispose of the entity reference and any related data. Called when an entity is destroyed.
     * @param entity The entity to dispose of the references for.
     */
    public dispose(entity: Entity): void {
        if (this.entityDataMap.has(entity.id)) {
            let indexMap: IndexMap = this.entityDataMap.get(entity.id);

            for(let i = 1; i <= indexMap.componentIndexes.length; i++) {
                let componentIndex: number = indexMap.componentIndexes[i];
                this.components.splice(componentIndex, 1);
            }

            this.entities.splice(indexMap.entityIndex, 1)

            this.entityDataMap.delete(entity.id);
        }
    }
}