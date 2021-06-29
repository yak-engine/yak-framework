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
import Point from "../primitives/point";
import Component from "./component";
var ColliderComponent = /** @class */ (function (_super) {
    __extends(ColliderComponent, _super);
    function ColliderComponent(transform, isTrigger) {
        var _this = _super.call(this) || this;
        _this.transform = transform;
        _this.isTrigger = isTrigger;
        _this.points = new Array();
        _this.transform = transform;
        _this.isTrigger = isTrigger;
        // Top left.
        _this.points.push(new Point(transform.x, transform.y));
        // Top right.
        _this.points.push(new Point(transform.x + transform.width, transform.y));
        // Bottom left.
        _this.points.push(new Point(transform.x, transform.y + transform.height));
        // Bottom right.
        _this.points.push(new Point(transform.x + transform.width, transform.y + transform.height));
        return _this;
    }
    return ColliderComponent;
}(Component));
export default ColliderComponent;
//# sourceMappingURL=ColliderComponent.js.map