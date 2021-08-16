import ComponentManager from "./component-manager";
import Component from "./components/Component";

export default class ManagerFactory {
    public static managers: Map<any, any> = new Map();

    constructor() {

    }

    // TODO: Add type contraints.
    public static register(componentType: typeof Component, componentManagerInstance: any): void {
        if (!ManagerFactory.managers.has(componentType)) {
            ManagerFactory.managers.set(componentType, componentManagerInstance);
        }
    }

    public static get<TComponentManager>(componentName: string): TComponentManager {
        if (ManagerFactory.managers.has(componentName)) {
            return ManagerFactory.managers.get(componentName);
        }

        throw `Manager has not been registered: ${componentName}`;
    }

    public static log(): void {
        ManagerFactory.managers.forEach((manager) => console.log(manager));
    }
}