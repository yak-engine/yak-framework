import { Camera } from "../graphics/camera";
import { Transform } from '../primitives/transform';
export declare class CameraComponent {
    camera?: Camera | undefined;
    constructor(camera?: Camera | undefined);
}
export declare class ColliderComponent {
    transform: Transform;
    isTrigger?: boolean | undefined;
    private _points;
    /**
     *
     * @param transform
     * @param isTrigger
     */
    constructor(transform: Transform, isTrigger?: boolean | undefined);
}
export declare class ImageComponent {
    /**
     * The path of the image loaded into the component.
     */
    source?: string;
}
export declare class MaterialComponent {
    /**
     * The fill color for the entity i.e (#ffffff).
     *
     * @example
     * fillStyle = '#ffffff';
     */
    fillStyle?: string;
    /**
     * The alpha (opacity) of the entity.
     *
     * @remarks
     * The alpha can be set between 0 and 1.
     *
     * @example
     * alpha = 1;
     */
    alpha: number;
}
export declare class ScriptComponent {
    scritableEntity?: any;
    constructor(scritableEntity?: any);
    instance: any;
}
export declare class SpriteRendererComponent {
    layer: number;
    tilesetIndex: number;
    row?: number;
    column?: number;
}
export declare class TagComponent {
    name?: string | undefined;
    constructor(name?: string | undefined);
}
export declare class TilemapComponent {
    layer: number;
    tilesetIndex: number;
    tiles: number[];
}
export declare class TransformComponent {
    transform: Transform;
    constructor(transform: Transform);
}
//# sourceMappingURL=components.d.ts.map