i = 1.85;
x = 0.2;
speed = 0.01;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}

let howManyX = 20;
let howManyY = 20;
let seedNum = 0;
let noiseMult = 0.003;

function draw() {
  background(0);

  fill(255, 255, 0);
  ellipse(300, 300, 200, 200);
  fill(0);
  const dt = deltaTime * 1;
  if (i >= 2 || i <= 1.8) {
    speed = speed * -1;
  }
  arc(300, 300, 200, 200, (i += speed) * PI, (x -= speed) * PI);
}

function mousePressed() {
  noLoop();
}
function mouseReleased() {
  loop();
}
