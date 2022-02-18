export declare enum LogThreshold {
    NONE = 0,
    DATA = 1,
    DEBUG = 2,
    INFO = 3,
    ERROR = 4,
    CRITICAL = 5
}
export declare class Logger {
    static thresholds: LogThreshold[];
    static debug(msg: string): void;
    static info(msg: string, source: string): void;
    static error(msg: string): void;
    static critical(msg: string): void;
    static data(msg: string, data: any): void;
}
//# sourceMappingURL=logger.d.ts.map