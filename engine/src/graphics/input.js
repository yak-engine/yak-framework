import Time from "../time";
/**
 * Tracks keyboard input only. For mouse input use Mouse.
 */
var Input = /** @class */ (function () {
    function Input() {
        var _this = this;
        window.addEventListener('keydown', function (event) { return _this.onKeyDown(event); });
        window.addEventListener('keyup', function (event) { return _this.onKeyUp(event); });
    }
    Input.prototype.onKeyDown = function (event) {
        Input.codes.set(event.code.toLowerCase(), true);
    };
    Input.prototype.onKeyUp = function (event) {
        if (Input.codes.has(event.code.toLowerCase())) {
            Input.codes.set(event.code.toLowerCase(), false);
        }
    };
    Input.isPressed = function (code) {
        if (!Input.codes.has(code.toLowerCase())) {
            return false;
        }
        return Input.codes.get(code.toLowerCase());
    };
    Input.horizontal = function () {
        var xDirection;
        if (Input.isPressed('keya')) {
            xDirection = -1;
        }
        else if (Input.isPressed('keyd')) {
            xDirection = 1;
        }
        else {
            xDirection = 0;
        }
        return xDirection;
    };
    Input.vertical = function () {
        var yDirection;
        if (Input.isPressed('keyw')) {
            yDirection = -1;
        }
        else if (Input.isPressed('keys')) {
            yDirection = 1;
        }
        else {
            yDirection = 0;
        }
        return yDirection * Time.deltaTime;
    };
    Input.codes = new Map();
    return Input;
}());
export default Input;
