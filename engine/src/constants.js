import CameraComponent from "./components/CameraComponent";
import ColliderComponent from "./components/ColliderComponent";
import ImageComponent from "./components/ImageComponent";
import MaterialComponent from "./components/MaterialComponent";
import ScriptComponent from "./components/ScriptComponent";
import SpriteRendererComponent from "./components/SpriteRendererComponent";
import TagComponent from "./components/TagComponent";
import TransformComponent from "./components/TransformComponent";
var Constants = /** @class */ (function () {
    function Constants() {
    }
    /**
     * The types of all of the available components.
     */
    Constants.componentTypes = [
        TagComponent,
        TransformComponent,
        SpriteRendererComponent,
        MaterialComponent,
        ColliderComponent,
        CameraComponent,
        ImageComponent,
        ScriptComponent
    ];
    /**
     * Valid characters.
     */
    Constants.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Constants;
}());
export default Constants;
