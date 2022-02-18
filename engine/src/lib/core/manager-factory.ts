
// Bulk scene/manager imports.
import { TagComponent } from '../scene/components';
import { TransformComponent } from '../scene/components';
import { SpriteRendererComponent } from '../scene/components';
import { MaterialComponent } from '../scene/components';
import { ColliderComponent } from '../scene/components';
import { CameraComponent } from '../scene/components';
import { ImageComponent } from '../scene/components';
import { ScriptComponent } from '../scene/components';
import { TilemapComponent } from '../scene/components';
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