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
import Component from "./component";
var ScriptComponent = /** @class */ (function (_super) {
    __extends(ScriptComponent, _super);
    function ScriptComponent(scritableEntity) {
        var _this = _super.call(this) || this;
        _this.scritableEntity = scritableEntity;
        return _this;
    }
    return ScriptComponent;
}(Component));
export default ScriptComponent;
//# sourceMappingURL=ScriptComponent.js.map