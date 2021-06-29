/**
 * Iterates the image data of the canvas to determine if the canvas
 * is empty or not.
 * @param canvas The canvas to check if it is empty.
 *
 * @author NSSure
 * @since 11/10/2020
 *
 * Ref - https://stackoverflow.com/questions/17386707/how-to-check-if-a-canvas-is-blank
 */
export default function isCanvasBlank(canvas) {
    var context = canvas.getContext('2d');
    var pixelBuffer = new Uint32Array(context.getImageData(0, 0, canvas.width, canvas.height).data.buffer);
    return !pixelBuffer.some(function (color) { return color !== 0; });
}
//# sourceMappingURL=is-canvas-empty.js.map