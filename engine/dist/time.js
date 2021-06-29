var Time = /** @class */ (function () {
    function Time() {
    }
    Time.calculateDeltaTime = function (time) {
        if (!Time.lastTimestamp) {
            Time.lastTimestamp = time;
            Time.fps = 0;
            return;
        }
        Time.deltaTime = (time - Time.lastTimestamp) / 1000;
        Time.lastTimestamp = time;
        Time.fps = 1 / Time.deltaTime;
    };
    Time.lastTimestamp = performance.now();
    return Time;
}());
export default Time;
//# sourceMappingURL=time.js.map