import Configuration from "../configuration";
import Point from "../primitives/point";
export default function pointWorldPosition(point) {
    var gridCoordinates = new Point(0, 0);
    gridCoordinates.x = Math.floor(point.x / Configuration.gridSquareSize);
    gridCoordinates.y = Math.floor(point.y / Configuration.gridSquareSize);
    return gridCoordinates;
}
//# sourceMappingURL=current-viewport-grid-square.js.map