import Input from './graphics/input';
import BaseRenderer from './graphics/renderer/base-renderer';
export default abstract class Application {
    /**
     * Contains the rendering functionality from the main loop.
     */
    renderer: BaseRenderer;
    /**
     * The main input system.
     */
    input: Input;
    /**
     * Added to
     */
    abstract onStart(): any;
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
    init(renderType?: string): Promise<void>;
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