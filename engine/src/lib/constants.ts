import { TagComponent } from 'src/lib/components/TagComponent';
import { TransformComponent } from 'src/lib/components/TransformComponent';
import { SpriteRendererComponent } from 'src/lib/components/SpriteRendererComponent';
import { MaterialComponent } from 'src/lib/components/MaterialComponent';
import { ColliderComponent } from 'src/lib/components/ColliderComponent';
import { CameraComponent } from 'src/lib/components/CameraComponent';
import { ImageComponent } from 'src/lib/components/ImageComponent';
import { ScriptComponent } from 'src/lib/components/ScriptComponent';

export default class Constants {
    /**
     * The types of all of the available components.
     */
    public static componentTypes: any[] = [
        TagComponent,
        TransformComponent,
        SpriteRendererComponent,
        MaterialComponent,
        ColliderComponent,
        CameraComponent,
        ImageComponent,
        ScriptComponent
    ];
}