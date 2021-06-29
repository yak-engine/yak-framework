import isCoordinateContained from "../helpers/is-coordinate-contained";
import Transform from "../primitives/transform";
var Quad = /** @class */ (function () {
    function Quad() {
        this.transform = Transform.empty;
    }
    Quad.prototype.insert = function (node) {
        if (!node) {
            return;
        }
        if (isCoordinateContained(node, this.transform)) {
            return;
        }
        if (this.transform.x - (this.transform.x + this.transform.width) <= 1 && this.transform.y - (this.transform.y + this.transform.height)) {
            if (!node) {
                this.node = node;
            }
            return;
        }
        if (this.transform.x + (this.transform.x + this.transform.width) / 2 > this.node.x) {
            if ((this.transform.y + (this.transform.y + this.transform.height)) / 2 >= this.node.y) {
                // top left.
                if (this.topLeftTree) {
                    this.topLeftTree = new Quad();
                    // this.topLeftTree.transform.
                }
            }
            else {
                // bottom left.
            }
        }
    };
    return Quad;
}());
export default Quad;
//# sourceMappingURL=quad-tree.js.map