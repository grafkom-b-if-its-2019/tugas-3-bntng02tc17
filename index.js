(function() {

  glUtils.SL.init({ callback: function() { main(); } });

  function main() {
    var canvas = document.getElementById("glcanvas");
    var gl = glUtils.checkWebGL(canvas);
  
    // Inisialisasi shaders dan program
    var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex);
    var fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);
    var program = glUtils.createProgram(gl, vertexShader, fragmentShader);

    var vertexShader2 = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v2.vertex);
    var fragmentShader2 = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v2.fragment);
    var program2 = glUtils.createProgram(gl, vertexShader2, fragmentShader2);
  


    function garis()
    {
      gl.useProgram(program);

      // Definisi verteks dan buffer
    var lineVertices = [
      // x, y       r, g, b
      -0.6,0.4,     1.0, 1.0, 0.0,
      -0.5,0.4,     0.7, 0.0, 1.0,
      -0.4,0.4,     0.1, 1.0, 0.6,
      -0.4,0.214,   1.0, 1.0, 0.0,
      -0.5,0.1,     0.7, 0.0, 1.0,
      -0.4,0.0,     0.1, 1.0, 0.6,
      -0.4,-0.1,    1.0, 1.0, 0.0,
      -0.5,-0.2,    0.7, 0.0, 1.0,
      -0.8,-0.2,    0.1, 1.0, 0.6,
      -0.8,-0.1,    1.0, 1.0, 0.0,
      -0.5,-0.1,    0.7, 0.0, 1.0,
      -0.5,0.0,     0.1, 1.0, 0.6,
      -0.6,0.1,     1.0, 1.0, 0.0,
      -0.5,0.2,     0.7, 0.0, 1.0,
      -0.5,0.3,     0.1, 1.0, 0.6,
      -0.7,0.3,     1.0, 1.0, 0.0,
      -0.7,-0.1,    0.7, 0.0, 1.0,
      -0.8,-0.1,    0.1, 1.0, 0.6,
      -0.8,0.4,     1.0, 1.0, 0.0,
      -0.6,0.4,     0.7, 0.0, 1.0
    ];

    var lineVertexBufferObject = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, lineVertexBufferObject);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lineVertices), gl.STATIC_DRAW);

    var vPosition = gl.getAttribLocation(program, 'vPosition');
    var vColor = gl.getAttribLocation(program, 'vColor');
    gl.vertexAttribPointer(
      vPosition,  // variabel yang memegang posisi attribute di shader
      2,          // jumlah elemen per attribute
      gl.FLOAT,   // tipe data atribut
      gl.FALSE,
      5 * Float32Array.BYTES_PER_ELEMENT, // ukuran byte tiap verteks 
      0                                   // offset dari posisi elemen di array
    );
    gl.vertexAttribPointer(vColor, 3, gl.FLOAT, gl.FALSE, 
      5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);

    gl.enableVertexAttribArray(vPosition);
    gl.enableVertexAttribArray(vColor);


   
    theta = theta + Math.PI * 0.0002
    gl.uniform1f(thetaLoc, theta);

    }

    function segitiga()
    {
      gl.useProgram(program2);

      // Definisi verteks dan buffer
    var triangleVertices = [
      // x, y       r, g, b
      0.4,0.4,     0.1, 1.0, 0.6, 
      0.7,0.4,      0.7, 0.0, 1.0,
      0.4,0.3,      1.0, 1.0, 0.0,//puv
      0.7,0.4,      0.1, 1.0, 0.6,
      0.4,0.3,      0.7, 0.0, 1.0,
      0.7,0.3,      0.7, 0.0, 1.0,//uvz
      0.7,0.4,      0.1, 1.0, 0.6,
      0.7,0.3,      0.7, 0.0, 1.0,
      0.8,0.3,      0.1, 1.0, 0.6,//uza1
      0.7,0.3,      0.1, 1.0, 0.6,
      0.8,0.3,      0.7, 0.0, 1.0,
      0.8,0.2,      1.0, 1.0, 0.0, //za1b1
      0.7,0.3,      0.1, 1.0, 0.6,
      0.8,0.2,      0.7, 0.0, 1.0,
      0.7,0.2,      0.7, 0.0, 1.0,//zc1b1
      0.7,0.2,      0.1, 1.0, 0.6,
      0.8,0.2,      0.7, 0.0, 1.0,
      0.7,0.1,      0.1, 1.0, 0.6,//c1b1d1
      0.7,0.2,      0.1, 1.0, 0.6,
      0.6,0.1,      0.7, 0.0, 1.0,
      0.7,0.0,      1.0, 1.0, 0.0, //c1e1f1
      0.7,0.1,      0.1, 1.0, 0.6,
      0.7,0.0,      0.7, 0.0, 1.0,
      0.8,0.0,      0.7, 0.0, 1.0,//d1f1g1
      0.7,0.0,      0.1, 1.0, 0.6,
      0.8,0.0,      0.7, 0.0, 1.0,
      0.7,-0.1,     0.1, 1.0, 0.6,//f1g1h1
      0.8,0.0,      0.1, 1.0, 0.6,
      0.7,-0.1,     0.7, 0.0, 1.0,
      0.8,-0.1,    1.0, 1.0, 0.0,//g1h1i1
      0.7,-0.1,    0.1, 1.0, 0.6,
      0.8,-0.1,   0.7, 0.0, 1.0,
      0.7,-0.2,   0.7, 0.0, 1.0, //h1i1j1
      0.7,-0.1,   0.1, 1.0, 0.6,
      0.7,-0.2,   0.7, 0.0, 1.0,
      0.4,-0.2,   0.1, 1.0, 0.6,//h1j1k1
      0.7,-0.1,   0.1, 1.0, 0.6,
      0.4,-0.2,   0.7, 0.0, 1.0,
      0.4,-0.1,   1.0, 1.0, 0.0, //h1k1l1
      0.4,0.3,    0.1, 1.0, 0.6,
      0.5,0.3,      0.7, 0.0, 1.0,
      0.4,-0.1,     0.7, 0.0, 1.0,//vm1l1
      0.4,-0.1,     0.1, 1.0, 0.6,
      0.5,-0.1,   0.7, 0.0, 1.0,
      0.5,0.3,    0.1, 1.0, 0.6,//l1n1m1
    ];

    var triangleVertexBufferObject = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);

    var vPosition = gl.getAttribLocation(program2, 'vPosition');
    var vColor = gl.getAttribLocation(program2, 'vColor');
    gl.vertexAttribPointer(
      vPosition,  // variabel yang memegang posisi attribute di shader
      2,          // jumlah elemen per attribute
      gl.FLOAT,   // tipe data atribut
      gl.FALSE,
      5 * Float32Array.BYTES_PER_ELEMENT, // ukuran byte tiap verteks 
      0                                   // offset dari posisi elemen di array
    );
    gl.vertexAttribPointer(vColor, 3, gl.FLOAT, gl.FALSE, 
      5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);

    gl.enableVertexAttribArray(vPosition);
    gl.enableVertexAttribArray(vColor);


    if (scale >= 1) membesar = -1;
    else if (scale <= -1) membesar = 1;
    scale = scale + (membesar * 0.0002);
    gl.uniform1f(scaleLoc, scale);

    }





    var thetaLoc = gl.getUniformLocation(program, 'theta');
    var theta = 0;
    var scale = 1;
    var scaleLoc = gl.getUniformLocation(program2, 'scale');
    
    var membesar = 1;

    function render() {
      // Bersihkan layar jadi hitam
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      
      // theta += Math.PI * 0.001
      // gl.uniform1f(thetaLoc, theta);

     

      // Bersihkan buffernya canvas
      gl.clear(gl.COLOR_BUFFER_BIT);

      garis();
      gl.drawArrays(gl.LINE_LOOP, 0, 20);
    
      segitiga();
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 45);
      
      requestAnimationFrame(render); 
    }
    render();

    //segitga 0.6,0.1
  }

})();
