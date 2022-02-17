import { Point } from 'src/lib/primitives/Point';
import { Transform } from 'src/lib/primitives/transform';
import isCoordinateContained from 'src/lib/helpers/is-coordinate-contained';

export default function areTransformsOverlapping(sourceTransform: Transform, targetTransform: Transform): boolean {
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