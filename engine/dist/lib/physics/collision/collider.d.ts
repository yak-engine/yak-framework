import { Entity } from 'src/lib/models/entity';
import { Point } from 'src/lib/primitives/Point';
import { Transform } from 'src/lib/primitives/transform';
export default abstract class Collider extends Entity {
    isTrigger: boolean;
    isTriggered: boolean;
    points: Array<Point>;
    abstract onCollisionEnter(): void;
    abstract onCollisionLeave(): void;
    constructor(transform: Transform);
}
//# sourceMappingURL=collider.d.ts.map