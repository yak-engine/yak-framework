import Entity from "../models/entity";
import Transform from "../primitives/transform";
export default class Sprite extends Entity {
    transform: Transform;
    enabled: boolean;
    tileset?: number;
    tilesetTransform: Transform;
}
//# sourceMappingURL=sprite.d.ts.map