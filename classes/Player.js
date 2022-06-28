class Player {
  constructor({ position, velocity, speed }) {
    this.position = position;
    this.velocity = velocity;
    this.speed = speed;
    this.radius = 9;
    this.radians = 0.9;
    this.open = 0.05;
    this.rotation = 0;
  }
  draw() {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.rotation);
    ctx.translate(-this.position.x, -this.position.y);
    ctx.beginPath();
    ctx.arc(
      this.position.x,
      this.position.y,
      this.radius,
      this.radians,
      Math.PI * 2 - this.radians
    );
    ctx.lineTo(this.position.x, this.position.y);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  /**
   * Checks collision with boundary and stops the player if collided
   *
   */

  handleLeftMovement() {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        collisionDetection({
          circle: { ...this, velocity: { x: -this.speed, y: 0 } },
          rectangle: boundary,
        })
      ) {
        this.velocity.x = 0;
        break;
      } else {
        this.velocity.x = -this.speed;
      }
    }
  }

  handleRightMovement() {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        collisionDetection({
          circle: { ...this, velocity: { x: this.speed, y: 0 } },
          rectangle: boundary,
        })
      ) {
        this.velocity.x = 0;
        break;
      } else {
        this.velocity.x = this.speed;
      }
    }
  }

  handleTopMovement() {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        collisionDetection({
          circle: { ...this, velocity: { x: 0, y: -this.speed } },
          rectangle: boundary,
        })
      ) {
        this.velocity.y = 0;
        break;
      } else {
        this.velocity.y = -this.speed;
      }
    }
  }

  handleBottomMovement() {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        collisionDetection({
          circle: { ...this, velocity: { x: 0, y: this.speed } },
          rectangle: boundary,
        })
      ) {
        this.velocity.y = 0;
        break;
      } else {
        this.velocity.y = this.speed;
      }
    }
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.radians < 0 || this.radians > 0.9) {
      this.open = -this.open;
    }
    this.radians += this.open;
  }
}
