export default class Mat4 {
    constructor();
    static identity(): number[];
    static translation(translateX: number, translateY: number, translateZ: number): number[];
    static xRotation(angleInRadians: number): number[];
    static yRotation(angleInRadians: number): number[];
    static zRotation(angleInRadians: number): number[];
    static scaling(sx: number, sy: number, sz: number): number[];
    static multiply(a: any, b: any): number[];
    static translate(m: number, tx: number, ty: number, tz: number): number[];
    static xRotate(m: number, angleInRadians: number): number[];
    static yRotate(m: number, angleInRadians: number): number[];
    static zRotate(m: number, angleInRadians: number): number[];
    static scale(m: number, sx: number, sy: number, sz: number): number[];
    static projection(width: number, height: number, depth: number): number[];
    static orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number): number[];
}
//# sourceMappingURL=Mat4.d.ts.map