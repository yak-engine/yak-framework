import Point from "../../primitives/Point";
import Transform from "../../primitives/transform";
import Collider from "./collider";
export default class SquareCollider extends Collider {
    points: Array<Point>;
    constructor(transform: Transform);
    onCollisionEnter(): void;
    onCollisionLeave(): void;
}
//# sourceMappingURL=square-collider.d.ts.map