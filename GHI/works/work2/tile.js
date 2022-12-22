let x = 1;
let y = 1;
let easing = 0.05;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(0);
  fill(r, g, b, 127);
  arc(300, 300, 500, 500, PI, TWO_PI);
  rect(50, 300, 500, 200);
  triangle(50, 500, 50, 600, 150, 500);
  triangle(150, 500, 200, 600, 250, 500);
  triangle(250, 500, 300, 600, 350, 500);
  triangle(350, 500, 400, 600, 450, 500);
  triangle(450, 500, 550, 600, 550, 500);
  noStroke();

  fill(255);
  circle(210, 250, 120);
  circle(390, 250, 120);

  let targetX = mouseX;

  let targetY = mouseY;

  let mx = constrain(targetX, 180, 240);
  let my = constrain(targetY, 220, 280);
  let mx1 = constrain(targetX, 360, 420);
  let my2 = constrain(targetY, 220, 280);

  fill(0);
  ellipse(mx1, my2, 33, 33);
  ellipse(mx, my, 33, 33);
}
