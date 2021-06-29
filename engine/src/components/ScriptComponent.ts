import ScriptableEntity from "../systems/script/ScriptableEntity";

export default class ScriptComponent  {
    constructor(public scritableEntity?: typeof ScriptableEntity) {

    }

    public instance: ScriptableEntity;
}
