import { Entity } from 'src/lib/models/entity';

export abstract class System {
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