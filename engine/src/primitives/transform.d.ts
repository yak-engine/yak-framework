import Camera from "../graphics/camera";
export default class Transform {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number);
    getScreenX(camera: Camera): number;
    clampX(min: number, max: number): boolean;
    clampY(min: number, max: number): boolean;
    offsetX(): number;
    offsetY(): number;
    lerp(startValue: number, endValue: number, amount: number): number;
    /**
     * Returns a new empty transform object. Meaning the x, y, width, and height
     * values are all zero.
     *
     * @author NSSure
     * @since 11/12/2020
     */
    static get empty(): Transform;
}
//# sourceMappingURL=transform.d.ts.map