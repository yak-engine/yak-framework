import { Transform } from 'src/lib/primitives/transform';

export default class Sprite {
    constructor(
        public transform: Transform,
        public enabled: boolean,
        public tileset?: number,
        public tilesetTransform: Transform = Transform.empty
    ) {

    }
}