const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const scores = document.querySelector(".score");
canvas.width = 700;
canvas.height = 700;
const sprite = new Image();
sprite.src = "assets/pc.png";

let score = 0;
const dots = [];
const powerups = [];
const boundaries = [];
let lastkey = "";
let animationID;

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

const player = new Player(
  {
    position: {
      x: mapBoundary.width + mapBoundary.width / 2,
      y: mapBoundary.height + mapBoundary.height / 2,
    },
    velocity: {
      x: 0,
      y: 0,
    },
  }
  // 1024,
  // 408,
  // 96,
  // 104
);

const ghosts = [
  new Ghost({
    position: {
      x: mapBoundary.width * 8 + mapBoundary.width / 2,
      y: mapBoundary.height + mapBoundary.height / 2,
    },
    velocity: {
      x: Ghost.speed,
      y: 0,
    },
  }),

  new Ghost({
    position: {
      x: mapBoundary.width * 12 + mapBoundary.width / 2,
      y: mapBoundary.height + mapBoundary.height / 2,
    },
    velocity: {
      x: Ghost.speed,
      y: 0,
    },
    color: "pink",
  }),

  new Ghost({
    position: {
      x: mapBoundary.width * 12 + mapBoundary.width / 2,
      y: mapBoundary.height + mapBoundary.height / 2,
    },
    velocity: {
      x: Ghost.speed,
      y: 0,
    },
    color: "cyan",
  }),
];

const keys = {
  a: {
    ispressed: false,
  },
  s: {
    ispressed: false,
  },
  w: {
    ispressed: false,
  },
  d: {
    ispressed: false,
  },
};

function play() {
  animationID = requestAnimationFrame(play);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (keys.a.ispressed && lastkey === "a") {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        collisionDetection({
          circle: { ...player, velocity: { x: -2, y: 0 } },
          rectangle: boundary,
        })
      ) {
        player.velocity.x = 0;
        break;
      } else {
        player.velocity.x = -2;
      }
    }
  } else if (keys.d.ispressed && lastkey === "d") {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        collisionDetection({
          circle: { ...player, velocity: { x: 2, y: 0 } },
          rectangle: boundary,
        })
      ) {
        player.velocity.x = 0;
        break;
      } else {
        player.velocity.x = 2;
      }
    }
  } else if (keys.w.ispressed && lastkey === "w") {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        collisionDetection({
          circle: { ...player, velocity: { x: 0, y: -2 } },
          rectangle: boundary,
        })
      ) {
        player.velocity.y = 0;
        break;
      } else {
        player.velocity.y = -2;
      }
    }
  } else if (keys.s.ispressed && lastkey === "s") {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        collisionDetection({
          circle: { ...player, velocity: { x: 0, y: 2 } },
          rectangle: boundary,
        })
      ) {
        player.velocity.y = 0;
        break;
      } else {
        player.velocity.y = 2;
      }
    }
  }

  if (dots.length === 0) {
    console.log("you win");
  }

  for (let i = dots.length - 1; i >= 0; i--) {
    const dot = dots[i];
    dot.draw();
    if (
      circleCollision({
        circle1: { ...dot },
        circle2: { ...player },
      })
    ) {
      dots.splice(i, 1);
      score += 10;
      scores.innerHTML = score;
      console.log(score);
    }
  }

  for (let i = powerups.length - 1; i >= 0; i--) {
    const powerup = powerups[i];
    powerup.draw();
    if (
      circleCollision({
        circle1: { ...powerup },
        circle2: { ...player },
      })
    ) {
      powerups.splice(i, 1);
      ghosts.forEach((ghost) => {
        ghost.scared = true;

        setTimeout(() => {
          ghost.scared = false;
        }, 5000);
      });

      score += 10;
      console.log(score);
    }
  }

  for (let i = ghosts.length - 1; i >= 0; i--) {
    const ghost = ghosts[i];
    ghost.update();
    if (
      circleCollision({
        circle1: { ...ghost },
        circle2: { ...player },
      })
    ) {
      if (ghost.scared) {
        ghosts.splice(i, 1);
      } else {
        cancelAnimationFrame(animationID);
      }
    }

    boundaries.forEach((boundary) => {
      boundary.draw();

      if (
        collisionDetection({
          circle: player,
          rectangle: boundary,
        })
      ) {
        player.velocity.x = 0;
        player.velocity.y = 0;
      }
    });

    player.update();

    const collisions = [];
    boundaries.forEach((boundary) => {
      if (
        !collisions.includes("right") &&
        collisionDetection({
          circle: {
            ...ghost,
            velocity: {
              x: ghost.speed,
              y: 0,
            },
          },

          rectangle: boundary,
        })
      ) {
        collisions.push("right");
      }

      if (
        !collisions.includes("left") &&
        collisionDetection({
          circle: {
            ...ghost,
            velocity: {
              x: -ghost.speed,
              y: 0,
            },
          },
          rectangle: boundary,
        })
      ) {
        collisions.push("left");
      }

      if (
        !collisions.includes("down") &&
        collisionDetection({
          circle: {
            ...ghost,
            velocity: {
              x: 0,
              y: ghost.speed,
            },
          },
          rectangle: boundary,
        })
      ) {
        collisions.push("down");
      }

      if (
        !collisions.includes("up") &&
        collisionDetection({
          circle: {
            ...ghost,
            velocity: {
              x: 0,
              y: -ghost.speed,
            },
          },
          rectangle: boundary,
        })
      ) {
        collisions.push("up");
      }
    });
    // console.log(collisions);

    if (collisions.length > ghost.ghostPrevCollisions.length) {
      ghost.ghostPrevCollisions = collisions;
    }

    if (
      JSON.stringify(ghost.ghostPrevCollisions) !== JSON.stringify(collisions)
    ) {
      if (ghost.velocity.x > 0) {
        ghost.ghostPrevCollisions.push("right");
      } else if (ghost.velocity.x < 0) {
        ghost.ghostPrevCollisions.push("left");
      } else if (ghost.velocity.y > 0) {
        ghost.ghostPrevCollisions.push("down");
      } else if (ghost.velocity.y < 0) {
        ghost.ghostPrevCollisions.push("up");
      }

      const path = ghost.ghostPrevCollisions.filter((collision) => {
        return !collisions.includes(collision);
      });

      const direction = path[Math.floor(Math.random() * path.length)];

      switch (direction) {
        case "up":
          ghost.velocity.y = -ghost.speed;
          ghost.velocity.x = 0;
          break;

        case "down":
          ghost.velocity.y = ghost.speed;
          ghost.velocity.x = 0;
          break;

        case "right":
          ghost.velocity.y = 0;
          ghost.velocity.x = ghost.speed;
          break;

        case "left":
          ghost.velocity.y = 0;
          ghost.velocity.x = -ghost.speed;
          break;
      }
      ghost.ghostPrevCollisions = [];
    }
  }
}

play();

addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "a":
      keys.a.ispressed = true;
      player.rotation = Math.PI;
      lastkey = "a";
      break;

    case "d":
      keys.d.ispressed = true;
      player.rotation = 0;
      lastkey = "d";
      break;

    case "w":
      keys.w.ispressed = true;
      player.rotation = Math.PI * 1.5;
      lastkey = "w";
      break;

    case "s":
      keys.s.ispressed = true;
      player.rotation = Math.PI / 2;
      lastkey = "s";
  }
});

addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "a":
      keys.a.ispressed = false;
      break;

    case "d":
      keys.d.ispressed = false;
      break;

    case "w":
      keys.w.ispressed = false;
      break;

    case "s":
      keys.s.ispressed = false;
  }
});
