// Local imports.
import { Point } from 'src/lib/primitives/point';
import { Transform } from 'src/lib/primitives/transform';

/**
 * The collider component component enables object interaction.
 */
export class ColliderComponent {
    private _points: Array<Point> = new Array();

    /**
     * 
     * @param transform 
     * @param isTrigger 
     */
    constructor(
        public transform: Transform, 
        public isTrigger?: boolean) {

        // Top left.
        this._points.push(new Point(transform.x, transform.y));

        // Top right.
        this._points.push(new Point(transform.x + transform.width, transform.y));

        // Bottom left.
        this._points.push(new Point(transform.x, transform.y + transform.height));

        // Bottom right.
        this._points.push(new Point(transform.x + transform.width, transform.y + transform.height));
    }
}