import { System } from 'lib/systems/system';

export class SystemManager {
    public static systems: any[] = [];

    public static register(system: System): void {
        if (SystemManager.systems.findIndex(x => x.name === system.name) === -1) {
            SystemManager.systems.push(system);
        }
    }

    public static get(systemName: string): System {
        return SystemManager.systems.find(x => x.name === systemName);
    }
}