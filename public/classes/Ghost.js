class Ghost {
  static speed = 1;

  constructor({ position, velocity, spriteX, spriteY, width, height }) {
    this.position = position;
    this.velocity = velocity;
    this.spriteX = spriteX;
    this.spriteY = spriteY;
    this.width = width;
    this.height = height;
    this.radius = 13;
    this.ghostPrevCollisions = [];
    this.speed = 1;
    this.scared = false;

    this.defaultSpriteX = this.spriteX;
    this.defaultSpriteY = this.spriteY;
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

  switchDirection(collisions) {
    if (
      JSON.stringify(this.ghostPrevCollisions) !== JSON.stringify(collisions)
    ) {
      if (this.velocity.x > 0) {
        this.ghostPrevCollisions.push("right");
      } else if (this.velocity.x < 0) {
        this.ghostPrevCollisions.push("left");
      } else if (this.velocity.y > 0) {
        this.ghostPrevCollisions.push("down");
      } else if (this.velocity.y < 0) {
        this.ghostPrevCollisions.push("up");
      }

      const path = this.ghostPrevCollisions.filter((collision) => {
        return !collisions.includes(collision);
      });

      const direction = path[Math.floor(Math.random() * path.length)];

      switch (direction) {
        case "up":
          this.velocity.y = -this.speed;
          this.velocity.x = 0;
          break;

        case "down":
          this.velocity.y = this.speed;
          this.velocity.x = 0;
          break;

        case "right":
          this.velocity.y = 0;
          this.velocity.x = this.speed;
          break;

        case "left":
          this.velocity.y = 0;
          this.velocity.x = -this.speed;
          break;
      }
      this.ghostPrevCollisions = [];
    }
  }
}
