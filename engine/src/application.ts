import Renderer from './graphics/renderer';
import Time from './time';
import Input from './graphics/input';
import CollisionSystem from './systems/collision-system';
import SceneManager from './scene-manager';
import Tileset from './graphics/tileset';
import { Logger } from './logging/logger';
import Configuration from './configuration';
import Mouse from './graphics/mouse';

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

    mouse: Mouse;

    constructor() {
        // Register required component.
        // TODO: Only register the required components.
        Configuration.RegisterManagers();

        console.log('[ENGINE APPLICATION STARTED');
    }

    /**
     * Actually begins the game instance. Processes the configuration.
     * 
     * @author NSSure
     * @since 11/8/2020
     */
    start(): void {
        const urlParams = new URLSearchParams(window.location.search);
        const sceneName = urlParams.get('sceneName');

        fetch(`./api/scaffold/get`).then((response) => response.json()).then(async (scaffold: any) => {
            console.log(scaffold);
            this.renderer.scene = await SceneManager.load(scaffold.scenes[0]);
            console.log(this.renderer.scene);

            let loadedTilesets = 0;

            this.renderer.scene.tilesets.forEach((tilesetPath: string) => {
               let image = new Image();

               image.onload = () => {
                   this.renderer.tilesets.push(new Tileset(image));
                   
                   loadedTilesets++;

                    if (loadedTilesets === this.renderer.scene.tilesets.length) {
                        console.log(this.renderer.tilesets);
                        this.renderer.init();
                        // this.ready();
                        window.requestAnimationFrame((time: number) => this.mainLoop(time));
                    }
               }

               image.onerror = () => {
                   Logger.data('failed to load tileset');
               }
               
               image.src = `./tilesets/${tilesetPath}`;
            });

            // this.renderer.init();
            // window.requestAnimationFrame((time: number) => this.mainLoop(time));
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
        window.requestAnimationFrame((time: number) => this.mainLoop(time));

        // Calculate delta time for update method.
        Time.calculateDeltaTime(time);

        Mouse.update(this.renderer.mousePosition);

        // Call the update method. Implemented by the consuming class.
        // this.update(Time.deltaTime);

        // Run the systems between the update and draw calls.
        this.collision.run();

        // The main render call.
        this.renderer.draw();
    }

    // abstract ready(): void;
    // abstract update(deltaTime: number): void;
}

window.addEventListener('DOMContentLoaded', (event) => {
    let application = new Application();
    application.start();
})