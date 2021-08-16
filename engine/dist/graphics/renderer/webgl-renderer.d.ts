import BaseRenderer from "./base-renderer";
import Tileset from "../tileset";
import Scene from "../../models/scene";
export default class WebGLRenderer extends BaseRenderer {
    scene: Scene;
    engineCanvas: HTMLCanvasElement;
    tilesets: Tileset[];
    /**
     * The 2D rendering context for the default canvas.
     */
    context: WebGLRenderingContext;
    shaderPath: string;
    private _program;
    private _imageProgram;
    private _positionAttributeLocation;
    private _colorAttributeLocation;
    private _resolutionUniformLocation;
    private _colorUniformLocation;
    private _translationUniformLocation;
    private _rotationUniformLocation;
    private _scaleUniformLocation;
    private _matrixUniformLocation;
    private _drawables;
    private _vertexShaders;
    private _fragmentShaders;
    private _testTranslationAmount;
    private _testRotationAmount;
    private _testScaleAmount;
    private _testTranslateSpeed;
    private _colorBuffer;
    constructor(scene: Scene, tilesets: Tileset[]);
    init(): Promise<void>;
    private _createDrawable;
    private _convertAngleUnitCircleCoordinates;
    angleInDegress: number;
    angleInRadians: number;
    draw(): void;
    /**
     * Creates a shader of the given type using the shader source text.
     * @param shaderType The type of shader either VERTEXT_SHADER or FRAGMENT_SHADER.
     * @param shaderSource The source text of the shader.
     */
    private _createShader;
    /**
     * Links vertex shader and fragment shader into a WebGL program.
     * @param vertextShader The vertex shader to link to the program.
     * @param fragmentShader The fragment shader to link to the program.
     */
    private _createProgram;
}
//# sourceMappingURL=webgl-renderer.d.ts.map