class mapBoundary {
  static width = 26;
  static height = 26;
  constructor({ position, image }) {
    this.position = position;
    this.width = 26;
    this.height = 26;
    this.image = image;
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
