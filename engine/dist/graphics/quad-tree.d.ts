import Point from "../primitives/Point";
import Transform from "../primitives/transform";
export default class Quad {
    transform: Transform;
    node: Point;
    topLeftTree: Quad;
    topRightTree: Quad;
    bottomLeftTree: Quad;
    bottomRightTree: Quad;
    insert(node: Point): void;
}
//# sourceMappingURL=quad-tree.d.ts.map