import ScriptComponent from "./components/ScriptComponent";
var ComponentManager = /** @class */ (function () {
    function ComponentManager() {
        /**
         * The component instance for the specific manager that inherits the component manager. For example
         * if the TagComponentManager is the inherting then this will contain all of the tag component instances.
         */
        this.instances = [];
        /**
         * The component instance for the specific manager that inherits the component manager. For example
         * if the TagComponentManager is the inherting then this will contain all of the tag component instances.
         */
        this.entities = [];
        /**
         * Contains a map between the id of an entity and all its associated component types.
         */
        this.map = {};
    }
    /**
     * Trys to add the instance of a component to an entity. If the component already exists for the entity and exception will be thrown.
     * Note that the entities may have multiple instances of the script component.
     * @param entity The entity to associated the component instance with.
     * @param componentInstance The component instance to associate with the entity.
     */
    ComponentManager.prototype.addComponentInstance = function (entity, componentInstance) {
        if (this.map[entity.id]) {
            // Entities are allowed to have multiple script component instances so the duplicate component check does not apply to instances of the script type.
            if (typeof componentInstance !== typeof ScriptComponent) {
                console.error(componentInstance);
                throw "[" + componentInstance.constructor.name + "]: You can't not have multiple component of the same type on entity unless that component is a script.";
            }
        }
        else {
            this.entities.push(entity);
        }
        // Store the component instance within the current manager.
        this.instances.push(componentInstance);
        this.map[entity.id] = this.instances.length - 1;
    };
    ComponentManager.prototype.getInstance = function (entity) {
        var index = this.map[entity.id];
        if (index || index === 0) {
            return this.instances[index];
        }
        return null;
    };
    /**
     * Dispose of the entity reference and any related data. Called when an entity is destroyed.
     * @param entity The entity to dispose of the references for.
     */
    ComponentManager.prototype.dispose = function (entity) {
        if (this.constructor.name === 'ScriptComponentManager') {
            console.log(this);
        }
        if (this.map[entity.id]) {
            this.instances.splice(this.map[entity.id]);
            delete this.map[entity.id];
            var entityIndex = this.entities.findIndex(function (x) { return x.id === entity.id; });
            if (entityIndex !== -1) {
                this.entities.splice(entityIndex, 1);
            }
            console.log(this);
        }
    };
    return ComponentManager;
}());
export default ComponentManager;
