var Camera = /** @class */ (function () {
    function Camera() {
        this.orthographicSize = 5;
    }
    Camera.prototype.isClampedX = function () {
        if (this.viewport.x >= this.max.x / 2 || this.viewport.x === 0) {
            return true;
        }
        return false;
    };
    Camera.prototype.isClampedY = function () {
        if (this.viewport.y >= this.max.y / 2 || this.viewport.y === 0) {
            return true;
        }
        return false;
    };
    Camera.prototype.update = function () {
    };
    return Camera;
}());
export default Camera;
//# sourceMappingURL=camera.js.map