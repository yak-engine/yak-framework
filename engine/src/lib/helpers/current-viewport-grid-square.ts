import Configuration from 'src/lib/configuration';
import { Point } from 'src/lib/primitives/point';

export default function pointWorldPosition(point: Point): Point {
    let gridCoordinates = new Point(0, 0);
    
    gridCoordinates.x = Math.floor(point.x / Configuration.gridSquareSize);
    gridCoordinates.y = Math.floor(point.y / Configuration.gridSquareSize);

    return gridCoordinates;
}