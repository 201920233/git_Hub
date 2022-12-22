let Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

let score = 0;
let engine;
let world;
let boxes = [];
let img;
let ground;
i = 1.85;
x = 0.2;
speed = 0.01;

function preload() {
  img = loadImage("123.png");
}

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  engine = Engine.create();
  world = engine.world;
  let options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(200, height, width, 100, options);
}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
  score += 1;
}

function draw() {
  background(51);
  Engine.update(engine);
  fill(255, 255, 0);
  ellipse(300, 700, 600, 600);
  fill(51);
  arc(300, 400, 400, 400, TWO_PI, PI);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  noStroke(255);
  fill(170);
  rectMode(CENTER);

  textSize(20);
  text("Score: " + score, 20, 40);
}
