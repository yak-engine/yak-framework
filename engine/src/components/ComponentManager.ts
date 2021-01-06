import Entity from "./entity";
import Component from "./Component";
import ScriptComponent from "./script/ScriptComponent";
import TilemapSystem from "../systems/tilemap/TilemapSystem";
import EntityManager from "./EntityManager";

class IndexMap {
    constructor(public entityIndex?: number, public componentIds?: number[]) {

    }
}

export default class ComponentManager {
    components: Component[] = [];
    entities: Entity[] = [];

    /**
     * Maps entity index to data index.
     */
    entityDataMap: Map<any, number[]> = new Map();

    addComponentInstance(entity: Entity, component: Component): void {
        if (this.entityDataMap.has(entity.id)) {
            if (component.constructor.name !== ScriptComponent.name) {
                throw `[${component.constructor.name}]: You can't not have multiple component of the same type on entity unless that component is a script.`;
            }
        }

        this.components.push(component);
        component.id = this.components.length;

        if (!this.entityDataMap.has(entity.id)) {
            this.entities.push(entity);
            this.entityDataMap.set(entity.id, [component.id]);
        }
        else {
            console.log('ADDING SCRIPT COMPONENT');
            // We are adding a new script component.
            this.entityDataMap.get(entity.id).push(component.id);
        }
    }

    /**
     * Dispose of the entity reference and any related data. Called when an entity is destroyed.
     * @param entity The entity to dispose of the references for.
     */
    public dispose(entity: Entity): void {
        if (this.constructor.name === 'ScriptComponentManager') {
            console.log(this);
        }

        if (this.entityDataMap.has(entity.id)) {
            let componentIds: number[] = this.entityDataMap.get(entity.id);

            for (let i = 0; i < componentIds.length - 1; i++) {
                let componentIndex: number = this.components.findIndex(x => x.id === componentIds[i]);

                if (componentIndex !== -1) {
                    this.components.splice(componentIndex, 1);
                }
            }

            this.entityDataMap.delete(entity.id);
            
            let entityIndex: number = this.entities.findIndex(x => x.id === entity.id);

            if (entityIndex !== -1) {
                this.entities.splice(entityIndex, 1);
            }

            console.log(this);
        }
    }
}