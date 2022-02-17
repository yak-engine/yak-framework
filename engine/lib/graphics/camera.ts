import { Point } from 'lib/primitives/point';
import { Transform } from 'lib/primitives/transform';

export class Camera {
    /**
     * Stored in world coordinates.
     */
    public viewport!: Transform;

    /**
     * Stored in world coordinates.
     */
    public max!: Point;

    orthographicSize: number = 5;

    isClampedX(): boolean {
        if (this.viewport.x >= this.max.x / 2 || this.viewport.x === 0) {
            return true;
        }

        return false;
    }

    isClampedY(): boolean {
        if (this.viewport.y >= this.max.y / 2 || this.viewport.y === 0) {
            return true;
        }

        return false;
    }

    update(): void {
        
    }
}