class Dots {
  constructor({ position }) {
    this.position = position;
    this.radius = 2;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.closePath();
  }
}
