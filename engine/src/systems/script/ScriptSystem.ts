import ManagerFactory from "../../components/ManagerFactory";
import ScriptComponent from "../../components/script/ScriptComponent";
import ScriptComponentManager from "../../components/script/ScriptComponentManager";
import System from "../system";

export default class ScriptSystem extends System {
    public name: string = 'script-system';

    public update(): void {
        let scriptComponentManager: ScriptComponentManager = ManagerFactory.get(ScriptComponent.name);

        scriptComponentManager.data.forEach((scriptComponent: ScriptComponent) => {
            if (!scriptComponent.scriptableEntityInstance) {
                scriptComponent.scriptableEntityInstance = new scriptComponent.scritableEntity();
                scriptComponent.scriptableEntityInstance.entity = scriptComponentManager.entities.find(x => x.id === scriptComponentManager.dataEntityMap.get(scriptComponent.id));
                scriptComponent.scriptableEntityInstance.onCreate();
            }

            scriptComponent.scriptableEntityInstance.update();
        });
    }

    public draw(): void {
        return;
    }
}