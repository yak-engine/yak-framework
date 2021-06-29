import Point from "../primitives/Point";
export default function worldToScreen(camera, x, y) {
    return new Point(x - camera.viewport.x, y - camera.viewport.y);
}
//# sourceMappingURL=world-to-screen.js.map