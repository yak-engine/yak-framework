import { Time } from '../core/time';
import { SceneManager } from '../core/scene-manager';
import { Configuration } from '../core/configuration';
import { SystemManager } from '../core/system-manager';
import { ManagerFactory } from '../core/manager-factory';

import { CollisionSystem } from '../systems/collision/collision-system';

import { Manifest } from '../scene/manifest';

import { ScriptSystem } from '../systems/script/ScriptSystem';
import { LoadSceneReturn } from '../models/returns/load-scene-return';

// Renderers implementations.
import { BaseRenderer } from '../graphics/renderer/base-renderer';
import { WebGLRenderer } from '../graphics/renderer/webgl-renderer';
import { CanvasRenderer } from '../graphics/renderer/canvas-renderer';

// Loggin.
import { Logger } from '../logging/logger';

export abstract class Application {
    /**
     * Contains the rendering functionality from the main loop.
     */
    public renderer!: BaseRenderer; 

    /**
     * Flag that determines what renderer will be used.
     */
    public type: string | 'webgl' | 'canvas' = 'canvas';

    /**
     * The main input system.
     */
    // public input: Input;

    /**
     * Added to
     */
    abstract onStart(): void;

    /**
     * The main constructor.
     */
    constructor() {
        // Register systems.
        SystemManager.register(new CollisionSystem());
        SystemManager.register(new ScriptSystem());

        // Map component manager instance to component types.
        ManagerFactory.bootstrap();

        Logger.info(`Registered ${ManagerFactory.managers.size} manager(s)`, Application.name);
        Logger.data('Registered manager(s)', ManagerFactory.managers);
    }

    /**
     * Actually begins the game instance. Processes the configuration.
     * 
     * @author NSSure
     * @since 11/8/2020
     */
    public async init(): Promise<void> {
        Logger.info('[Started initializing application]', Application.name);

        let engineConfigPath: string = 'manifest.json';

        // Determines what base url to use for loading application resources (tileset, configurations, etc).
        const urlParams = new URLSearchParams(location.search);

        // Used in the editor.
        if (urlParams.has('baseUrl')) {
            Configuration.baseUrl = decodeURIComponent(urlParams.get('baseUrl')!);
            engineConfigPath = `${Configuration.baseUrl}/${engineConfigPath}`;
        }

        // Load engine configuration.
        let engineConfig: Manifest = await (await fetch(engineConfigPath).catch(this.handleLoadError)).json();

        // Load the first scene and init the renderer with the default scene and tilesets.
        SceneManager.load(engineConfig.scenes[0]).then((loadSceneRtn: LoadSceneReturn) => {
            if (this.type === 'webgl') {
                this.renderer = new WebGLRenderer(loadSceneRtn.scene, loadSceneRtn.tilesets);
            }
            else {
                this.renderer = new CanvasRenderer(loadSceneRtn.scene, loadSceneRtn.tilesets);
            }
    
            this.renderer.init();
    
            this.onStart();
            
            // Start the main application loop.
            window.requestAnimationFrame((time: number) => this.mainLoop(time));
        });
    }

    private handleLoadError(response: any): Response {
        console.warn(response);

        return new Response(JSON.stringify({
            code: 500,
            message: response.error
        }));
    }

    /**
     * The main loop contains all the rendering logic will be called from within this function.
     * 
     * @param time The time between the animation frames.
     * 
     * @author NSSure
     * @since 11/8/2020
     */
    private mainLoop(time: number) {
        // Update peripheral data (time, mouse, etc) for use within the render systems.
        Time.calculateDeltaTime(time);
        // Mouse.update(this.renderer.mousePosition);

        // Iterate through any registered systems and execute the update method for each system.
        // SystemManager.systems.forEach((system: any) => {
        //     system.update();
        // });

        // Execute the draw method within the renderer.
        this.renderer.draw();

        // Request a new animation frame.
        window.requestAnimationFrame((time: number) => this.mainLoop(time));
    }
}