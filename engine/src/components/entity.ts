import Component from "./Component";
import ManagerFactory from "./ManagerFactory";
import ScriptComponent from "./script/ScriptComponent";

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
    id: string = ''; // Refactored to number for ECS.

    name: string;

    /**
     * Determines if the entity should be rendered.
     */
    enabled: boolean = true;

    public addComponent(componentInstance: Component) {
        let manager = ManagerFactory.get(componentInstance.constructor.name);
        manager.addComponentInstance(this, componentInstance);
    }

    public getComponent<TComponent>(componenType: typeof Component): TComponent {
        if (componenType.name === ScriptComponent.name) {
            throw "Getting script components is not currently supported.";
        }
        
        let manager = ManagerFactory.get(componenType.name);

        if (manager.entityDataMap.has(this.id)) {
            // TODO: This will not work for script components.
            return <TComponent>(manager.components.find(x => x.id === manager.entityDataMap.get(this.id)[0]) as unknown);
        }

        return null;
    }

    public getScriptInstances(): ScriptComponent[] {
        let manager = ManagerFactory.get(ScriptComponent.name);

        if (manager.entityDataMap.has(this.id)) {
            console.log(manager.components.filter(x => manager.entityDataMap.get(this.id).includes(x.id)));
            // TODO: This will not work for script components.
            return manager.components.filter(x => manager.entityDataMap.get(this.id).includes(x.id)) as ScriptComponent[];
        }

        return [];
    }

    // public removeComponent(componentName: string): void {
    //     let manager = ManagerFactory.get(componentName);

    //     if (manager.entityDataMap.has(this.id)) {
    //         let componentInstanceId: number = manager.entityDataMap.get(this.id);
    //         manager.data.splice(manager.data.findIndex(x => x.id === componentInstanceId), 1);
    //         manager.entityDataMap.delete(this.id);
    //         manager.dataEntityMap.delete(componentInstanceId);
    //     }

    //     console.log(manager);
    // }

    public getComponentName
}