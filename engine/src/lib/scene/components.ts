import { Camera } from "../graphics/camera";
import { Point } from '../primitives/point'
import { Transform } from '../primitives/transform'

export class CameraComponent {
    constructor(public camera?: Camera) {
 
    }
}

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

export class ImageComponent {
    /**
     * The path of the image loaded into the component.
     */
    public source?: string;
}

export class MaterialComponent {
    /**
     * The fill color for the entity i.e (#ffffff).
     * 
     * @example
     * fillStyle = '#ffffff';
     */
    public fillStyle?: string;

    /**
     * The alpha (opacity) of the entity.
     * 
     * @remarks
     * The alpha can be set between 0 and 1.
     * 
     * @example
     * alpha = 1;
     */
    public alpha: number = 1;
}

export class ScriptComponent  {
    constructor(public scritableEntity?: any) {

    }

    public instance!: any; //ScriptableEntity;
}

export class SpriteRendererComponent {
    public layer!: number;

    public tilesetIndex!: number;

    public row?: number;

    public column?: number;
}

export class TagComponent {
    constructor(
        public name?: string
    ) {
        
    }
}

export class TilemapComponent {
    public layer: number = 0;

    public tilesetIndex: number = 0;

    public tiles: number[] = [];
}

export class TransformComponent {
    constructor(public transform: Transform) {
        
    }
}