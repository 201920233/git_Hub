let img;
let wd = 600;
let ht = 600;

function preload() {
  img = loadImage("./pack.png");
}

function setup() {
  wd = img.width;
  ht = img.height;
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  for (let i = 0; i < 10; i++) {
    let x = floor(random(img.width));
    let y = floor(random(img.height));
    let pix = img.get(x, y);
    fill(pix, 128);
    rect(x, y, 7, 7);
  }
}

function keyPressed() {
  if (keyCode == 83) {
    console.log("got here");
    save("myCanvas.jpg");
  }
}
