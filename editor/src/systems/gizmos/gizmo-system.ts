import Runnable from "../runnable";
import System from "../system";

export default class GizmoSystem extends System {
    name: string = 'gizmo-system';

    data: Runnable[] = [];

    update(): void {
        this.data.forEach((gizmo) => {
            gizmo.update();
        });
    }

    draw(): void {
        this.data.forEach((gizmo) => {
            gizmo.draw();
        });
    }
}