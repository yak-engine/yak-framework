import Transform from "../primitives/transform";
import Component from "./component";
export default class ColliderComponent extends Component {
    transform?: Transform;
    isTrigger?: boolean;
    private points;
    constructor(transform?: Transform, isTrigger?: boolean);
}
//# sourceMappingURL=ColliderComponent.d.ts.map