precision mediump float;

varying vec2 v_texcoord;

uniform sampler2D u_texture;

void() {
    gl_FragColor = texture2D(u_texture, v_texcoord);
}