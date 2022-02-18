import { Point } from '../primitives/point';
import { Transform } from '../primitives/transform';
export declare class Camera {
    /**
     * Stored in world coordinates.
     */
    viewport: Transform;
    /**
     * Stored in world coordinates.
     */
    max: Point;
    orthographicSize: number;
    isClampedX(): boolean;
    isClampedY(): boolean;
    update(): void;
}
//# sourceMappingURL=camera.d.ts.map