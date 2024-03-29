import { Transform } from '../primitives/transform';

export class Sprite {
    constructor(
        public transform: Transform,
        public enabled: boolean,
        public tileset?: number,
        public tilesetTransform: Transform = Transform.empty
    ) {

    }
}