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
import Entity from "../models/entity";
import Thickness from "./thickness";
var UIFragment = /** @class */ (function (_super) {
    __extends(UIFragment, _super);
    function UIFragment(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.backgroundColor = 'transparent';
        _this.padding = new Thickness();
        _this.margin = new Thickness();
        _this.isInteractive = false;
        _this.isHovered = false;
        return _this;
        // this.transform.x = x;
        // this.transform.y = y;
        // this.transform.width = width;
        // this.transform.height = height;
    }
    return UIFragment;
}(Entity));
export default UIFragment;
//# sourceMappingURL=ui-base.js.map