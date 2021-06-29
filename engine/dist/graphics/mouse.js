/**
 * Tracks mouse input only. For keyboard input use Input.
 */
var Mouse = /** @class */ (function () {
    function Mouse() {
        var _this = this;
        window.addEventListener('mousedown', function (event) { return _this.onMouseDown(event); });
        window.addEventListener('mouseup', function (event) { return _this.onMouseUp(event); });
    }
    Mouse.prototype.onMouseDown = function (event) {
        Mouse.buttons.set(event.button, true);
    };
    Mouse.prototype.onMouseUp = function (event) {
        if (Mouse.buttons.has(event.button)) {
            Mouse.buttons.set(event.button, false);
        }
    };
    Mouse.isPressed = function (button) {
        if (!Mouse.buttons.has(button)) {
            return false;
        }
        return Mouse.buttons.get(button);
    };
    Mouse.update = function (mousePosition) {
        if (this.lastMousePosition) {
            this.xDiff = mousePosition.x - this.lastMousePosition.x;
            this.yDiff = mousePosition.y - this.lastMousePosition.y;
        }
        this.lastMousePosition = mousePosition;
    };
    Mouse.buttons = new Map();
    Mouse.xDiff = 0;
    Mouse.yDiff = 0;
    Mouse.lastMousePosition = null;
    return Mouse;
}());
export default Mouse;
//# sourceMappingURL=mouse.js.map