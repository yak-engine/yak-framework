import Component from "../Component";

export default class SpriteRendererComponent extends Component {
    layer: number;
    tilesetIndex: number;
    row?: number;
    column?: number;

    constructor(layer?: number, tilesetIndex?: number, row?: number, column?: number) {
        super();

        this.layer = layer;
        this.tilesetIndex = tilesetIndex;
        this.row = row;
        this.column = column;
    }
}