
// Bulk components/manager imports.
import { TagComponent } from 'lib/components/TagComponent';
import { TransformComponent } from 'lib/components/TransformComponent';
import { SpriteRendererComponent } from 'lib/components/SpriteRendererComponent';
import { MaterialComponent } from 'lib/components/MaterialComponent';
import { ColliderComponent } from 'lib/components/ColliderComponent';
import { CameraComponent } from 'lib/components/CameraComponent';
import { ImageComponent } from 'lib/components/ImageComponent';
import { ScriptComponent } from 'lib/components/ScriptComponent';
import { TilemapComponent } from 'lib/components/TilemapComponent';

import { ComponentManager } from './component-manager';

export class ManagerFactory {
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