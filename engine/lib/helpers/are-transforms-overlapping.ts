import { Point } from 'lib/primitives/point';
import { Transform } from 'lib/primitives/transform';
import { isCoordinateContained } from 'lib/helpers/is-coordinate-contained';

export function areTransformsOverlapping(sourceTransform: Transform, targetTransform: Transform): boolean {
    if (isCoordinateContained(new Point(sourceTransform.x, sourceTransform.y), targetTransform)) {
        return true;
    }

    if (isCoordinateContained(new Point(sourceTransform.x + sourceTransform.width, sourceTransform.y), targetTransform)) {
        return true;
    }

    if (isCoordinateContained(new Point(sourceTransform.x, sourceTransform.y + sourceTransform.height), targetTransform)) {
        return true;
    }

    if (isCoordinateContained(new Point(sourceTransform.x + sourceTransform.width, sourceTransform.y + sourceTransform.height), targetTransform)) {
        return true;
    }

    return false;
}