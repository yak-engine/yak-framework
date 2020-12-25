import Sprite from "../../engine/src/graphics/sprite";
import Scene from "../../engine/src/models/scene";
import { PaletteMode } from "./enums/PaletteMode";
import Project from "./models/project";

export default class EditorGlobal {
    public static project: Project;
    public static editorMode: PaletteMode = PaletteMode.NONE;
    public static selectedSprite: Sprite = null;
    public static scene: Scene = null;
}