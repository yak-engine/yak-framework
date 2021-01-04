import Point from "../../primitives/point";
import Transform from "../../primitives/transform";
import Component from "../Component";

export default class ColliderComponent extends Component {
    private points: Array<Point> = new Array();

    constructor(public transform?: Transform, public isTrigger?: boolean) {
        super();

        this.transform = transform;
        this.isTrigger = isTrigger;

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