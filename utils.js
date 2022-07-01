function circleCollision({ circle1, circle2 }) {
  return (
    Math.hypot(
      circle1.position.x - circle2.position.x,
      circle1.position.y - circle2.position.y
    ) <
    circle1.radius + circle2.radius
  );
}

function collisionDetection({ circle, rectangle }) {
  const padding = mapBoundary.width / 2 - circle.radius - 1;
  return (
    circle.position.y - circle.radius + circle.velocity.y <=
      rectangle.position.y + rectangle.height + padding &&
    circle.position.x + circle.radius + circle.velocity.x >=
      rectangle.position.x - padding &&
    circle.position.y + circle.radius + circle.velocity.y >=
      rectangle.position.y - padding &&
    circle.position.x - circle.radius + circle.velocity.x <=
      rectangle.position.x + rectangle.width + padding
  );
}

function createImage(src) {
  const image = new Image();
  image.src = src;
  return image;
}

function displayLevelCompleted() {
  ctx.font = "50px Big Shoulders Display";
  ctx.fillStyle = "yellow";
  ctx.textAlign = "center";
  ctx.fillText("Level Completed!", canvas.width / 2.5, canvas.height / 2);
}

function displayGameOver() {
  ctx.font = "50px Big Shoulders Display";
  ctx.fillStyle = "yellow";
  ctx.textAlign = "center";
  ctx.fillText("You Win!", canvas.width / 2.5, canvas.height / 2);
}
