class Fruit {
  constructor(dots, spriteX, spriteY, width, height) {
    const dotPos = Math.floor(Math.random() * dots.length);
    this.position = {
      x: dots[dotPos].position.x,
      y: dots[dotPos].position.y,
    };
    this.x = dots[dotPos].x;
    this.y = dots[dotPos].y;
    this.spriteX = spriteX;
    this.spriteY = spriteY;
    this.width = width;
    this.height = height;
    this.radius = 4;
  }

  draw() {
    ctx.drawImage(
      sprite,
      this.spriteX,
      this.spriteY,
      this.width,
      this.height,
      this.position.x - 8,
      this.position.y - 8,
      20,
      20
    );
  }
}
