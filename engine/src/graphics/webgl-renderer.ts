import TilemapSystem from "../systems/tilemap/TilemapSystem";
import Time from "../time";
import BaseRenderer from "./base-renderer";

class Drawable {
    buffer: WebGLBuffer;
    positions: number[];
}

export default class WebGLRenderer extends BaseRenderer {
    /**
     * The 2D rendering context for the default canvas.
     */
    public context: WebGLRenderingContext = null;

    public shaderPath: string = '/shaders';

    private _program: WebGLProgram;
    
    private _positionAttributeLocation: number;

    private _resolutionUniformLocation: WebGLUniformLocation;

    private _colorUniformLocation: WebGLUniformLocation;

    private _translationUniformLocation: WebGLUniformLocation;

    private _rotationUniformLocation: WebGLUniformLocation;

    private _drawables: Drawable[] = [];

    private _vertexShaders: WebGLShader[] = [];

    private _fragmentShaders: WebGLShader[] = [];

    private _testTranslationAmount: number[] = [0, 0]; // x,y

    private _testRotationAmount: number[] = [0, 1]; // x,y

    private _testTranslateSpeed: number = 100;

    public async init(): Promise<void> {
        this.context = this.engineCanvas.getContext('webgl');

        if (!this.context) {
            throw "WebGL not supported.";
        }

        this.engineCanvas.width = window.innerWidth;
        this.engineCanvas.height = window.innerHeight;

        let vertextShaderSource: string = await (await fetch(`${this.shaderPath}/vertex-shader.glsl`)).text();
        let fragmentShaderSource: string = await (await fetch(`${this.shaderPath}/fragment-shader.glsl`)).text();

        // TODO: Refactor into basic helper method.
        let vertextShader: WebGLShader = this._createShader(this.context.VERTEX_SHADER, vertextShaderSource);
        let fragmentShader: WebGLShader = this._createShader(this.context.FRAGMENT_SHADER, fragmentShaderSource);

        console.log(fragmentShaderSource);

        // Create a new program and link the shaders.
        this._program = this._createProgram(vertextShader, fragmentShader);

        // Do this on init not in the render loop.
        this._positionAttributeLocation = this.context.getAttribLocation(this._program, 'a_position');
        this._resolutionUniformLocation = this.context.getUniformLocation(this._program, 'u_resolution');
        this._colorUniformLocation = this.context.getUniformLocation(this._program, 'u_color');
        this._translationUniformLocation = this.context.getUniformLocation(this._program, 'u_translation');
        this._rotationUniformLocation = this.context.getUniformLocation(this._program, 'u_rotation');

        this._createDrawable([
            10, 20, // tri 1 vert 1
            80, 20, // tri 1 vert 2
            10, 30, // tri 1 vert 3
            10, 30,
            80, 20,
            80, 30,
        ]);

        this._createDrawable([
            100, 200,
            800, 200,
            100, 300,
            100, 300,
            800, 200,
            800, 300,
        ]);

        // this._positionBuffer = this.context.createBuffer();
        // this.context.bindBuffer(this.context.ARRAY_BUFFER, this._positionBuffer);

        // // This javascript array will be converted to a strongly type Float32Array for WebGL since it excepts a strongly typed array.
        // let positions: number[] = [
        //     10, 20,
        //     80, 20,
        //     10, 30,
        //     10, 30,
        //     80, 20,
        //     80, 30,
        // ];

        // this.context.bufferData(this.context.ARRAY_BUFFER, new Float32Array(positions), this.context.STATIC_DRAW);
    }

    private _createDrawable(positions: number[]): void {
        let drawable: Drawable = new Drawable();

        drawable.positions = positions;
        drawable.buffer = this.context.createBuffer();

        this.context.bindBuffer(this.context.ARRAY_BUFFER, drawable.buffer);
        this.context.bufferData(this.context.ARRAY_BUFFER, new Float32Array(drawable.positions), this.context.STATIC_DRAW);

        this._drawables.push(drawable);
    }

