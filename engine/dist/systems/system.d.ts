import { Entity } from '../scene/entity';
export declare abstract class System {
    /**
     * The name of the system.
     */
    abstract name: string;
    /**
     * test
     * @param entity test
     */
    abstract dispose(entity: Entity): void;
}
//# sourceMappingURL=system.d.ts.map