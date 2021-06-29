export default class Mat4 {
    constructor();
    static identity(): number[];
    static translation(translateX: number, translateY: number, translateZ: number): number[];
    static xRotation(angleInRadians: any): number[];
    static yRotation(angleInRadians: any): number[];
    static zRotation(angleInRadians: any): number[];
    static scaling(sx: any, sy: any, sz: any): any[];
    static multiply(a: any, b: any): number[];
    static translate(m: any, tx: any, ty: any, tz: any): number[];
    static xRotate(m: any, angleInRadians: any): number[];
    static yRotate(m: any, angleInRadians: any): number[];
    static zRotate(m: any, angleInRadians: any): number[];
    static scale(m: any, sx: any, sy: any, sz: any): number[];
    static projection(width: any, height: any, depth: any): number[];
    static orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number): number[];
}
//# sourceMappingURL=Mat4.d.ts.map