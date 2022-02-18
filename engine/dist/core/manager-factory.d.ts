export declare class ManagerFactory {
    static managers: Map<any, any>;
    constructor();
    static bootstrap(): void;
    static register(componentName: string, componentManagerInstance: any): void;
    static get<TComponentManager>(componentName: string): TComponentManager;
    static log(): void;
}
//# sourceMappingURL=manager-factory.d.ts.map