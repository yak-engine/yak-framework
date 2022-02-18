import { Manifest } from '../scene/manifest';

/**
 * Contains configuration options for the application instance.
 * 
 * @author NSSure
 * @since 11/8/2020
 */
export class Configuration {
    /**
     * Loaded resource.
     */
    public static engineConfig: Manifest | null = null;

    public static width: number;

    public static height: number;

    public static baseUrl: string;

    /**
     * Default size of the squares of the canvas.
     */
    public static gridSquareSize: number = 32;

    /**
     * The background fill that immediately fill the canvas area after the clearCanvas method to called in the draw method.
     */
    public static canvasFill: string = '#181818';

    /**
     * When in selection mode this is the fill color of the selected area.
     */
    public static selectionTransformFill: string = 'rgba(252,248,227, 0.7)';
}