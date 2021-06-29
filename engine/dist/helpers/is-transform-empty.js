/**
 * Determines if a given transform object is empty. Meaning the x, y, width, and height
 * values are all zero.
 *
 * @param transform The transform to check if it is empty.
 *
 * @author NSSure
 * @since 11/12/2020
 */
export default function isTransformEmpty(transform) {
    return transform.x === 0 && transform.y === 0 && transform.width === 0 && transform.height === 0;
}
//# sourceMappingURL=is-transform-empty.js.map