import { ScriptComponentManager } from 'lib/components/managers/ScriptComponentManager';
import { ScriptComponent } from 'lib/components/ScriptComponent';
import { Entity } from 'lib/models/entity';

import { ManagerFactory } from 'lib/core/manager-factory';
import { System } from 'lib/systems/system';

export class ScriptSystem extends System {
    public name: string = 'script';

    public update(): void {
        let scriptComponentManager = ManagerFactory.get(ScriptComponent.name) as ScriptComponentManager;

        scriptComponentManager.entities.forEach((entity: Entity) => {
            let scriptComponent = scriptComponentManager.getInstance(entity) as ScriptComponent;

            if (!scriptComponent.instance) {
                scriptComponent.instance = new (<any>scriptComponent).scritableEntity();
                scriptComponent.instance.onCreate();
            }

            scriptComponent.instance.update();
        });
    }

    dispose(entity: Entity): void {
        
    }
}