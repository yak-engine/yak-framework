import System from "./system";

export default class SystemManager {
    public static systems: System[] = [];

    public static register(system: System): void {
        if (SystemManager.systems.findIndex(x => x.name === system.name) === -1) {
            SystemManager.systems.push(system);
        }
    }

    public static get(systemName: string): System {
        return SystemManager.systems.find(x => x.name === systemName);
    }
}