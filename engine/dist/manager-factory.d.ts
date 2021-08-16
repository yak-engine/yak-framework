import Component from "./components/Component";
export default class ManagerFactory {
    static managers: Map<any, any>;
    constructor();
    static register(componentType: typeof Component, componentManagerInstance: any): void;
    static get<TComponentManager>(componentName: string): TComponentManager;
    static log(): void;
}
//# sourceMappingURL=manager-factory.d.ts.map