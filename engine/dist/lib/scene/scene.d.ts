import { Layer } from '../graphics/layer';
export declare class Scene {
    name: string;
    rows: number;
    columns: number;
    tileSize: number;
    tilesets: Array<string>;
    tilemap: any;
    entities: Array<any>;
    layers: Array<Layer>;
    entityManifests: Array<any>;
    constructor(name: string, rows: number, columns: number, tileSize: number, tilesets?: Array<string>, tilemap?: any, entities?: Array<any>, layers?: Array<Layer>, entityManifests?: Array<any>);
}
//# sourceMappingURL=scene.d.ts.map