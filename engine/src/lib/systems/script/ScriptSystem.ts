import { ScriptComponentManager } from 'src/lib/components/managers/ScriptComponentManager';
import { ScriptComponent } from 'src/lib/components/ScriptComponent';
import { Entity } from 'src/lib/models/entity';

import ManagerFactory from 'src/lib/manager-factory';
import { System } from 'src/lib/systems/system';

export default class ScriptSystem extends System {
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