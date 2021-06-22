import ColliderComponent from "../../../../engine/src/components/collider/ColliderComponent";
import Entity from "../../../../engine/src/components/entity";
import Transform from "../../../../engine/src/primitives/transform";
import Runnable from "../runnable";
import IGizmo from "./i-gizmo";

export default class ColliderGizmo extends Runnable implements IGizmo {
    transform: Transform;

    constructor(public entity: Entity, public context: CanvasRenderingContext2D) {
        super();
        this.transform = entity.getComponent<ColliderComponent>(ColliderComponent)!.transform;
    }

    update(): void {
        return;
    }

    draw(): void {
        this.context.lineWidth = 3;
		this.context.strokeStyle = '#8FE761';
        this.context.strokeRect(this.transform.x, this.transform.y, this.transform.width, this.transform.height);
    }
}