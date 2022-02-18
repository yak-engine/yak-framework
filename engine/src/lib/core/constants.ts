import { TagComponent } from '../scene/components';
import { TransformComponent } from '../scene/components';
import { SpriteRendererComponent } from '../scene/components';
import { MaterialComponent } from '../scene/components';
import { ColliderComponent } from '../scene/components';
import { CameraComponent } from '../scene/components';
import { ImageComponent } from '../scene/components';
import { ScriptComponent } from '../scene/components';

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