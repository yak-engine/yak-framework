import Component from "./Component";
import ComponentManager from "./ComponentManager";

export default class ManagerFactory {
    public static managers: Map<string, ComponentManager> = new Map();

    constructor() {

    }

    public static register(componentType: typeof Component, manager: typeof ComponentManager): void {
        if (!ManagerFactory.managers.has(componentType.name)) {
            let managerInstance = new manager();
            ManagerFactory.managers.set(componentType.name, managerInstance);
        }
    }

    public static get(componentName: string): ComponentManager {
        if (ManagerFactory.managers.has(componentName)) {
            return ManagerFactory.managers.get(componentName);
        }

        throw `Manager has not been registered: ${componentName}`;
    }

    public static log(): void {
        ManagerFactory.managers.forEach((manager) => console.log(manager));
    }
}