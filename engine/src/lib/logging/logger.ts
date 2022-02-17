export enum LogThreshold {
    NONE = 0,
    DATA = 1,
    DEBUG = 2,
    INFO = 3,
    ERROR = 4,
    CRITICAL = 5
}

export class Logger {
    static thresholds: LogThreshold[] = [LogThreshold.DATA, LogThreshold.DEBUG, LogThreshold.INFO, LogThreshold.ERROR, LogThreshold.CRITICAL];

    static debug(msg: string): void {
        if (!this.thresholds.includes(LogThreshold.DEBUG)) {
            return;
        }

        console.log(`[YAK DEBUG]: ${msg}`);
    }

    static info(msg: string, source: string): void {
        if (!this.thresholds.includes(LogThreshold.INFO)) {
            return;
        }

        console.info(`%c [YAK INFO - ${source}]: ${msg}`, 'background: #222; color: #bada55');
    }

    static error(msg: string): void {
        if (!this.thresholds.includes(LogThreshold.ERROR)) {
            return;
        }

        console.error(`[YAK ERROR]: ${msg}`);
    }

    static critical(msg: string): void {
        if (!this.thresholds.includes(LogThreshold.CRITICAL)) {
            return;
        }

        console.error(`[YAK CRITICAL]: ${msg}`);
    }

    static data(msg: string, data: any): void {
        if (!this.thresholds.includes(LogThreshold.DATA)) {
            return;
        }

        console.log(`%c [YAK DATA]: ${msg}`, 'background: #222; color: #bada55', data);
    }
}