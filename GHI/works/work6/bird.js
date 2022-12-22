class Bird {
  constructor(x, y, r) {
    this.body = Matter.Bodies.circle(x, y, r);
    this.r = r;
    Matter.World.add(world, this.body);
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(dotImg, 0, 0, this.r * 2, this.r * 2);
    pop();
  }
}
