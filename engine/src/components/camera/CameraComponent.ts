import Camera from "../../graphics/camera";
import Component from "../Component";

export default class CameraComponent extends Component {
    constructor(public camera?: Camera) {
        super();
    }
}