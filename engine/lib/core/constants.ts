import { TagComponent } from 'lib/components/TagComponent';
import { TransformComponent } from 'lib/components/TransformComponent';
import { SpriteRendererComponent } from 'lib/components/SpriteRendererComponent';
import { MaterialComponent } from 'lib/components/MaterialComponent';
import { ColliderComponent } from 'lib/components/ColliderComponent';
import { CameraComponent } from 'lib/components/CameraComponent';
import { ImageComponent } from 'lib/components/ImageComponent';
import { ScriptComponent } from 'lib/components/ScriptComponent';

export class YakConstants {
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