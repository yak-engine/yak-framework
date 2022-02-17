// Local imports.
import Camera from 'src/lib/graphics/camera';

/**
 * Camera component allows the user to see the rendered output.
 * 
 * @privateRemarks
 * 
 * TODO: Currently only one camera instance is supported in a project save file.
 */
export class CameraComponent {
    constructor(public camera?: Camera) {
 
    }
}