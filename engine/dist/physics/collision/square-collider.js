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
import { Logger } from "../../logging/logger";
import Point from "../../primitives/Point";
import Collider from "./collider";
var SquareCollider = /** @class */ (function (_super) {
    __extends(SquareCollider, _super);
    function SquareCollider(transform) {
        var _this = _super.call(this, transform) || this;
        _this.points = new Array();
        // this.transform = transform;
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
    SquareCollider.prototype.onCollisionEnter = function () {
        Logger.info('Square collider trigger enter');
    };
    SquareCollider.prototype.onCollisionLeave = function () {
        Logger.info('Square collider trigger leave');
    };
    return SquareCollider;
}(Collider));
export default SquareCollider;
//# sourceMappingURL=square-collider.js.map