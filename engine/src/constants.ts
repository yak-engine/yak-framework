import CameraComponent from "./components/camera/CameraComponent";
import ColliderComponent from "./components/collider/ColliderComponent";
import ImageComponent from "./components/image/ImageComponent";
import MaterialComponent from "./components/material/MaterialComponent";
import SpriteRendererComponent from "./components/sprite-renderer/SpriteRendererComponent";
import TagComponent from "./components/tag/TagComponent";
import TilemapComponent from "./components/tilemap/TilemapComponent";
import TransformComponent from "./components/transform/TransformComponent";

export default class Constants {
    public static componentNames: string[] = [
        TagComponent.name, 
        TransformComponent.name, 
        SpriteRendererComponent.name, 
        TilemapComponent.name,
        MaterialComponent.name, 
        ColliderComponent.name, 
        CameraComponent.name,
        ImageComponent.name
    ];
}