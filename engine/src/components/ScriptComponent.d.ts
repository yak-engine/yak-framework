import ScriptableEntity from "../systems/script/ScriptableEntity";
import Component from "./component";
export default class ScriptComponent extends Component {
    scritableEntity?: typeof ScriptableEntity;
    instance: ScriptableEntity;
    constructor(scritableEntity?: typeof ScriptableEntity);
}
//# sourceMappingURL=ScriptComponent.d.ts.map