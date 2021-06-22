import Runnable from "./runnable";

export default abstract class System {
    abstract name: string;
    abstract data: Runnable[] = [];
}