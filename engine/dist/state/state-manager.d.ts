export default class StateManager {
    static data: Map<string, any>;
    static commit<TType>(key: string, value: TType): void;
    static get<TType>(key: string): TType;
    static exists(key: string): boolean;
    static delete(key: string): void;
}
//# sourceMappingURL=state-manager.d.ts.map