import { Transform } from '../primitives/transform';
export declare class Sprite {
    transform: Transform;
    enabled: boolean;
    tileset?: number | undefined;
    tilesetTransform: Transform;
    constructor(transform: Transform, enabled: boolean, tileset?: number | undefined, tilesetTransform?: Transform);
}
//# sourceMappingURL=sprite.d.ts.map