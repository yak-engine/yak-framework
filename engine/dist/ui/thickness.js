var Thickness = /** @class */ (function () {
    function Thickness(left, top, right, bottom) {
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    Thickness.prototype.set = function (left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    };
    Thickness.prototype.setX = function (left, right) {
        this.left = left;
        this.right = right;
    };
    Thickness.prototype.setY = function (top, bottom) {
        this.top = top;
        this.bottom = bottom;
    };
    Thickness.prototype.setLeft = function (value) {
        this.left = value;
    };
    Thickness.prototype.setTop = function (value) {
        this.top = value;
    };
    Thickness.prototype.setRight = function (value) {
        this.right = value;
    };
    Thickness.prototype.setBottom = function (value) {
        this.bottom = value;
    };
    return Thickness;
}());
export default Thickness;
//# sourceMappingURL=thickness.js.map