import Entity from "../components/entity";

export default abstract class System {
    abstract name: string;
    abstract update(): void;
    abstract disposeEntityRefs(entity: Entity): void;
    abstract draw(context: CanvasRenderingContext2D): void;
}