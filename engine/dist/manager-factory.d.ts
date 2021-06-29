import Component from "./components/component";
import ComponentManager from "./component-manager";
export default class ManagerFactory {
    static managers: Map<string, ComponentManager>;
    constructor();
    static register(componentType: typeof Component, manager: typeof ComponentManager): void;
    static get(componentName: string): ComponentManager;
    static log(): void;
}
//# sourceMappingURL=manager-factory.d.ts.map