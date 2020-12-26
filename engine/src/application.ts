import Renderer from './graphics/renderer';
import Time from './time';
import Input from './graphics/input';
import CollisionSystem from './systems/collision-system';
import SceneManager from './scene-manager';
import Configuration from './configuration';
import Mouse from './graphics/mouse';
import EngineConfig from './engine-config';

export default class Application {
    /**
     * Contains the rendering functionality from the main loop.
     */
    renderer: Renderer = new Renderer();

    /**
     * The main collision system.
     */
    collision: CollisionSystem = new CollisionSystem();

    /**
     * The main input system.
     */
    input: Input;

    /**
     * The main constructor.
     * @param baseUrl If not provided the current url will be used to serve the required resources.
     */
    constructor(public baseUrl?: string) {
        Configuration.baseUrl = this.baseUrl;
        Configuration.RegisterManagers();
    }

    /**
     * Actually begins the game instance. Processes the configuration.
     * 
     * @author NSSure
     * @since 11/8/2020
     */
    start(): void {
        let engineConfigPath: string = 'engine-config.json';

        if (this.baseUrl) {
            engineConfigPath = `${this.baseUrl}/${engineConfigPath}`;
        }

        fetch(engineConfigPath).then((response) => response.json()).then(async (engineConfig: any) => {
            Configuration.engineConfig = engineConfig;
            this.renderer.scene = await SceneManager.load(engineConfig.scenes[0]);
            this.renderer.init();
            window.requestAnimationFrame((time: number) => this.mainLoop(time));
        })
    }

    /**
     * The main loop contains all the rendering logic will be called from within this function.
     * 
     * @param time The time between the animation frames.
     * 
     * @author NSSure
     * @since 11/8/2020
     */
    mainLoop(time: number) {
        // Calculate delta time for update method.
        Time.calculateDeltaTime(time);

        // Update the mouse position.
        Mouse.update(this.renderer.mousePosition);

        // Run the systems between the update and draw calls.
        this.collision.run();

        // The main render call.
        this.renderer.draw();

        // Request a new animation frame.
        window.requestAnimationFrame((time: number) => this.mainLoop(time));
    }

    // abstract ready(): void;
    // abstract update(deltaTime: number): void;
}