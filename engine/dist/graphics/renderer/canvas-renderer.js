var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Point from "../../primitives/Point";
import Transform from "../../primitives/transform";
import Camera from "../camera";
import SpriteRendererComponent from "../../components/SpriteRendererComponent";
import MaterialComponent from "../../components/MaterialComponent";
import TransformComponent from "../../components/TransformComponent";
import BaseRenderer from "./base-renderer";
import ManagerFactory from "../../manager-factory";
var CanvasRenderer = /** @class */ (function (_super) {
    __extends(CanvasRenderer, _super);
    /**
     * Default constructor.
     */
    function CanvasRenderer(scene, tilesets) {
        var _this = _super.call(this, scene, tilesets) || this;
        /**
         * The tilesets to use for the current scene.
         */
        _this.tilesets = [];
        /**
         * The main scene camera this is always here.
         */
        _this.mainCamera = new Camera();
        return _this;
    }
    /**
     * Initializes the canvas for the renderer.
     */
    CanvasRenderer.prototype.init = function () {
        var _this = this;
        this.engineCanvas = document.querySelector('#engine-canvas');
        this.context = this.engineCanvas.getContext('2d');
        this.engineCanvas.addEventListener('mousedown', function (event) { return _this.onCanvasMouseDown(event); });
        this.engineCanvas.addEventListener('mouseup', function (event) { return _this.onCanvasMouseUp(event); });
        this.engineCanvas.addEventListener('mousemove', function (event) { return _this.onCanvasMouseMove(event); });
        // Initialize the camera for the renderer.
        this.mainCamera.viewport = new Transform(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
        this.mainCamera.max = new Point((this.scene.columns * this.scene.tileSize) - this.mainCamera.viewport.width, (this.scene.rows * this.scene.tileSize) - this.mainCamera.viewport.height);
    };
    /**
     * Draw any entities to the canvas if they have the sprite renderer component.
     */
    CanvasRenderer.prototype.draw = function () {
        /**
         * Clear the canvas for the next render call.
         */
        this.clearCanvas();
        /**
         * Render the tilemap and standalone sprites.
         */
        this.render();
        /**
         * Ensure the canvas is resized to match the current size of the viewport.
         */
        this.resizeCanvas();
    };
    CanvasRenderer.prototype.render = function () {
        var _this = this;
        this.scene.layers.forEach(function (layer, index) {
            if (layer.enabled) {
                // Render the tilemap sprites for the current layer.
                // Render any standalone sprites for the current layer.
                var spriteManager_1 = ManagerFactory.get(SpriteRendererComponent.name);
                spriteManager_1.entities.forEach(function (entity) {
                    var spriteRenderer = spriteManager_1.getInstance(entity);
                    var spriteTransform = entity.getComponent(TransformComponent);
                    var material = entity.getComponent(MaterialComponent);
                    if (material) {
                        _this.applyMaterial(material);
                    }
                    _this.context.drawImage(_this.tilesets[spriteRenderer.tilesetIndex].image, // this.tilesets[spriteRendererComponent.layer].image,
                    spriteRenderer.column * _this.scene.tileSize, spriteRenderer.row * _this.scene.tileSize, _this.scene.tileSize, _this.scene.tileSize, spriteTransform.transform.x - 0, // cameraOffsetX,
                    spriteTransform.transform.y - 0, // cameraOffsetY,
                    _this.scene.tileSize, _this.scene.tileSize);
                });
            }
        });
    };
    CanvasRenderer.prototype.applyMaterial = function (materialComponent) {
        this.context.fillStyle = materialComponent.fillStyle;
        this.context.globalAlpha = materialComponent.alpha;
    };
    /**
     * Clears the canvas for the next draw call.
     *
     * @author NSSure
     * @since 11/8/2020
     */
    CanvasRenderer.prototype.clearCanvas = function () {
        this.context.clearRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
    };
    /**
     * Resizes the canvas canvas to fit the dimensions of the viewport.
     *
     * @author NSSure
     * @since 11/8/2020
     */
    CanvasRenderer.prototype.resizeCanvas = function () {
        if (this.getCanvasWidth() !== window.innerWidth || this.getCanvasHeight() !== window.innerHeight) {
            this.setCanvasWidth(window.innerWidth);
            this.setCanvasHeight(window.innerHeight);
        }
    };
    /**
     * Gets the current width of the canvas.
     */
    CanvasRenderer.prototype.getCanvasHeight = function () {
        return this.engineCanvas.height;
    };
    /**
     * Gets the current height of the canvas.
     */
    CanvasRenderer.prototype.getCanvasWidth = function () {
        return this.engineCanvas.width;
    };
    /**
     * Sets the height of the canvas.
     * @param height The height to set the canvas to.
     */
    CanvasRenderer.prototype.setCanvasHeight = function (height) {
        this.engineCanvas.height = height;
    };
    /**
     * Sets the width of the canvas.
     * @param width The width to set the canvas to.
     */
    CanvasRenderer.prototype.setCanvasWidth = function (width) {
        this.engineCanvas.width = width;
    };
    CanvasRenderer.prototype.onCanvasMouseDown = function (event) {
        console.log('mousedown');
    };
    CanvasRenderer.prototype.onCanvasMouseUp = function (event) {
        console.log('mouseup');
    };
    CanvasRenderer.prototype.onCanvasMouseMove = function (event) {
        console.log('mousemove');
    };
    return CanvasRenderer;
}(BaseRenderer));
export default CanvasRenderer;
//# sourceMappingURL=canvas-renderer.js.map