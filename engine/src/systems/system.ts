import Entity from "../components/entity";

export default abstract class System {
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