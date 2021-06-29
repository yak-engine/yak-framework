var Transform = /** @class */ (function () {
    function Transform(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Transform.prototype.getScreenX = function (camera) {
        return this.x - camera.viewport.x;
    };
    // clampX(min: number, maxLowerRange: number, maxUpperRange: number): void {
    //     this.x = Math.max(min, Math.min(maxLowerRange, maxUpperRange));  
    // }
    Transform.prototype.clampX = function (min, max) {
        if (this.x < min) {
            this.x = min;
            return true;
        }
        if (this.x > max) {
            this.x = max;
            return true;
        }
    };
    Transform.prototype.clampY = function (min, max) {
        if (this.y <= min) {
            this.y = min;
            return true;
        }
        if (this.y >= max) {
            this.y = max;
            return true;
        }
    };
    Transform.prototype.offsetX = function () {
        return this.x + this.width;
    };
    Transform.prototype.offsetY = function () {
        return this.y + this.height;
    };
    Transform.prototype.lerp = function (startValue, endValue, amount) {
        amount = amount < 0 ? 0 : amount;
        amount = amount > 1 ? 1 : amount;
        return startValue + (endValue - startValue) * amount;
    };
    Object.defineProperty(Transform, "empty", {
        /**
         * Returns a new empty transform object. Meaning the x, y, width, and height
         * values are all zero.
         *
         * @author NSSure
         * @since 11/12/2020
         */
        get: function () {
            return new Transform(0, 0, 0, 0);
        },
        enumerable: false,
        configurable: true
    });
    return Transform;
}());
export default Transform;
//# sourceMappingURL=transform.js.map