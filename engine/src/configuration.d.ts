import Manifest from "./models/manifest";
/**
 * Contains configuration options for the application instance.
 *
 * @author NSSure
 * @since 11/8/2020
 */
export default class Configuration {
    /**
     * Loaded resource.
     */
    static engineConfig: Manifest;
    static width: number;
    static height: number;
    static baseUrl: string;
    /**
     * Default size of the squares of the canvas.
     */
    static gridSquareSize: number;
    /**
     * The background fill that immediately fill the canvas area after the clearCanvas method to called in the draw method.
     */
    static canvasFill: string;
    /**
     * When in selection mode this is the fill color of the selected area.
     */
    static selectionTransformFill: string;
}
//# sourceMappingURL=configuration.d.ts.map