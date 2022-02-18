import { Camera } from '../graphics/camera';
import { Point } from '../primitives/point';

export function worldToScreen(camera: Camera, x: number, y: number): Point {
    return new Point(x - camera.viewport.x, y - camera.viewport.y);
}