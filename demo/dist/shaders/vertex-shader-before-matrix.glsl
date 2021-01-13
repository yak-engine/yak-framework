  attribute vec2 a_position;
 
  uniform vec2 u_resolution;
  uniform vec2 u_translation;
  uniform vec2 u_rotation;
  uniform vec2 u_scale;
 
  void main() {
    // Scale then rotate then translate.

    vec2 scaledPosition = a_position * u_scale;

    // Rotate the position using a unit circle
    vec2 rotatedPosition = vec2(
     scaledPosition.x * u_rotation.y + scaledPosition.y * u_rotation.x,
     scaledPosition.y * u_rotation.y - scaledPosition.x * u_rotation.x
    );

    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = (rotatedPosition + u_translation) / u_resolution;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;
 
    // normalize the pixel coordinates origin to be 0,0 in the top left corner
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  }