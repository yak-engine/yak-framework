import { Time } from 'lib/core/time';

/**
 * Tracks keyboard input only. For mouse input use Mouse.
 */
export class Input {
    public static codes: Map<string, boolean> = new Map();

    constructor() {
        window.addEventListener('keydown', (event) => this._onKeyDown(event));
        window.addEventListener('keyup', (event) => this._onKeyUp(event));
    }

    private _onKeyDown(event: KeyboardEvent): void {
        Input.codes.set(event.code.toLowerCase(), true);
    }

    private _onKeyUp(event: KeyboardEvent): void {
        if (Input.codes.has(event.code.toLowerCase())) {
            Input.codes.set(event.code.toLowerCase(), false);
        }
    }

    public static isPressed(code: string): boolean {
        return Input.codes.has(code.toLowerCase());
    }

    public static horizontal(): number {
        let xDirection: number;

        if (Input.isPressed('keya'))
        {
            xDirection = -1;
        }
        else if (Input.isPressed('keyd'))
        {
            xDirection = 1;
        }
        else {
            xDirection = 0;
        }

        return xDirection;
    }

    public static vertical(): number {
        let yDirection;

        if (Input.isPressed('keyw'))
        {
            yDirection = -1;
        }
        else if (Input.isPressed('keys'))
        {
            yDirection = 1;
        }
        else {
            yDirection = 0;
        }

        return yDirection * Time.deltaTime;
    }
}