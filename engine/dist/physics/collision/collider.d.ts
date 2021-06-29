import Entity from "../../models/entity";
import Point from "../../primitives/Point";
import Transform from "../../primitives/transform";
export default abstract class Collider extends Entity {
    isTrigger: boolean;
    isTriggered: boolean;
    points: Array<Point>;
    abstract onCollisionEnter(): void;
    abstract onCollisionLeave(): void;
    constructor(transform: Transform);
}
//# sourceMappingURL=collider.d.ts.map