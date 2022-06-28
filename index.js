let score = 0;
let ghosts = [];
let lastkey = "";
let animationID;

const player = new Player({
  position: {
    x: mapBoundary.width + mapBoundary.width / 2,
    y: mapBoundary.height + mapBoundary.height / 2,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  speed: 2,
});

ghosts = [
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

function handlePlayerControls() {
  // Handle Controls for player1
  if (keys.a.ispressed && lastkey === "a") {
    player.handleLeftMovement();
  } else if (keys.d.ispressed && lastkey === "d") {
    player.handleRightMovement();
  } else if (keys.w.ispressed && lastkey === "w") {
    player.handleTopMovement();
  } else if (keys.s.ispressed && lastkey === "s") {
    player.handleBottomMovement();
  }
}

function playerBoundaryCollisionCheck() {
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
}

function checkWin() {
  if (dots.length === 0) {
    console.log("you win");
  }
}

function updateScore() {
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
    }
  }
}

function createPowerUps() {
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
        let prevX;
        let prevY;
        ghost.scared = true;
        prevX = ghost.spriteX;
        prevY = ghost.spriteY;
        ghost.spriteX = 1138;
        ghost.spriteY = 1433;

        setTimeout(() => {
          ghost.scared = false;
          ghost.spriteX = prevX;
          ghost.spriteY = prevY;
        }, 10000);
      });

      score += 10;
    }
  }
}

function handleGhost() {
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

function play() {
  // Creates the animation loop
  animationID = requestAnimationFrame(play);

  // Refreshes the screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Handles all the player controls
  handlePlayerControls();

  //checks if player collides with the map boundary
  playerBoundaryCollisionCheck();

  // Checks if player has won the game (if every dots in the game are eaten)
  checkWin();

  // Updates the player score
  updateScore();

  // Creates power-ups dots
  createPowerUps();

  // Handles all the ghost movement
  handleGhost();

  // Updates player position
  player.update();
}

play();

addListeners();
