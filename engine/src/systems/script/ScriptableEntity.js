/**
 * User inherits this on the script classes.
 */
var ScriptableEntity = /** @class */ (function () {
    function ScriptableEntity() {
    }
    /**
     * Executed when the script instance is created.
     */
    ScriptableEntity.prototype.onCreate = function () { };
    ;
    /**
     * Executed every iteration of the main loop.
     */
    ScriptableEntity.prototype.update = function () { };
    ;
    /**
     * Fires when the entity has a trigger collider and interacts with another collider.
     * @param entity The entity that fired the enter trigger.
     */
    ScriptableEntity.prototype.onTriggerEnter = function (entity) { };
    ;
    /**
     * Fires when the entity has a trigger collider and interacts with another collider.
     * @param entity The entity the fire the leave trigger.
     */
    ScriptableEntity.prototype.onTriggerLeave = function (entity) { };
    ;
    /**
     * Fires when the entity has a trigger collider and interacts with another collider.
     * @param entity The entity that fired the stay trigger.
     */
    ScriptableEntity.prototype.onTriggerStay = function (entity) { };
    ;
    /**
     * Adds a new component to the entity associated with the script.
     * @param component The component to add to the entity.
     */
    ScriptableEntity.prototype.addComponent = function (component) {
        this.entity.addComponent(component);
    };
    /**
     * Gets a component of the specified type from the entity associated with the script. If no component is found then
     * null will be return.
     *
     * @param componentType The component type to get from the entity.
     * @returns The instance of the component.
     */
    ScriptableEntity.prototype.getComponent = function (componentType) {
        return this.entity.getComponent(componentType);
    };
    return ScriptableEntity;
}());
export default ScriptableEntity;
