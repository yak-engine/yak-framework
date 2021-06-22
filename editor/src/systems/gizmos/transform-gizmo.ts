import Transform from "../../../../engine/src/primitives/transform";
import IGizmo from './i-gizmo';
import Runnable from '../runnable';
import Entity from "../../../../engine/src/components/entity";
import TransformComponent from "../../../../engine/src/components/transform/TransformComponent";

export default class TransformGizmo extends Runnable implements IGizmo {
    transform: Transform;

    constructor(public entity: Entity, public context: CanvasRenderingContext2D) {
        super();
        this.transform = entity.getComponent(TransformComponent);
    }

    xAxis: Transform = Transform.empty;
    yAxis: Transform = Transform.empty;
    scaler: Transform = Transform.empty;
    rotater: Transform = Transform.empty;

    isUpdatingYAxis: boolean = false;
    isUpdatingXAxis: boolean = false;
    isUpdatingScale: boolean = false;

    update(): void {
        this.yAxis = new Transform(
            this.transform.x + (this.transform.width / 2) - 1, 
            this.transform.y - 10, 
            2, 
            (this.transform.height / 2) + 10
        );

        this.xAxis = new Transform(
            this.transform.x + (this.transform.width / 2), 
            this.transform.y + (this.transform.height / 2) - 1, 
            (this.transform.width / 2) + 10,
            2
        );

        this.scaler = new Transform(this.transform.x + (this.transform.width / 2) - 5, this.transform.y + (this.transform.height / 2) - 5, 10, 10);

        // if (Mouse.isPressed(0)) {
        //     if (this.isUpdatingYAxis || isCoordinateContained(mousePosition, this.yAxis)) {
        //         this.isUpdatingYAxis = true;
        //         this.transform.y = mousePosition.y;

        //         // if (startingMousePosition) {
        //         //     let yDiff: number = mousePosition.y - startingMousePosition.y;
        //         //     this.transform.y += yDiff * Time.deltaTime;
        //         // }
        //     }
        //     else if (this.isUpdatingXAxis || isCoordinateContained(mousePosition, this.xAxis)) {
        //         this.isUpdatingXAxis = true;
        //         this.transform.x = mousePosition.x;
        //     }
        //     else if (this.isUpdatingScale || isCoordinateContained(mousePosition, this.scaler)) {
        //         this.isUpdatingScale = true;

        //         if (Mouse.xDiff !== 0 || Mouse.yDiff !== 0) {
        //             // Scale up.
        //             if (Mouse.xDiff > 0 || Mouse.yDiff < 0) {
        //                 this.transform.height += Mouse.yDiff;
        //                 this.transform.width += Mouse.yDiff;
        //             }
        //             // Scale down.
        //             else if (Mouse.xDiff < 0 || Mouse.yDiff > 0) {
        //                 this.transform.height += Mouse.xDiff;
        //                 this.transform.width += Mouse.xDiff;
        //             }
        //         }
        //     }
        // }
        // else {
        //     this.isUpdatingYAxis = false;
        //     this.isUpdatingXAxis = false;
        //     this.isUpdatingScale = false;
        // }
    }

    draw(): void {
        this.context.fillStyle = '#DD5246';
        this.context.fillRect(this.yAxis.x, this.yAxis.y, this.yAxis.width, this.yAxis.height);

        // x-axis
        this.context.fillStyle = '#007ACC';
        this.context.fillRect(this.xAxis.x, this.xAxis.y, this.xAxis.width, this.xAxis.height);

        // scale
        this.context.fillStyle = '#f9f9f9';
        this.context.fillRect(this.scaler.x, this.scaler.y, this.scaler.width, this.scaler.height);
    }
}