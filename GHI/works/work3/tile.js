let obj;
let y = 0;
let angle = 0;

function preload() {
  obj = loadModel("./pack.obj");
  obj = loadModel("./pack.obj");
}

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height, WEBGL);
  canvas.parent("p5Canvas");
  frameRate(24);
}

function draw() {
  pointLight(0, 0, 255, mouseX - 200, mouseY - 200, 200);
  pointLight(255, 0, 0, mouseX + 100, mouseY + 100, 200);

  background(0);
  scale(4, 4);
  rotateX(angle * 0.3);
  rotateY(angle * 0.3);
  rotateZ(angle * 0.3);
  normalMaterial();
  translate(0, -80, 0);
  ambientMaterial(255, 255, 225);
  model(obj);

  angle += 0.07;
}
