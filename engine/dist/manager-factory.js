var ManagerFactory = /** @class */ (function () {
    function ManagerFactory() {
    }
    ManagerFactory.register = function (componentType, manager) {
        if (!ManagerFactory.managers.has(componentType.name)) {
            var managerInstance = new manager();
            ManagerFactory.managers.set(componentType.name, managerInstance);
        }
    };
    ManagerFactory.get = function (componentName) {
        if (ManagerFactory.managers.has(componentName)) {
            return ManagerFactory.managers.get(componentName);
        }
        throw "Manager has not been registered: " + componentName;
    };
    ManagerFactory.log = function () {
        ManagerFactory.managers.forEach(function (manager) { return console.log(manager); });
    };
    ManagerFactory.managers = new Map();
    return ManagerFactory;
}());
export default ManagerFactory;
//# sourceMappingURL=manager-factory.js.map