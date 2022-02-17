import { Entity } from 'lib/models/entity';
import { Point } from 'lib/primitives/point';
import { Transform } from 'lib/primitives/transform';

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