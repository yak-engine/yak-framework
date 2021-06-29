import BaseRenderer from "./base-renderer";
import Mat4 from "../Mat4";
import Tileset from "../tileset";
import Scene from "../../models/scene";

class Drawable {
    buffer: WebGLBuffer;
    positions: number[];
}

class Image {

}

export default class WebGLRenderer extends BaseRenderer {
    public scene: Scene;

    public engineCanvas: HTMLCanvasElement;

    public tilesets: Tileset[] = [];

    /**
     * The 2D rendering context for the default canvas.
     */
    public context: WebGLRenderingContext = null;

    public shaderPath: string = '/shaders';

    private _program: WebGLProgram;

    private _imageProgram: WebGLProgram;
    
    private _positionAttributeLocation: number;

    private _colorAttributeLocation: number;

    private _resolutionUniformLocation: WebGLUniformLocation;

    private _colorUniformLocation: WebGLUniformLocation;

    private _translationUniformLocation: WebGLUniformLocation;

    private _rotationUniformLocation: WebGLUniformLocation;

    private _scaleUniformLocation: WebGLUniformLocation;

    private _matrixUniformLocation: WebGLUniformLocation;

    private _drawables: Drawable[] = [];

    private _vertexShaders: WebGLShader[] = [];

    private _fragmentShaders: WebGLShader[] = [];

    private _testTranslationAmount: number[] = [0, 0, 0]; // x,y,z

    private _testRotationAmount: number[] = [0, 1, 0]; // x,y,z

    private _testScaleAmount: number[] = [1, 1, 0]; //x,y,z

    private _testTranslateSpeed: number = 100;

    private _colorBuffer: WebGLBuffer;

    constructor(scene: Scene, tilesets: Tileset[]) {
        super();

        this.scene = scene;
        this.tilesets = tilesets;
    }

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
            10, 20, 0, // tri 1 vert 1
            80, 20, 0, // tri 1 vert 2
            10, 30, 0, // tri 1 vert 3
            10, 30, 0,
            80, 20, 0,
            80, 30, 0
        ]);

        // this._createDrawable([
        //     100, 200, 0,
        //     800, 200, 0,
        //     100, 300, 0,
        //     100, 300, 0,
        //     800, 200, 0,
        //     800, 300, 0
        // ]);
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

    angleInDegress: number = 0;
    angleInRadians: number = 0;

    public draw(): void {
        console.log('[WEBGL]: Draw');

        // Update test translate
        // this._testTranslationAmount[0] += this._testTranslateSpeed * Time.deltaTime;

        // this.angleInDegress += 10 * Time.deltaTime;

        // Points on a unit circle are called sine and cosine (sine = x) (cosine = y).
        let unitCircleCoordinates: any = this._convertAngleUnitCircleCoordinates(this.angleInDegress);

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
        this._drawables.forEach((drawable) => {
            // TODO: Should this be done in each iteration? Or before?
            // Enable position attribute in vertext shader. So WebGL can use the data we set in the ARRAY_BUFFER.
            this.context.enableVertexAttribArray(this._positionAttributeLocation);

            this.context.bindBuffer(this.context.ARRAY_BUFFER, drawable.buffer);

            let size: number = 3; // 2 components per iteration -> 3 for orthographic.
            let type = this.context.FLOAT; // the data is 32bit floats
            let normalize: boolean = false; // don't normalize the data
            let stride: number = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
            let offset: number = 0; // start at the beginning of the buffer
    
            this.context.vertexAttribPointer(this._positionAttributeLocation, size, type, normalize, stride, offset);

            // TODO: Should this be done in each iteration? Or before?
            // Enable position attribute in vertext shader. So WebGL can use the data we set in the ARRAY_BUFFER.
            this.context.enableVertexAttribArray(this._colorAttributeLocation);

            this.context.bindBuffer(this.context.ARRAY_BUFFER, this._colorBuffer);

            let cSize: number = 3; // 2 components per iteration -> 3 for orthographic.
            let cType = this.context.UNSIGNED_BYTE; // the data is 32bit floats
            let cNormalize: boolean = false; // don't normalize the data
            let cStride: number = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
            let cOffset: number = 0; // start at the beginning of the buffer
    
            this.context.vertexAttribPointer(this._colorAttributeLocation, cSize, cType, cNormalize, cStride, cOffset);
    
            // Set uniforms
            this.context.uniform4f(this._colorUniformLocation, 1, 1, 1, 1); // color

            // var left = 0;
            // var right = this.context.canvas.width;
            // var bottom = this.context.canvas.height;
            // var top = 0;
            // var near = 400;
            // var far = -400;
            // var matrix = Mat4.orthographic(left, right, bottom, top, near, far);

            let matrix = Mat4.projection(this.context.canvas.width, this.context.canvas.height, 400);
            matrix = Mat4.translate(matrix, this._testTranslationAmount[0], this._testTranslationAmount[1], this._testTranslationAmount[2]);
            matrix = Mat4.xRotate(matrix, this.angleInDegress * Math.PI / 180);
            matrix = Mat4.yRotate(matrix, this.angleInDegress * Math.PI / 180);
            matrix = Mat4.zRotate(matrix, this.angleInDegress * Math.PI / 180);
            matrix = Mat4.scale(matrix, this._testScaleAmount[0], this._testScaleAmount[1], this._testScaleAmount[2]);

            // Adjust origin. How does this actually adjust the rotation point? Can't seem to get it working?
            // matrix = Mat4.translate(matrix, 150, 150, 150);

            this.context.uniformMatrix4fv(this._matrixUniformLocation, false, matrix);

            let primitiveType: number = this.context.TRIANGLES;
            let drawOffset: number = 0;
            let drawCount: number = 6; // square from two triangles would be 6.
            this.context.drawArrays(primitiveType, drawOffset, drawCount);
        });
    }

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