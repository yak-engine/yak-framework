import Entity from "../../../../engine/src/models/entity";
import Transform from "../../../../engine/src/primitives/transform";

export default interface IGizmo {
    entity: Entity;
    context: CanvasRenderingContext2D;
}