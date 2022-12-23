const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
const boxes = [];
let bird;
let s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;
let gravity = 9.0;
let mass = 2.0;
let img;
let world, engine;

function preload() {
  img = loadImage("123.png");
  dotImg = loadImage("Pacman.png");
  backImg = loadImage("back.png");
}

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 60);
  fill(255, 126);
  s1 = new Spring2D(0.0, width / 2, mass, gravity);
  s2 = new Spring2D(0.0, width / 2, mass, gravity);
  s3 = new Spring2D(0.0, width / 2, mass, gravity);
  s4 = new Spring2D(0.0, width / 2, mass, gravity);
  s5 = new Spring2D(0.0, width / 2, mass, gravity);
  s6 = new Spring2D(0.0, width / 2, mass, gravity);
  s7 = new Spring2D(0.0, width / 2, mass, gravity);
  s8 = new Spring2D(0.0, width / 2, mass, gravity);
  s9 = new Spring2D(0.0, width / 2, mass, gravity);
  s10 = new Spring2D(0.0, width / 2, mass, gravity);
  s11 = new Spring2D(0.0, width / 2, mass, gravity);
  bird = new Bird(150, 300, 40);

  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse,
  };
  mConstraint = MouseConstraint.create(engine);
  World.add(world, mConstraint);
}
function mousePressed() {
  World.remove(world, bird.body);
  bird = new Bird(mouseX, mouseY, 40);
  slingshot.attach(bird.body);
}

function draw() {
  background(backImg);
  s1.update(width / 2, 0);
  s1.display(width / 2, 0);
  s2.update(s1.x, s1.y);
  s2.display(s1.x, s1.y);
  s3.update(s2.x, s2.y);
  s3.display(s2.x, s2.y);
  s4.update(s3.x, s3.y);
  s4.display(s3.x, s3.y);
  s5.update(s4.x, s4.y);
  s5.display(s4.x, s4.y);
  s6.update(s5.x, s5.y);
  s6.display(s5.x, s5.y);
  s7.update(s6.x, s6.y);
  s7.display(s6.x, s6.y);
  s8.update(s7.x, s7.y);
  s8.display(s7.x, s7.y);
  s9.update(s8.x, s8.y);
  s9.display(s8.x, s8.y);
  s10.update(s9.x, s9.y);
  s10.display(s9.x, s9.y);
  s11.update(s10.x, s10.y);
  s11.display(s10.x, s10.y);
  Matter.Engine.update(engine);
  ground.show();
  bird.show();
}

function Spring2D(xpos, ypos, m, g) {
  this.x = xpos; // x 와 y 좌표
  this.y = ypos;
  this.vx = 0; // x축과 y축 속도
  this.vy = 0;
  this.mass = m;
  this.gravity = g;
  this.radius = 20;
  this.stiffness = 0.2;
  this.damping = 0.7;

  this.update = function (targetX, targetY) {
    let forceX = (targetX - this.x) * this.stiffness;
    let ax = forceX / this.mass;
    this.vx = this.damping * (this.vx + ax);
    this.x += this.vx;
    let forceY = (targetY - this.y) * this.stiffness;
    forceY += this.gravity;
    let ay = forceY / this.mass;
    this.vy = this.damping * (this.vy + ay);
    this.y += this.vy;
  };

  this.display = function (nx, ny) {
    noStroke();
    image(img, this.x, this.y, this.radius * 2, this.radius * 2);
    stroke(255);
    //line(this.x, this.y, nx, ny);
  };
}
