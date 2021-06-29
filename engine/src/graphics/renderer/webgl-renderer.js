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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import BaseRenderer from "./base-renderer";
import Mat4 from "../Mat4";
var Drawable = /** @class */ (function () {
    function Drawable() {
    }
    return Drawable;
}());
var Image = /** @class */ (function () {
    function Image() {
    }
    return Image;
}());
var WebGLRenderer = /** @class */ (function (_super) {
    __extends(WebGLRenderer, _super);
    function WebGLRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tilesets = [];
        /**
         * The 2D rendering context for the default canvas.
         */
        _this.context = null;
        _this.shaderPath = '/shaders';
        _this._drawables = [];
        _this._vertexShaders = [];
        _this._fragmentShaders = [];
        _this._testTranslationAmount = [0, 0, 0]; // x,y,z
        _this._testRotationAmount = [0, 1, 0]; // x,y,z
        _this._testScaleAmount = [1, 1, 0]; //x,y,z
        _this._testTranslateSpeed = 100;
        _this.angleInDegress = 0;
        _this.angleInRadians = 0;
        return _this;
    }
    WebGLRenderer.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var vertextShaderSource, fragmentShaderSource, vertextShader, fragmentShader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.context = this.engineCanvas.getContext('webgl');
                        if (!this.context) {
                            throw "WebGL not supported.";
                        }
                        this.engineCanvas.width = window.innerWidth;
                        this.engineCanvas.height = window.innerHeight;
                        return [4 /*yield*/, fetch(this.shaderPath + "/vertex-shader.glsl")];
                    case 1: return [4 /*yield*/, (_a.sent()).text()];
                    case 2:
                        vertextShaderSource = _a.sent();
                        return [4 /*yield*/, fetch(this.shaderPath + "/fragment-shader.glsl")];
                    case 3: return [4 /*yield*/, (_a.sent()).text()];
                    case 4:
                        fragmentShaderSource = _a.sent();
                        vertextShader = this._createShader(this.context.VERTEX_SHADER, vertextShaderSource);
                        fragmentShader = this._createShader(this.context.FRAGMENT_SHADER, fragmentShaderSource);
                        // Create a new program and link the shaders.
                        this._program = this._createProgram(vertextShader, fragmentShader);
                        // Look where position data will go.
                        this._positionAttributeLocation = this.context.getAttribLocation(this._program, 'a_position');
                        this._colorAttributeLocation = this.context.getAttribLocation(this._program, 'a_color');
                        this._colorBuffer = this.context.createBuffer();
                        this.context.bindBuffer(this.context.ARRAY_BUFFER, this._colorBuffer);
                        this.context.bufferData(this.context.ARRAY_BUFFER, new Uint8Array([
                            255, 255, 255,
                            0, 0, 0,
                            0, 0, 0,
                            0, 0, 0,
                            0, 0, 0,
                            0, 0, 0
                        ]), this.context.STATIC_DRAW);
                        // Looks up uniforms for shader.
                        // Do this on init not in the render loop.
                        this._colorUniformLocation = this.context.getUniformLocation(this._program, 'u_color');
                        this._resolutionUniformLocation = this.context.getUniformLocation(this._program, 'u_resolution');
                        this._matrixUniformLocation = this.context.getUniformLocation(this._program, 'u_matrix');
                        this._createDrawable([
                            10, 20, 0,
                            80, 20, 0,
                            10, 30, 0,
                            10, 30, 0,
                            80, 20, 0,
                            80, 30, 0
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    WebGLRenderer.prototype._createDrawable = function (positions) {
        var drawable = new Drawable();
        drawable.positions = positions;
        drawable.buffer = this.context.createBuffer();
        this.context.bindBuffer(this.context.ARRAY_BUFFER, drawable.buffer);
        this.context.bufferData(this.context.ARRAY_BUFFER, new Float32Array(drawable.positions), this.context.STATIC_DRAW);
        this._drawables.push(drawable);
    };
    WebGLRenderer.prototype._convertAngleUnitCircleCoordinates = function (angleInDegrees) {
        var angleInRadians = angleInDegrees * Math.PI / 180;
        var sine = Math.sin(angleInRadians);
        var cosine = Math.cos(angleInRadians);
        return {
            sine: sine,
            cosine: cosine
        };
    };
    WebGLRenderer.prototype.draw = function () {
        var _this = this;
        console.log('[WEBGL]: Draw');
        // Update test translate
        // this._testTranslationAmount[0] += this._testTranslateSpeed * Time.deltaTime;
        // this.angleInDegress += 10 * Time.deltaTime;
        // Points on a unit circle are called sine and cosine (sine = x) (cosine = y).
        var unitCircleCoordinates = this._convertAngleUnitCircleCoordinates(this.angleInDegress);
        this._testRotationAmount[0] = unitCircleCoordinates.sine;
        this._testRotationAmount[1] = unitCircleCoordinates.cosine;
        // Tells WebGL to convert the clip space values we set gl_position to in the vertext shader back into pixels (screen space).
        // -1 maps to 0 and 1 maps to the canvas width same goes for the y-axis.
        this.context.viewport(0, 0, this.engineCanvas.width, this.engineCanvas.height);
        // Clear the canvas by making it transparent.
        this.context.clearColor(0, 0, 0, 0);
        this.context.clear(this.context.COLOR_BUFFER_BIT);
        this.context.useProgram(this._program);
        // Transform from clip space back into pixels for positional data.
        this.context.uniform2f(this._resolutionUniformLocation, this.engineCanvas.width, this.engineCanvas.height);
        // Iterate through the drawables to render.
        this._drawables.forEach(function (drawable) {
            // TODO: Should this be done in each iteration? Or before?
            // Enable position attribute in vertext shader. So WebGL can use the data we set in the ARRAY_BUFFER.
            _this.context.enableVertexAttribArray(_this._positionAttributeLocation);
            _this.context.bindBuffer(_this.context.ARRAY_BUFFER, drawable.buffer);
            var size = 3; // 2 components per iteration -> 3 for orthographic.
            var type = _this.context.FLOAT; // the data is 32bit floats
            var normalize = false; // don't normalize the data
            var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
            var offset = 0; // start at the beginning of the buffer
            _this.context.vertexAttribPointer(_this._positionAttributeLocation, size, type, normalize, stride, offset);
            // TODO: Should this be done in each iteration? Or before?
            // Enable position attribute in vertext shader. So WebGL can use the data we set in the ARRAY_BUFFER.
            _this.context.enableVertexAttribArray(_this._colorAttributeLocation);
            _this.context.bindBuffer(_this.context.ARRAY_BUFFER, _this._colorBuffer);
            var cSize = 3; // 2 components per iteration -> 3 for orthographic.
            var cType = _this.context.UNSIGNED_BYTE; // the data is 32bit floats
            var cNormalize = false; // don't normalize the data
            var cStride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
            var cOffset = 0; // start at the beginning of the buffer
            _this.context.vertexAttribPointer(_this._colorAttributeLocation, cSize, cType, cNormalize, cStride, cOffset);
            // Set uniforms
            _this.context.uniform4f(_this._colorUniformLocation, 1, 1, 1, 1); // color
            // var left = 0;
            // var right = this.context.canvas.width;
            // var bottom = this.context.canvas.height;
            // var top = 0;
            // var near = 400;
            // var far = -400;
            // var matrix = Mat4.orthographic(left, right, bottom, top, near, far);
            var matrix = Mat4.projection(_this.context.canvas.width, _this.context.canvas.height, 400);
            matrix = Mat4.translate(matrix, _this._testTranslationAmount[0], _this._testTranslationAmount[1], _this._testTranslationAmount[2]);
            matrix = Mat4.xRotate(matrix, _this.angleInDegress * Math.PI / 180);
            matrix = Mat4.yRotate(matrix, _this.angleInDegress * Math.PI / 180);
            matrix = Mat4.zRotate(matrix, _this.angleInDegress * Math.PI / 180);
            matrix = Mat4.scale(matrix, _this._testScaleAmount[0], _this._testScaleAmount[1], _this._testScaleAmount[2]);
            // Adjust origin. How does this actually adjust the rotation point? Can't seem to get it working?
            // matrix = Mat4.translate(matrix, 150, 150, 150);
            _this.context.uniformMatrix4fv(_this._matrixUniformLocation, false, matrix);
            var primitiveType = _this.context.TRIANGLES;
            var drawOffset = 0;
            var drawCount = 6; // square from two triangles would be 6.
            _this.context.drawArrays(primitiveType, drawOffset, drawCount);
        });
    };
    // public drawImage(texture: WebGLTexture, textureWidth: number, textureHeight: number, destinationX: number, destinationY: number): void {
    //     this.context.bindTexture(this.context.TEXTURE_2D);
    //     this.context.useProgram(this._imageProgram);
    //     this.context.bindBuffer(this.context.ARRAY_BUFFER, positionBuffer);
    //     this.context.enableVertexAttribArray(positionLocation);
    //     this.context.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    //     this.context.bindBuffer(this.context.ARRAY_BUFFER, texcoordBuffer);
    //     this.context.enableVertexAttribArray(texcoordLocation);
    //     this.context.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);
    //     // this matrix will convert from pixels to clip space
    //     var matrix = Mat3.orthographic(0, gl.canvas.width, gl.canvas.height, 0, -1, 1);
    //     // this matrix will translate our quad to dstX, dstY
    //     matrix = m4.translate(matrix, dstX, dstY, 0);
    //     // this matrix will scale our 1 unit quad
    //     // from 1 unit to texWidth, texHeight units
    //     matrix = Mat4.scale(matrix, texWidth, texHeight, 1);
    //     // Set the matrix.
    //     this.context.uniformMatrix4fv(matrixLocation, false, matrix);
    //     // Tell the shader to get the texture from texture unit 0
    //     this.context.uniform1i(textureLocation, 0);
    //     // draw the quad (2 triangles, 6 vertices)
    //     gl.drawArrays(gl.TRIANGLES, 0, 6);
    // }
    /**
     * Creates a shader of the given type using the shader source text.
     * @param shaderType The type of shader either VERTEXT_SHADER or FRAGMENT_SHADER.
     * @param shaderSource The source text of the shader.
     */
    WebGLRenderer.prototype._createShader = function (shaderType, shaderSource) {
        var shader = this.context.createShader(shaderType);
        // Create container for the shader source text to be placed into then compile.
        this.context.shaderSource(shader, shaderSource);
        this.context.compileShader(shader);
        var successful = this.context.getShaderParameter(shader, this.context.COMPILE_STATUS);
        if (successful) {
            return shader;
        }
        // TODO: Refactor into some sort of general dispose function for shaders.
        console.log(this.context.getShaderInfoLog(shader));
        this.context.deleteShader(shader);
        throw "[SHADER ERROR]: Unable to load shader " + shaderType;
    };
    /**
     * Links vertex shader and fragment shader into a WebGL program.
     * @param vertextShader The vertex shader to link to the program.
     * @param fragmentShader The fragment shader to link to the program.
     */
    WebGLRenderer.prototype._createProgram = function (vertextShader, fragmentShader) {
        var program = this.context.createProgram();
        // TODO: Add checks to determine that each shader parameter is actually of the correct shader type.
        this.context.attachShader(program, vertextShader);
        this.context.attachShader(program, fragmentShader);
        this.context.linkProgram(program);
        var successful = this.context.getProgramParameter(program, this.context.LINK_STATUS);
        if (successful) {
            return program;
        }
        // TODO: Refactor into some sort of general dispose function for programs.
        console.log(this.context.getProgramInfoLog(program));
        this.context.deleteProgram(program);
        throw "[SHADER ERROR]: Unable to link shaders to program";
    };
    return WebGLRenderer;
}(BaseRenderer));
export default WebGLRenderer;
