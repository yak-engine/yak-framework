attribute vec4 a_position;
attribute vec2 a_texcoord;

uniform mat4 u_matrix;

varying vec2 v_texcoord;

void() {
    gl_position = u_matrix * a_position;
    v_texcoord = a_texcoord;
}