// Local imports.
import { ScriptableEntity } from 'src/lib/systems/script/ScriptableEntity';

export class ScriptComponent  {
    constructor(public scritableEntity?: typeof ScriptableEntity) {

    }

    public instance!: ScriptableEntity;
}
