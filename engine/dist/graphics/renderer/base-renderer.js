var BaseRenderer = /** @class */ (function () {
    function BaseRenderer(scene, tilesets) {
        /**
         * The tilesets to use for the current scene.
         */
        this.tilesets = [];
        this.scene = scene;
        this.tilesets = tilesets;
        if (!this.scene) {
            throw "You cannot initialize the renderer without a scene.";
        }
        if (!this.tilesets || this.tilesets.length === 0) {
            throw "You cannot initialize the renderer without any tilesets.";
        }
    }
    return BaseRenderer;
}());
export default BaseRenderer;
//# sourceMappingURL=base-renderer.js.map