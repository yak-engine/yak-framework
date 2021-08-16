import ComponentManager from "./component-manager";
import Component from "./components/Component";

export default class ManagerFactory {
    public static managers: Map<any, any> = new Map();

    constructor() {

    }

    // TODO: Add type contraints.
    public static register(componentName: string, componentManagerInstance: any): void {
        if (!ManagerFactory.managers.has(componentName)) {
            ManagerFactory.managers.set(componentName, componentManagerInstance);
        }
    }

    public static get<TComponentManager>(componentName: string): TComponentManager {
        console.log(componentName);

        if (ManagerFactory.managers.has(componentName)) {
            return ManagerFactory.managers.get(componentName);
        }

        throw `Manager has not been registered: ${componentName}`;
    }

    public static log(): void {
        ManagerFactory.managers.forEach((manager) => console.log(manager));
    }
}