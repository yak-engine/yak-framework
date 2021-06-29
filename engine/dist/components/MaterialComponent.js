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
var MaterialComponent = /** @class */ (function (_super) {
    __extends(MaterialComponent, _super);
    function MaterialComponent(fillStyle, alpha) {
        var _this = _super.call(this) || this;
        _this.alpha = 1;
        _this.fillStyle = fillStyle;
        _this.alpha = alpha;
        return _this;
    }
    return MaterialComponent;
}(Component));
export default MaterialComponent;
//# sourceMappingURL=MaterialComponent.js.map