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
