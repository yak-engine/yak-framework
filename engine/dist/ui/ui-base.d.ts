import Entity from "../models/entity";
import HoverState from "./states/hover-state";
import Thickness from "./thickness";
interface UIFragment {
    onHover?(): void;
    onEnter?(): void;
    onExit?(): void;
    onClick?(): void;
    onKeypress?(): void;
}
declare abstract class UIFragment extends Entity {
    backgroundColor: string;
    padding: Thickness;
    margin: Thickness;
    isInteractive: boolean;
    isHovered: boolean;
    hoverState?: HoverState;
    constructor(x: number, y: number, width: number, height: number);
}
export default UIFragment;
//# sourceMappingURL=ui-base.d.ts.map