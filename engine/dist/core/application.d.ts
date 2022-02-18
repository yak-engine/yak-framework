import { BaseRenderer } from '../graphics/base-renderer';
export declare abstract class Application {
    /**
     * Contains the rendering functionality from the main loop.
     */
    renderer: BaseRenderer;
    /**
     * Flag that determines what renderer will be used.
     */
    type: string | 'webgl' | 'canvas';
    /**
     * The main input system.
     */
    /**
     * Added to
     */
    abstract onStart(): void;
    /**
     * The main constructor.
     */
    constructor();
    /**
     * Actually begins the game instance. Processes the configuration.
     *
     * @author NSSure
     * @since 11/8/2020
     */
    init(): Promise<void>;
    private handleLoadError;
    /**
     * The main loop contains all the rendering logic will be called from within this function.
     *
     * @param time The time between the animation frames.
     *
     * @author NSSure
     * @since 11/8/2020
     */
    private mainLoop;
}
//# sourceMappingURL=application.d.ts.map