import ManagerFactory from "./ManagerFactory";

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
    // id: string = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 12);
    id: number = 0; // Refactored to number for ECS.

    name: string;

    /**
     * Determines if the entity should be rendered.
     */
    enabled: boolean = true;

    public addComponent<TComponent>(component: TComponent): void {
        let manager = ManagerFactory.get(component.constructor.name);
        manager.addComponentInstance(this, component);
    }

    public getComponent<TComponent>(componentName: string): TComponent {
        let manager = ManagerFactory.get(componentName);

        if (manager.entityDataMap.has(this.id)) {
            return <TComponent>manager.data[manager.entityDataMap.get(this.id)];
        }

        return null;
    }

    public removeComponent(componentName: string): void {
        let manager = ManagerFactory.get(componentName);

        if (manager.entityDataMap.has(this.id)) {
            let componentInstanceIndex: number = manager.entityDataMap.get(this.id);
            manager.data.splice(componentInstanceIndex, 1);
            manager.entityDataMap.delete(this.id);
            manager.dataEntityMap.delete(componentInstanceIndex);
        }
    }

    public getComponentName
}