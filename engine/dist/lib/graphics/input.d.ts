/**
 * Tracks keyboard input only. For mouse input use Mouse.
 */
export declare class Input {
    static codes: Map<string, boolean>;
    constructor();
    private _onKeyDown;
    private _onKeyUp;
    static isPressed(code: string): boolean;
    static horizontal(): number;
    static vertical(): number;
}
//# sourceMappingURL=input.d.ts.map