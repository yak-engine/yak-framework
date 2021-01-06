import Entity from "../../components/entity";
import ManagerFactory from "../../components/ManagerFactory";
import ScriptComponent from "../../components/script/ScriptComponent";
import ScriptComponentManager from "../../components/script/ScriptComponentManager";
import System from "../system";

export default class ScriptSystem extends System {
    public name: string = 'script-system';

    disposeEntityRefs(entity: Entity): void {
        
    }

    public update(): void {
        let manager: ScriptComponentManager = ManagerFactory.get(ScriptComponent.name);

        manager.entities.forEach((entity: Entity) => {
            let componentIds: number[] = manager.entityDataMap.get(entity.id);

            componentIds.forEach((componentId: number) => {
                let scriptComponent: ScriptComponent = manager.components.find(x => x.id === componentId) as ScriptComponent;

                if (!scriptComponent.scriptableEntityInstance) {
                    scriptComponent.scriptableEntityInstance = new scriptComponent.scritableEntity();
                    scriptComponent.scriptableEntityInstance.entity = entity;
    
                    scriptComponent.scriptableEntityInstance.onCreate();
                }
    
                scriptComponent.scriptableEntityInstance.update();
            });
        });
    }

    public draw(): void {
        return;
    }
}