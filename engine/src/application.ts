import Time from './time';
import Input from './graphics/input';
import CollisionSystem from './systems/collision/collision-system';
import SceneManager from './scene-manager';
import Configuration from './configuration';
import SystemManager from './systems/system-manager';
import ManagerFactory from './components/ManagerFactory';
import TagComponent from './components/tag/TagComponent';
import TransformComponent from './components/transform/TransformComponent';
import CameraComponent from './components/camera/CameraComponent';
import MaterialComponent from './components/material/MaterialComponent';
import SpriteRendererComponent from './components/sprite-renderer/SpriteRendererComponent';
import ColliderComponent from './components/collider/ColliderComponent';
import ImageComponent from './components/image/ImageComponent';
import ImageComponentManager from './components/image/ImageComponentManager';
import ColliderComponentManager from './components/collider/ColliderComponentManager';
import SpriteRendererComponentManager from './components/sprite-renderer/SpriteRendererComponentManager';
import CameraComponentManager from './components/camera/CameraComponentManager';
import TransformComponentManager from './components/transform/TransformComponentManager';
import TagComponentManager from './components/tag/TagComponentManager';
import ApplicationConfig from './models/application-config';
import MaterialComponentManager from './components/material/MaterialComponentManager';
import ScriptSystem from './systems/script/ScriptSystem';
import ScriptComponent from './components/script/ScriptComponent';
import ScriptComponentManager from './components/script/ScriptComponentManager';
import WebGLRenderer from './graphics/renderer/webgl-renderer';
import BaseRenderer from './graphics/renderer/base-renderer';
import LoadSceneReturn from './models/load-scene-return';
import CanvasRenderer from './graphics/renderer/canvas-renderer';
import Mouse from './graphics/mouse';

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
    abstract onStart();

    /**
     * The main constructor.
     */
    constructor() {
        // Register systems.
        SystemManager.register(new CollisionSystem());
        SystemManager.register(new ScriptSystem());

        // Register components.
        ManagerFactory.register(TagComponent, TagComponentManager);
        ManagerFactory.register(TransformComponent, TransformComponentManager);
        ManagerFactory.register(CameraComponent, CameraComponentManager);
        ManagerFactory.register(MaterialComponent, MaterialComponentManager);
        ManagerFactory.register(SpriteRendererComponent, SpriteRendererComponentManager);
        ManagerFactory.register(ColliderComponent, ColliderComponentManager);
        ManagerFactory.register(ImageComponent, ImageComponentManager);
        ManagerFactory.register(ScriptComponent, ScriptComponentManager);
    }

    /**
     * Actually begins the game instance. Processes the configuration.
     * 
     * @author NSSure
     * @since 11/8/2020
     */
    public async start(renderType?: string): Promise<void> {
        if (!renderType) {
            renderType = 'canvas';
        }

        let engineConfigPath: string = 'application-config.json';

        // Determines what base url to use for loading application resources (tileset, configurations, etc).
        const urlParams = new URLSearchParams(location.search);

        // Used in the editor.
        if (urlParams.has('baseUrl')) {
            Configuration.baseUrl = decodeURIComponent(urlParams.get('baseUrl'));
            engineConfigPath = `${Configuration.baseUrl}/${engineConfigPath}`;
        }

        // Load engine configuration.
        let engineConfig: ApplicationConfig = await (await fetch(engineConfigPath).catch(this.handleLoadError)).json();

        // Load the first scene and init the renderer with the default scene and tilesets.
        let loadSceneRtn: LoadSceneReturn = await SceneManager.load(engineConfig.scenes[0]);

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
    mainLoop(time: number) {
        // Update peripheral data (time, mouse, etc) for use within the render systems.
        Time.calculateDeltaTime(time);
        // Mouse.update(this.renderer.mousePosition);

        // Iterate through any registered systems and execute the update method for each system.
        SystemManager.systems.forEach((system: any) => {
            system.update();
        });

        // Execute the draw method within the renderer.
        this.renderer.draw();

        // Request a new animation frame.
        window.requestAnimationFrame((time: number) => this.mainLoop(time));
    }
}