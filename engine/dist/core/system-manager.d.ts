import { System } from '../systems/system';
export declare class SystemManager {
    static systems: any[];
    static register(system: System): void;
    static get(systemName: string): System;
}
//# sourceMappingURL=system-manager.d.ts.map