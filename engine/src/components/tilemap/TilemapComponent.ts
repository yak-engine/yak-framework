import Component from "../Component";

export default class TilemapComponent extends Component {
    constructor(public tiles?: Array<number>, public tilesetIndex?: number) {
        super();
    }
}