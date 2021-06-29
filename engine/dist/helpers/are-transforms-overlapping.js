import Point from "../primitives/Point";
import isCoordinateContained from "./is-coordinate-contained";
export default function areTransformsOverlapping(sourceTransform, targetTransform) {
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
//# sourceMappingURL=are-transforms-overlapping.js.map