i = 1.85;
x = 0.2;
speed = 0.01;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  fill(255, 255, 0);
  ellipse(300, 300, 200, 200);
  fill(0);
  const dt = deltaTime * 1;
  if (i >= 2 || i <= 1.8) {
    speed = speed * -1;
  }
  arc(300, 300, 200, 200, (i += speed) * PI, (x -= speed) * PI);
}
