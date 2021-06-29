/**
 * Tracks keyboard input only. For mouse input use Mouse.
 */
export default class Input {
    static codes: Map<string, boolean>;
    constructor();
    onKeyDown(event: KeyboardEvent): void;
    onKeyUp(event: KeyboardEvent): void;
    static isPressed(code: string): boolean;
    static horizontal(): number;
    static vertical(): number;
}
//# sourceMappingURL=input.d.ts.map