import { Point } from '../primitives/point';
import { Transform } from '../primitives/transform';
/**
 * Determines if the given x/y coordinate is contained with the given dimensions. Think
 * if a mouse is hovering over a button.
 *
 * @author NSSure
 * @since 11/9/2020
 *
 * @param point The point that needs to be checked against the given container dimensions.
 * @param containerOrigin The x and y coordinates of container.
 * @param containerWidth The width of the container.
 * @param containerHeight The height of the container.
 */
export declare function isCoordinateContained(point: Point, containerTransform: Transform): boolean;
//# sourceMappingURL=is-coordinate-contained.d.ts.map