import { Point } from 'src/lib/primitives/Point';
import { Transform } from 'src/lib/primitives/transform';
import Collider from 'src/lib/physics/collision/collider';
export default class SquareCollider extends Collider {
    points: Array<Point>;
    constructor(transform: Transform);
    onCollisionEnter(): void;
    onCollisionLeave(): void;
}
//# sourceMappingURL=square-collider.d.ts.map