export default abstract class System {
    abstract name: string;
    abstract update(): void;
    abstract draw(context: CanvasRenderingContext2D): void;
}