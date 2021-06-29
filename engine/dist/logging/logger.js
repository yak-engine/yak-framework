var LogThreshold;
(function (LogThreshold) {
    LogThreshold[LogThreshold["NONE"] = 0] = "NONE";
    LogThreshold[LogThreshold["DEBUG"] = 1] = "DEBUG";
    LogThreshold[LogThreshold["INFO"] = 2] = "INFO";
    LogThreshold[LogThreshold["ERROR"] = 3] = "ERROR";
    LogThreshold[LogThreshold["CRITICAL"] = 4] = "CRITICAL";
})(LogThreshold || (LogThreshold = {}));
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.debug = function (msg) {
        if (this.threshold != LogThreshold.DEBUG) {
            return;
        }
        console.log("[DEBUG]: " + msg);
    };
    Logger.info = function (msg) {
        if (this.threshold > LogThreshold.INFO) {
            return;
        }
        console.info("[INFO]: " + msg);
    };
    Logger.error = function (msg) {
        if (this.threshold > LogThreshold.ERROR) {
            return;
        }
        console.error("[ERROR]: " + msg);
    };
    Logger.critical = function (msg) {
        if (this.threshold > LogThreshold.CRITICAL) {
            return;
        }
        console.error("[CRITICAL]: " + msg);
    };
    Logger.data = function (data) {
        if (this.threshold < LogThreshold.DEBUG) {
            return;
        }
        console.log(data);
    };
    Logger.threshold = LogThreshold.DEBUG;
    return Logger;
}());
export { Logger };
//# sourceMappingURL=logger.js.map