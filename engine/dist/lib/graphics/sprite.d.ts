import { Transform } from 'src/lib/primitives/transform';
export default class Sprite {
    transform: Transform;
    enabled: boolean;
    tileset?: number | undefined;
    tilesetTransform: Transform;
    constructor(transform: Transform, enabled: boolean, tileset?: number | undefined, tilesetTransform?: Transform);
}
//# sourceMappingURL=sprite.d.ts.map