let obj;
let y = 0;
let angle = 0;

function preload() {
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
  pointLight(0, 0, 255, mouseX - 200, mouseY - 200, 300);
  pointLight(255, 0, 0, mouseX + 100, mouseY + 100, 300);
  background(0);

  let rp = 50;

  for (let x = rp; x <= width - rp; x += rp) {
    for (let y = rp; y <= height - rp; y += rp) {
      scale(1, 1);
      rotateX(angle * 0.3);
      rotateY(angle * 0.3);
      rotateZ(angle * 0.3);
      normalMaterial();
      translate(0, 70, 0);
      ambientMaterial(255, 255, 225);
      model(obj);
      angle += 0.0004;
    }
  }
}
