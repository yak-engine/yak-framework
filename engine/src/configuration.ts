import CameraComponent from "./components/camera/CameraComponent";
import CameraComponentManager from "./components/camera/CameraComponentManager";
import ColliderComponent from "./components/collider/ColliderComponent";
import ColliderComponentManager from "./components/collider/ColliderComponentManager";
import ImageComponent from "./components/image/ImageComponent";
import ImageComponentManager from "./components/image/ImageComponentManager";
import ManagerFactory from "./components/ManagerFactory";
import MaterialComponent from "./components/material/MaterialComponent";
import MaterialComponentManager from "./components/MaterialComponentManager";
import SpriteRendererComponent from "./components/sprite-renderer/SpriteRendererComponent";
import SpriteRendererComponentManager from "./components/sprite-renderer/SpriteRendererComponentManager";
import TagComponent from "./components/tag/TagComponent";
import TagComponentManager from "./components/tag/TagComponentManager";
import TilemapComponent from "./components/tilemap/TilemapComponent";
import TilemapComponentManager from "./components/tilemap/TilemapComponentManager";
import TransformComponent from "./components/transform/TransformComponent";
import TransformComponentManager from "./components/transform/TransformComponentManager";
import EngineConfig from "./engine-config";

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
    public static engineConfig: EngineConfig = null;

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

    public static RegisterManagers(): void {
        ManagerFactory.register(TagComponent.name, TagComponentManager);
        ManagerFactory.register(TransformComponent.name, TransformComponentManager);
        ManagerFactory.register(CameraComponent.name, CameraComponentManager);
        ManagerFactory.register(MaterialComponent.name, MaterialComponentManager);
        ManagerFactory.register(SpriteRendererComponent.name, SpriteRendererComponentManager);
        ManagerFactory.register(TilemapComponent.name, TilemapComponentManager);
        ManagerFactory.register(ColliderComponent.name, ColliderComponentManager);
        ManagerFactory.register(ImageComponent.name, ImageComponentManager);
    }
}