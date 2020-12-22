import Sprite from "../../engine/src/graphics/sprite";
import { EditorMode } from "./enums/EditorMode";
import Project from "./models/project";

export default class EditorGlobal {
    public static project: Project;
    public static editorMode: EditorMode = EditorMode.NONE;
    public static selectedSprite: Sprite = null;
}