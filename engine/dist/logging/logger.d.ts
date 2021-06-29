declare enum LogThreshold {
    NONE = 0,
    DEBUG = 1,
    INFO = 2,
    ERROR = 3,
    CRITICAL = 4
}
declare class Logger {
    static threshold: LogThreshold;
    static debug(msg: string): void;
    static info(msg: string): void;
    static error(msg: string): void;
    static critical(msg: string): void;
    static data(data: any): void;
}
export { Logger };
//# sourceMappingURL=logger.d.ts.map