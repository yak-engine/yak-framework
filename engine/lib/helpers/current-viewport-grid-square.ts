import { Configuration } from 'lib/core/configuration';
import { Point } from 'lib/primitives/point';

export function pointWorldPosition(point: Point): Point {
    let gridCoordinates = new Point(0, 0);
    
    gridCoordinates.x = Math.floor(point.x / Configuration.gridSquareSize);
    gridCoordinates.y = Math.floor(point.y / Configuration.gridSquareSize);

    return gridCoordinates;
}