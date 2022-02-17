import { System } from 'src/lib/systems/system';
export default class SystemManager {
    static systems: any[];
    static register(system: System): void;
    static get(systemName: string): System;
}
//# sourceMappingURL=system-manager.d.ts.map