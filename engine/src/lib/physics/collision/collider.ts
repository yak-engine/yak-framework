import { Entity } from 'src/lib/models/entity';
import { Point } from 'src/lib/primitives/Point';
import { Transform } from 'src/lib/primitives/transform';

export default abstract class Collider extends Entity {
    isTrigger: boolean = false;
    isTriggered: boolean = false;

    points: Array<Point> = new Array();

    abstract onCollisionEnter(): void;
    abstract onCollisionLeave(): void;

    constructor(transform: Transform) {
        super();

        // this.transform = transform;

        // Top left.
        this.points.push(new Point(transform.x, transform.y));

        // Top right.
        this.points.push(new Point(transform.x + transform.width, transform.y));

        // Bottom left.
        this.points.push(new Point(transform.x, transform.y + transform.height));

        // Bottom right.
        this.points.push(new Point(transform.x + transform.width, transform.y + transform.height));
    }
}