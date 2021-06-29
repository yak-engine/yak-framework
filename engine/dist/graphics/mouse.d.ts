import Point from "../primitives/Point";
/**
 * Tracks mouse input only. For keyboard input use Input.
 */
export default class Mouse {
    static buttons: Map<number, boolean>;
    static xDiff: number;
    static yDiff: number;
    static lastMousePosition: Point;
    constructor();
    onMouseDown(event: MouseEvent): void;
    onMouseUp(event: MouseEvent): void;
    static isPressed(button: number): boolean;
    static update(mousePosition: Point): void;
}
//# sourceMappingURL=mouse.d.ts.map