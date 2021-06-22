import Entity from "../../components/entity";
import ManagerFactory from "../../components/ManagerFactory";
import ScriptComponent from "../../components/script/ScriptComponent";
import ScriptComponentManager from "../../components/script/ScriptComponentManager";
import System from "../system";

export default class ScriptSystem extends System {
    public name: string = 'script';

    public update(): void {
        let scriptComponentManager = ManagerFactory.get(ScriptComponent.name) as ScriptComponentManager;

        scriptComponentManager.entities.forEach((entity) => {
            let scriptComponent = scriptComponentManager.getInstance(entity) as ScriptComponent;

            if (!scriptComponent.instance) {
                scriptComponent.instance = new scriptComponent.scritableEntity();
                scriptComponent.instance.onCreate();
            }

            scriptComponent.instance.update();
        });
    }

    dispose(entity: Entity): void {
        
    }
}