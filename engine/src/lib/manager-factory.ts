
// Bulk components/manager imports.
import { TagComponent } from 'src/lib/components/TagComponent';
import { TransformComponent } from 'src/lib/components/TransformComponent';
import { SpriteRendererComponent } from 'src/lib/components/SpriteRendererComponent';
import { MaterialComponent } from 'src/lib/components/MaterialComponent';
import { ColliderComponent } from 'src/lib/components/ColliderComponent';
import { CameraComponent } from 'src/lib/components/CameraComponent';
import { ImageComponent } from 'src/lib/components/ImageComponent';
import { ScriptComponent } from 'src/lib/components/ScriptComponent';
import { TilemapComponent } from 'src/lib/components/TilemapComponent';

import { ComponentManager } from './component-manager';

export default class ManagerFactory {
    public static managers: Map<any, any> = new Map();

    constructor() {

    }

    public static bootstrap(): void {
        ManagerFactory.register(TagComponent.name, new ComponentManager<TagComponent>());
        ManagerFactory.register(TransformComponent.name, new ComponentManager<TransformComponent>());
        ManagerFactory.register(CameraComponent.name, new ComponentManager<CameraComponent>());
        ManagerFactory.register(MaterialComponent.name, new ComponentManager<MaterialComponent>());
        ManagerFactory.register(SpriteRendererComponent.name, new ComponentManager<SpriteRendererComponent>());
        ManagerFactory.register(ColliderComponent.name, new ComponentManager<ColliderComponent>());
        ManagerFactory.register(ImageComponent.name, new ComponentManager<ImageComponent>());
        ManagerFactory.register(ScriptComponent.name, new ComponentManager<ScriptComponent>());
        ManagerFactory.register(TilemapComponent.name, new ComponentManager<TilemapComponent>());
    }

    // TODO: Add type contraints.
    public static register(componentName: string, componentManagerInstance: any): void {
        if (!ManagerFactory.managers.has(componentName)) {
            ManagerFactory.managers.set(componentName, componentManagerInstance);
        }
    }

    public static get<TComponentManager>(componentName: string): TComponentManager {
        console.log(componentName);

        if (ManagerFactory.managers.has(componentName)) {
            return ManagerFactory.managers.get(componentName);
        }

        throw `Manager has not been registered: ${componentName}`;
    }

    public static log(): void {
        ManagerFactory.managers.forEach((manager) => console.log(manager));
    }
}