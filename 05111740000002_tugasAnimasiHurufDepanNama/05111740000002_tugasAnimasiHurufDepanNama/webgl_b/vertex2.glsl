precision mediump float;

attribute vec2 vPosition;
attribute vec3 vColor;
varying vec3 fColor;
//uniform float theta;
uniform float scale;


//segitga 0.6,0.1
void main() {
  fColor = vColor;
  gl_Position = vec4(vPosition, 0.0, 1.0);
  // p' = p
  // p' = T * p

  mat4 toOrigin = mat4(
    1.0, 0.0, 0.0, -0.6,   // dx = 0.5
    0.0, 1.0, 0.0, -0.1,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
  gl_Position = gl_Position * toOrigin;

  mat4 skalasi = mat4(
    scale, 0.0, 0.0, 0.1,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
  gl_Position = gl_Position * skalasi;


mat4 kembali = mat4(
    1.0, 0.0, 0.0, +0.6,   // dx = 0.5
    0.0, 1.0, 0.0, +0.1,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
  gl_Position = gl_Position * kembali;


  /*
  mat4 translasi = mat4(
    1.0, 0.0, 0.0, 0.5,   // dx = 0.5
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
  gl_Position = vec4(vPosition, 0.0, 1.0) * translasi;
  
  mat4 rotasi = mat4(
    cos(theta), -sin(theta), 0.0, 0.0,
    sin(theta), cos(theta), 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
  gl_Position = gl_Position * rotasi;
  */

}
