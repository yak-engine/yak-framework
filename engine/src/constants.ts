import CameraComponent from "./components/camera/CameraComponent";
import ColliderComponent from "./components/collider/ColliderComponent";
import Component from "./components/Component";
import ImageComponent from "./components/image/ImageComponent";
import MaterialComponent from "./components/material/MaterialComponent";
import SpriteRendererComponent from "./components/sprite-renderer/SpriteRendererComponent";
import TagComponent from "./components/tag/TagComponent";
import TransformComponent from "./components/transform/TransformComponent";

export default class Constants {
    public static componentTypes: typeof Component[] = [
        TagComponent,
        TransformComponent,
        SpriteRendererComponent,
        MaterialComponent,
        ColliderComponent,
        CameraComponent,
        ImageComponent
    ]
}