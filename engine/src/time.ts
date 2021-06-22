export default class Time {
    public static lastTimestamp: number = performance.now();
    public static deltaTime: any;
    public static fps: number;

    public static calculateDeltaTime(time: number): void {
        if(!Time.lastTimestamp) {
            Time.lastTimestamp = time;
            Time.fps = 0;
            return;
         }

         Time.deltaTime = (time - Time.lastTimestamp)/1000;
         Time.lastTimestamp = time;
         Time.fps = 1/ Time.deltaTime;
    }
}