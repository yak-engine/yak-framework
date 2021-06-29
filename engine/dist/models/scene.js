var Scene = /** @class */ (function () {
    function Scene() {
        /**
         * The name of the image source file for each of the tilsets used during the scene.
         */
        this.tilesets = new Array();
        /**
         * The tilemap for the current scene.
         */
        this.tilemap = {};
        /**
         * The entities that exist within the scene.
         */
        this.entities = new Array();
        /**
         * The layers to which content will be rendered to the screen.
         */
        this.layers = new Array();
    }
    return Scene;
}());
export default Scene;
//# sourceMappingURL=scene.js.map