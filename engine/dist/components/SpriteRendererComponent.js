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
var SpriteRendererComponent = /** @class */ (function (_super) {
    __extends(SpriteRendererComponent, _super);
    function SpriteRendererComponent(layer, tilesetIndex, row, column) {
        var _this = _super.call(this) || this;
        _this.layer = layer;
        _this.tilesetIndex = tilesetIndex;
        _this.row = row;
        _this.column = column;
        return _this;
    }
    return SpriteRendererComponent;
}(Component));
export default SpriteRendererComponent;
//# sourceMappingURL=SpriteRendererComponent.js.map