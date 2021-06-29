import Time from './time';
import Input from './graphics/input';
import CollisionSystem from './systems/collision/collision-system';
import SceneManager from './scene-manager';
import Configuration from './configuration';
import SystemManager from './system-manager';
import ManagerFactory from './manager-factory';
import TagComponent from './components/TagComponent';
import TransformComponent from './components/TransformComponent';
import CameraComponent from './components/CameraComponent';
import MaterialComponent from './components/MaterialComponent';
import SpriteRendererComponent from './components/SpriteRendererComponent';
import ColliderComponent from './components/ColliderComponent';
import ImageComponent from './components/ImageComponent';
import ImageComponentManager from './components/managers/ImageComponentManager';
import ColliderComponentManager from './components/managers/ColliderComponentManager';
import SpriteRendererComponentManager from './components/managers/SpriteRendererComponentManager';
import CameraComponentManager from './components/managers/CameraComponentManager';
import TransformComponentManager from './components/managers/TransformComponentManager';
import TagComponentManager from './components/managers/TagComponentManager';
import Manifest from './models/manifest';
import MaterialComponentManager from './components/managers/MaterialComponentManager';
import ScriptSystem from './systems/script/ScriptSystem';
import ScriptComponent from './components/ScriptComponent';
import ScriptComponentManager from './components/managers/ScriptComponentManager';
import TilemapComponent from './components/TilemapComponent';
import TilemapComponentManager from './components/managers/TilemapComponentManager';
import WebGLRenderer from './graphics/renderer/webgl-renderer';
import BaseRenderer from './graphics/renderer/base-renderer';
import LoadSceneReturn from './models/returns/load-scene-return';
import CanvasRenderer from './graphics/renderer/canvas-renderer';
import { Logger } from './logging/logger';

export default abstract class Application {
    public static setType(type): void {
        window.addEventListener('DOMContentLoaded', (event) => {
            let applicationInstance = new type();
            applicationInstance.init();
        })
    }

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
    abstract onStart();

    /**
     * The main constructor.
     */
    constructor() {
        // Register systems.
        SystemManager.register(new CollisionSystem());
        SystemManager.register(new ScriptSystem());

        // Register components.
        ManagerFactory.register(TagComponent.name, new TagComponentManager());
        ManagerFactory.register(TransformComponent.name, new TransformComponentManager);
        ManagerFactory.register(CameraComponent.name, new CameraComponentManager());
        ManagerFactory.register(MaterialComponent.name, new MaterialComponentManager());
        ManagerFactory.register(SpriteRendererComponent.name, new SpriteRendererComponentManager());
        ManagerFactory.register(ColliderComponent.name, new ColliderComponentManager());
        ManagerFactory.register(ImageComponent.name, new ImageComponentManager());
        ManagerFactory.register(ScriptComponent.name, new ScriptComponentManager());
        ManagerFactory.register(TilemapComponent.name, new TilemapComponentManager());

        Logger.info(`Registered ${ManagerFactory.managers.size} manager(s)`, Application.name);
        Logger.data('Registered manager(s)', ManagerFactory.managers);
    }

    /**
     * Actually begins the game instance. Processes the configuration.
     * 
     * @author NSSure
     * @since 11/8/2020
     */
    public async init(renderType?: string): Promise<void> {
        Logger.info('Started initializing application', Application.name);

        if (!renderType) {
            renderType = 'canvas';
        }

        let engineConfigPath: string = 'manifest.json';

        // Determines what base url to use for loading application resources (tileset, configurations, etc).
        const urlParams = new URLSearchParams(location.search);

        // Used in the editor.
        if (urlParams.has('baseUrl')) {
            Configuration.baseUrl = decodeURIComponent(urlParams.get('baseUrl'));
            engineConfigPath = `${Configuration.baseUrl}/${engineConfigPath}`;
        }

        // Load engine configuration.
        let engineConfig: Manifest = await (await fetch(engineConfigPath).catch(this.handleLoadError)).json();

        // Load the first scene and init the renderer with the default scene and tilesets.
        SceneManager.load(engineConfig.scenes[0]).then((loadSceneRtn: LoadSceneReturn) => {
            if (renderType === 'webgl') {
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

    private handleLoadError(response): Response {
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