import Camera from 'src/lib/graphics/camera';
import { Point } from 'src/lib/primitives/Point';

export default function worldToScreen(camera: Camera, x: number, y: number): Point {
    return new Point(x - camera.viewport.x, y - camera.viewport.y);
}