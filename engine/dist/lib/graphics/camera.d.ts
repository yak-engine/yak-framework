import { Point } from 'src/lib/primitives/Point';
import { Transform } from 'src/lib/primitives/transform';
export default class Camera {
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