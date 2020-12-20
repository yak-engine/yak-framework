import Camera from "../../graphics/camera";
import Component from "../Component";

export default class CameraComponent extends Component {
    camera?: Camera;

    constructor(camera?: Camera) {
        super();
        this.camera = camera;
    }
}