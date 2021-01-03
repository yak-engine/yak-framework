import Renderer from './graphics/renderer';
import Time from './time';
import Input from './graphics/input';
import CollisionSystem from './systems/collision/collision-system';
import SceneManager from './scene-manager';
import Configuration from './configuration';
import Mouse from './graphics/mouse';
import SystemManager from './systems/system-manager';
import RenderSystem from './systems/render/render-system';
import ManagerFactory from './components/ManagerFactory';
import TagComponent from './components/tag/TagComponent';
import TransformComponent from './components/transform/TransformComponent';
import CameraComponent from './components/camera/CameraComponent';
import MaterialComponent from './components/material/MaterialComponent';
import SpriteRendererComponent from './components/sprite-renderer/SpriteRendererComponent';
import TilemapComponent from './components/tilemap/TilemapComponent';
import ColliderComponent from './components/collider/ColliderComponent';
import ImageComponent from './components/image/ImageComponent';
import ImageComponentManager from './components/image/ImageComponentManager';
import ColliderComponentManager from './components/collider/ColliderComponentManager';
import TilemapComponentManager from './components/tilemap/TilemapComponentManager';
import SpriteRendererComponentManager from './components/sprite-renderer/SpriteRendererComponentManager';
import CameraComponentManager from './components/camera/CameraComponentManager';
import TransformComponentManager from './components/transform/TransformComponentManager';
import TagComponentManager from './components/tag/TagComponentManager';
import EngineConfig from './engine-config';
import TilemapSystem from './systems/tilemap/TilemapSystem';
import MaterialComponentManager from './components/material/MaterialComponentManager';
import EntityManager from './components/EntityManager';
import ScriptSystem from './systems/script/ScriptSystem';
import ScriptComponent from './components/script/ScriptComponent';
import ScriptComponentManager from './components/script/ScriptComponentManager';

export default abstract class Application {
    /**
     * Contains the rendering functionality from the main loop.
     */
    renderer: Renderer = new Renderer();

    /**
     * The main input system.
     */
    input: Input;

    abstract onStart();

    /**
     * The main constructor.
     */
    constructor() {
        // Register systems.
        SystemManager.register(new TilemapSystem());
        SystemManager.register(new RenderSystem());
        SystemManager.register(new CollisionSystem());
        SystemManager.register(new ScriptSystem());

        // Register components.
        ManagerFactory.register(TagComponent.name, TagComponentManager);
        ManagerFactory.register(TransformComponent.name, TransformComponentManager);
        ManagerFactory.register(CameraComponent.name, CameraComponentManager);
        ManagerFactory.register(MaterialComponent.name, MaterialComponentManager);
        ManagerFactory.register(SpriteRendererComponent.name, SpriteRendererComponentManager);
        ManagerFactory.register(TilemapComponent.name, TilemapComponentManager);
        ManagerFactory.register(ColliderComponent.name, ColliderComponentManager);
        ManagerFactory.register(ImageComponent.name, ImageComponentManager);
        ManagerFactory.register(ScriptComponent.name, ScriptComponentManager);
    }

    /**
     * Actually begins the game instance. Processes the configuration.
     * 
     * @author NSSure
     * @since 11/8/2020
     */
    public async start(): Promise<void> {
        let engineConfigPath: string = 'engine-config.json';

        // Determines what base url to use for loading application resources (tileset, configurations, etc).
        const urlParams = new URLSearchParams(location.search);

        // Used in the editor.
        if (urlParams.has('baseUrl')) {
            Configuration.baseUrl = decodeURIComponent(urlParams.get('baseUrl'));
            engineConfigPath = `${Configuration.baseUrl}/${engineConfigPath}`;
        }

        // Load engine configuration.
        let engineConfig: EngineConfig = await (await fetch(engineConfigPath).catch(this.handleLoadError)).json();

        // Set the default scene on the renderer and initialize the renderer.
        this.renderer.scene = await SceneManager.load(engineConfig.scenes[0]);
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
        Mouse.update(this.renderer.mousePosition);

        // The main render loop.
        this.renderer.update();
        this.renderer.draw();

        // Request a new animation frame.
        window.requestAnimationFrame((time: number) => this.mainLoop(time));
    }
}

// document.addEventListener('DOMContentLoaded', (event) => {
//     let application = new Application();
//     application.start();
// })