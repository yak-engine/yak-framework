export default class SpriteRendererComponent {
    layer: number;
    tilesetIndex: number;
    row?: number;
    column?: number;

    constructor(layer?: number, tilesetIndex?: number, row?: number, column?: number) {
        this.layer = layer;
        this.tilesetIndex = tilesetIndex;
        this.row = row;
        this.column = column;
    }
}