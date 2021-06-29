var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import ManagerFactory from "../../manager-factory";
import ScriptComponent from "../../components/ScriptComponent";
import System from "../system";
var ScriptSystem = /** @class */ (function (_super) {
    __extends(ScriptSystem, _super);
    function ScriptSystem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'script';
        return _this;
    }
    ScriptSystem.prototype.update = function () {
        var scriptComponentManager = ManagerFactory.get(ScriptComponent.name);
        scriptComponentManager.entities.forEach(function (entity) {
            var scriptComponent = scriptComponentManager.getInstance(entity);
            if (!scriptComponent.instance) {
                scriptComponent.instance = new scriptComponent.scritableEntity();
                scriptComponent.instance.onCreate();
            }
            scriptComponent.instance.update();
        });
    };
    ScriptSystem.prototype.dispose = function (entity) {
    };
    return ScriptSystem;
}(System));
export default ScriptSystem;
//# sourceMappingURL=ScriptSystem.js.map