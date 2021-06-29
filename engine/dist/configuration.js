/**
 * Contains configuration options for the application instance.
 *
 * @author NSSure
 * @since 11/8/2020
 */
var Configuration = /** @class */ (function () {
    function Configuration() {
    }
    /**
     * Loaded resource.
     */
    Configuration.engineConfig = null;
    /**
     * Default size of the squares of the canvas.
     */
    Configuration.gridSquareSize = 32;
    /**
     * The background fill that immediately fill the canvas area after the clearCanvas method to called in the draw method.
     */
    Configuration.canvasFill = '#181818';
    /**
     * When in selection mode this is the fill color of the selected area.
     */
    Configuration.selectionTransformFill = 'rgba(252,248,227, 0.7)';
    return Configuration;
}());
export default Configuration;
//# sourceMappingURL=configuration.js.map