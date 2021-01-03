import Entity from "./entity";
import Component from "./Component";

export default class ComponentManager {
    entities: Array<Entity> = new Array();
    data: Array<Component> = new Array();

    entityDataMap: Map<number, number> = new Map();
    dataEntityMap: Map<number, number> = new Map();
    entityIndexDataIndexMap

    addComponentInstance(entity: Entity, component: Component): void {
        // TODO: Ensure an entity cannot have the same component added more than once.
        
        this.data.push(component);
        component.id = this.data.length;

        // TODO: Should this be stored here? Or should you have to retrieve the entity through the entity manager.
        this.entities.push(entity);

        this.entityDataMap.set(entity.id, component.id);
        this.dataEntityMap.set(component.id, entity.id);
    }

}