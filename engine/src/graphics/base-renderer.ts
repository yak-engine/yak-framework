import Scene from "../models/scene";

export default abstract class BaseRenderer {
    // Required properties.
    engineCanvas: HTMLCanvasElement;
    scene: Scene;

    constructor() {
        this.engineCanvas = document.querySelector('#engine-canvas');
    }

    // Required methods.
    abstract init(): void;
    abstract update(): void;
    abstract draw(): void;
}