import { Layer } from 'src/lib/graphics/layer';

export class Scene {
    constructor(
        public name: string,
        public rows: number,
        public columns: number,
        public tileSize: number,
        public tilesets: Array<string> = [],
        public tilemap: any = {},
        public entities: Array<any> = [],
        public layers: Array<Layer> = [],
        public entityManifests: Array<any> = []
        ) {
    }
}