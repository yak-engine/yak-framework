var SystemManager = /** @class */ (function () {
    function SystemManager() {
    }
    SystemManager.register = function (system) {
        if (SystemManager.systems.findIndex(function (x) { return x.name === system.name; }) === -1) {
            SystemManager.systems.push(system);
        }
    };
    SystemManager.get = function (systemName) {
        return SystemManager.systems.find(function (x) { return x.name === systemName; });
    };
    SystemManager.systems = [];
    return SystemManager;
}());
export default SystemManager;
//# sourceMappingURL=system-manager.js.map