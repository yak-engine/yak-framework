import Time from "../time";

/**
 * Tracks keyboard input only. For mouse input use Mouse.
 */
export default class Input {
    public static codes: Map<string, boolean> = new Map();

    constructor() {
        window.addEventListener('keydown', (event) => this.onKeyDown(event));
        window.addEventListener('keyup', (event) => this.onKeyUp(event));
    }

    onKeyDown(event: KeyboardEvent): void {
        Input.codes.set(event.code.toLowerCase(), true);
    }

    onKeyUp(event: KeyboardEvent): void {
        if (Input.codes.has(event.code.toLowerCase())) {
            Input.codes.set(event.code.toLowerCase(), false);
        }
    }

    static isPressed(code: string): boolean {
        if (!Input.codes.has(code.toLowerCase())) {
            return false;
        }

        return Input.codes.get(code.toLowerCase());
    }

    static horizontal(): number {
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

    static vertical(): number {
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