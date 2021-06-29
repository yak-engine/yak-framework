export default class ManagerFactory {
    public static managers: Map<string, any> = new Map();

    constructor() {

    }

    public static register<TComponentManager>(componentType: string, managerInstance: TComponentManager): void {
        if (!ManagerFactory.managers.has(componentType)) {
            ManagerFactory.managers.set(componentType, managerInstance);
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