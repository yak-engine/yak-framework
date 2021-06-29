import Transform from "../primitives/transform";

export default class TransformComponent {
    transform: Transform;

    constructor(transform?: Transform) {
        this.transform = transform;
    }
}