export default class Mat3 {
    constructor();
    static identity(): number[];
    static projection(width: number, height: number): number[];
    static translation(translateX: number, translateY: number): number[];
    static rotation(angleInRadians: number): number[];
    static scaling(scaleX: number, scaleY: number): number[];
    static multiply(a: any, b: any): number[];
    static translate(matrix: number[], translateX: number, translateY: number): number[];
    static rotate(matrix: number[], angleInRadians: number): number[];
    static scale(matrix: number[], scaleX: number, scaleY: number): number[];
}
//# sourceMappingURL=Mat3.d.ts.map