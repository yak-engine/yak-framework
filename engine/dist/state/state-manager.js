var StateManager = /** @class */ (function () {
    function StateManager() {
    }
    StateManager.commit = function (key, value) {
        StateManager.data.set(key, value);
    };
    StateManager.get = function (key) {
        if (StateManager.data.has(key)) {
            return StateManager.data.get(key);
        }
        return null;
    };
    StateManager.exists = function (key) {
        return StateManager.data.has(key);
    };
    StateManager.delete = function (key) {
        if (StateManager.data.has(key)) {
            StateManager.data.delete(key);
        }
    };
    StateManager.data = new Map();
    return StateManager;
}());
export default StateManager;
//# sourceMappingURL=state-manager.js.map