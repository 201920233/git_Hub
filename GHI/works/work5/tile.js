let bg;
let col = 0;

function preload() {
  bg = loadImage("./ghost.png");
}

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  background(bg);
}

function draw() {
  if (mouseIsPressed) {
    fill(col);
    noStroke();
    circle(mouseX, mouseY, 30);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    col = 200;
  } else if (keyCode === RIGHT_ARROW) {
    col = 0;
  }
}