    private _convertAngleUnitCircleCoordinates(angleInDegrees: number): any {
        var angleInRadians = angleInDegrees * Math.PI / 180;

        let sine = Math.sin(angleInRadians);
        let cosine = Math.cos(angleInRadians);

        return {
            sine: sine,
            cosine: cosine
        }
    }

    public update(): void {

    }

    public draw(): void {
        console.log('[WEBGL]: Draw');

        // Update test translate
        this._testTranslationAmount[0] += this._testTranslateSpeed * Time.deltaTime;

        let angleRotation: number = -45;

        // Points on a unit circle are called sine and cosine (sine = x) (cosine = y).
        let unitCircleCoordinatesthis: any = this._convertAngleUnitCircleCoordinates(angleRotation);

        this._testRotationAmount[0] = unitCircleCoordinatesthis.sine;
        this._testRotationAmount[1] = unitCircleCoordinatesthis.cosine;

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
        this._drawables.forEach((drawable) => {
            // TODO: Should this be done in each iteration? Or before?
            // Enable position attribute in vertext shader. So WebGL can use the data we set in the ARRAY_BUFFER.
            this.context.enableVertexAttribArray(this._positionAttributeLocation);

            this.context.bindBuffer(this.context.ARRAY_BUFFER, drawable.buffer);

            let size: number = 2; // 2 components per iteration
            let type = this.context.FLOAT; // the data is 32bit floats
            let normalize: boolean = false; // don't normalize the data
            let stride: number = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
            let offset: number = 0; // start at the beginning of the buffer
    
            this.context.vertexAttribPointer(this._positionAttributeLocation, size, type, normalize, stride, offset);

            let primitiveType: number = this.context.TRIANGLES;
            let drawOffset: number = 0;
            let drawCount: number = 6; // square from two triangles would be 6.
    
            // Set uniforms
            this.context.uniform4f(this._colorUniformLocation, 1, 1, 1, 1); // color
            this.context.uniform2fv(this._translationUniformLocation, this._testTranslationAmount);
            this.context.uniform2fv(this._rotationUniformLocation, this._testRotationAmount);

            this.context.drawArrays(primitiveType, drawOffset, drawCount);
        });
    }

    /**
     * Creates a shader of the given type using the shader source text.
     * @param shaderType The type of shader either VERTEXT_SHADER or FRAGMENT_SHADER.
     * @param shaderSource The source text of the shader.
     */
    private _createShader(shaderType: GLenum, shaderSource: string): WebGLShader {
        let shader: WebGLShader = this.context.createShader(shaderType);

        // Create container for the shader source text to be placed into then compile.
        this.context.shaderSource(shader, shaderSource);
        this.context.compileShader(shader);

        let successful: boolean = this.context.getShaderParameter(shader, this.context.COMPILE_STATUS);

        if (successful) {
            return shader;
        }

        // TODO: Refactor into some sort of general dispose function for shaders.
        console.log(this.context.getShaderInfoLog(shader));
        this.context.deleteShader(shader);

        throw `[SHADER ERROR]: Unable to load shader ${shaderType}`;
    }

    /**
     * Links vertex shader and fragment shader into a WebGL program.
     * @param vertextShader The vertex shader to link to the program.
     * @param fragmentShader The fragment shader to link to the program.
     */
    private _createProgram(vertextShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram {
        let program: WebGLProgram = this.context.createProgram();

        // TODO: Add checks to determine that each shader parameter is actually of the correct shader type.
        this.context.attachShader(program, vertextShader);
        this.context.attachShader(program, fragmentShader);

        this.context.linkProgram(program);

        let successful: boolean = this.context.getProgramParameter(program, this.context.LINK_STATUS);

        if (successful) {
            return program;
        }

        // TODO: Refactor into some sort of general dispose function for programs.
        console.log(this.context.getProgramInfoLog(program));
        this.context.deleteProgram(program);

        throw `[SHADER ERROR]: Unable to link shaders to program`;
    }
}