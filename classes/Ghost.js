class Ghost {
  static speed = 2;

  constructor({ position, velocity, spriteX, spriteY, width, height }) {
    this.position = position;
    this.velocity = velocity;
    this.spriteX = spriteX;
    this.spriteY = spriteY;
    this.width = width;
    this.height = height;
    this.radius = 13;
    this.ghostPrevCollisions = [];
    this.speed = 2;
    this.scared = false;
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

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
