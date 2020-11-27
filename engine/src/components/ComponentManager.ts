import Entity from "./entity";
import Component from "./Component";

export default class ComponentManager {
    entities: Array<Entity> = new Array();
    data: Array<Component> = new Array();

    entityDataMap: Map<number, number> = new Map();

    addComponentInstance(entity: Entity, component: Component): void {
        // TODO: Ensure an entity cannot have the same component added more than once.
        
        this.data.push(component);
        this.entityDataMap.set(entity.id, this.data.length - 1);
    }
}