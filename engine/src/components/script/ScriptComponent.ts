import ScriptableEntity from "../../systems/script/ScriptableEntity";
import Component from "../Component";

export default class ScriptComponent extends Component  {
    public instance: ScriptableEntity;

    constructor(public scritableEntity?: typeof ScriptableEntity) {
        super();
    }
}
