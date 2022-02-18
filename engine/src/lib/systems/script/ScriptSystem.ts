// import { ScriptComponentManager } from 'components/managers/ScriptComponentManager';
import { ScriptComponent } from '../../scene/components';
import { Entity } from '../../scene/entity';

import { ManagerFactory } from '../../core/manager-factory';
import { System } from '../system';

export class ScriptSystem extends System {
    public name: string = 'script';

    public update(): void {
        // let scriptComponentManager = ManagerFactory.get(ScriptComponent.name) as ScriptComponentManager;

        // scriptComponentManager.entities.forEach((entity: Entity) => {
        //     let scriptComponent = scriptComponentManager.getInstance(entity) as ScriptComponent;

        //     if (!scriptComponent.instance) {
        //         scriptComponent.instance = new (<any>scriptComponent).scritableEntity();
        //         scriptComponent.instance.onCreate();
        //     }

        //     scriptComponent.instance.update();
        // });
    }

    dispose(entity: Entity): void {
        
    }
}