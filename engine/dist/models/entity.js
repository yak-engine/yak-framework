import ManagerFactory from "../manager-factory";
import ScriptComponent from "../components/ScriptComponent";
/**
 * Base object class used for sprites, colliders, primitives, etc. Contains
 * shared code common across most classes.
 *
 * @author NSSure
 * @since 11/8/2020
 */
var Entity = /** @class */ (function () {
    function Entity() {
        /**
         * Generates a unique 12 character ID for each entity.
         */
        // id: string = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 12);
        this.id = ''; // Refactored to number for ECS.
        /**
         * Determines if the entity should be rendered.
         */
        this.enabled = true;
    }
    Entity.prototype.addComponent = function (componentInstance) {
        var manager = ManagerFactory.get(componentInstance.constructor.name);
        manager.addComponentInstance(this, componentInstance);
    };
    Entity.prototype.getComponent = function (componenType) {
        if (componenType.name === ScriptComponent.name) {
            throw "Getting script components is not currently supported.";
        }
        var manager = ManagerFactory.get(componenType.name);
        return manager.instances[manager.map[this.id]];
    };
    Entity.prototype.getScriptInstances = function () {
        // let scriptManager = ManagerFactory.get(ScriptComponent.name) as ScriptComponentManager;
        // if (scriptManager.map.has(this.id)) {
        //     console.log(scriptManager.instances.filter(x => scriptManager.map.get(this.id).includes(x.id)));
        //     // TODO: This will not work for script components.
        //     return scriptManager.instances.filter(x => scriptManager.map.get(this.id).includes(x.id)) as ScriptComponent[];
        // }
        return [];
    };
    return Entity;
}());
export default Entity;
//# sourceMappingURL=entity.js.map