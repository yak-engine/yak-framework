import { Point } from '../primitives/point';

/**
 * Tracks mouse input only. For keyboard input use Input.
 */
export class Mouse {
    public static buttons: Map<number, boolean> = new Map();

    public static xDiff: number = 0;

    public static yDiff: number = 0;

    public static lastMousePosition: Point | null = null;

    constructor() {
        window.addEventListener('mousedown', (event) => this.onMouseDown(event));
        window.addEventListener('mouseup', (event) => this.onMouseUp(event));
    }

    onMouseDown(event: MouseEvent): void {
        Mouse.buttons.set(event.button, true);
    }

    onMouseUp(event: MouseEvent): void {
        if (Mouse.buttons.has(event.button)) {
            Mouse.buttons.set(event.button, false);
        }
    }

    static isPressed(button: number): boolean {
        return Mouse.buttons.has(button);
    }

    static update(mousePosition: Point): void {
        if (this.lastMousePosition) {
            this.xDiff = mousePosition.x - this.lastMousePosition.x;
            this.yDiff = mousePosition.y - this.lastMousePosition.y;
        }

        this.lastMousePosition = mousePosition;
    }
}