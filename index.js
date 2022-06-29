let score = 0;
let lastkey = "";
let animationID;
let fruits = [];
let speedfruits = [];
let frames = 0;
let ghosts = [];
let lives = 3;
let game_over = false;
let deadGhosts = [];

ghosts = [
  new Ghost({
    position: {
      x: mapBoundary.width * 10 + mapBoundary.width / 2,
      y: mapBoundary.height * 9 + mapBoundary.height / 2,
    },
    velocity: {
      x: Ghost.speed,
      y: 0,
    },
    spriteX: 835,
    spriteY: 524,
    width: 58,
    height: 66,
  }),

  new Ghost({
    position: {
      x: mapBoundary.width * 10 + mapBoundary.width / 2,
      y: mapBoundary.height * 9 + mapBoundary.height / 2,
    },
    velocity: {
      x: Ghost.speed,
      y: 0,
    },
    spriteX: 936,
    spriteY: 524,
    width: 58,
    height: 66,
  }),
];

function handlePlayerControls() {
  // Handle Controls for player1
  if (keys.a.ispressed && lastkey === "a") {
    players[0].handleLeftMovement();
  } else if (keys.d.ispressed && lastkey === "d") {
    players[0].handleRightMovement();
  } else if (keys.w.ispressed && lastkey === "w") {
    players[0].handleTopMovement();
  } else if (keys.s.ispressed && lastkey === "s") {
    players[0].handleBottomMovement();
  }

  // Handle Controls for player2
  if (players.length > 1) {
    if (keys.ArrowLeft.ispressed && lastkey === "ArrowLeft") {
      players[1].handleLeftMovement();
    } else if (keys.ArrowRight.ispressed && lastkey === "ArrowRight") {
      players[1].handleRightMovement();
    } else if (keys.ArrowUp.ispressed && lastkey === "ArrowUp") {
      players[1].handleTopMovement();
    } else if (keys.ArrowDown.ispressed && lastkey === "ArrowDown") {
      players[1].handleBottomMovement();
    }
  }
}

function checkWin() {
  if (dots.length === 0) {
    console.log("you win");
  }
}

function updateScore() {
  players.forEach((player) => {
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
  });
}

function createPowerUps() {
  players.forEach((player) => {
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
          ghost.spriteX = 1138;
          ghost.spriteY = 1433;

          setTimeout(() => {
            ghost.scared = false;
            ghost.spriteX = ghost.defaultSpriteX;
            ghost.spriteY = ghost.defaultSpriteY;
          }, 10000);
        });

        score += 10;
      }
    }
  });
}

function playerBoundaryCollisionCheck() {
  players.forEach((player) => {
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
  });
}

function handleGhostPlayerCollision(ghost, player) {
  if (
    circleCollision({
      circle1: { ...ghost },
      circle2: { ...player },
    })
  ) {
    if (ghost.scared) {
      // pushes the ghost to the deadGhosts array
      deadGhosts.push(ghosts.splice(i, 1)[0]);

      // Revives the ghost after 5000 seconds
      setTimeout(() => {
        ghosts.push(
          new Ghost({
            position: {
              x: mapBoundary.width * 10 + mapBoundary.width / 2,
              y: mapBoundary.height * 9 + mapBoundary.height / 2,
            },
            velocity: {
              x: Ghost.speed,
              y: 0,
            },
            spriteX: deadGhosts[0].defaultSpriteX,
            spriteY: deadGhosts[0].defaultSpriteY,

            width: 58,
            height: 66,
          })
        );
        // Removes the dead ghost from the array
        deadGhosts.shift();
      }, 5000);
    } else {
      lives -= 1;
      lifes[lives].remove();

      // lifes.shift();
      player.position.x = mapBoundary.width * 10 + mapBoundary.width / 2;
      player.position.y = mapBoundary.height * 9 + mapBoundary.height / 2;
      player.velocity = {
        x: 0,
        y: 0,
      };
      if (lives === 0) {
        cancelAnimationFrame(animationID);
        // gameOver.classList.remove("hide");
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Game Over!", canvas.width / 2.5, canvas.height / 2);
      }
    }
  }
}

function checkGhostBoundaryCollision(ghost, boundaries) {
  const collisions = [];
  boundaries.forEach((boundary) => {
    // If there is no right collision previsouly detected then check for a right collision
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

    // If there is no lef collision previsouly detected then check for a left collision
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

    // If there is no down collision previsouly detected then check for a down collision
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

    // If there is no upward collision previsouly detected then check for a upward collision
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
  return collisions;
}

function handleGhost() {
  ghosts.forEach((ghost) => {
    ghost.update();

    players.forEach((player) => {
      //collision check for the rqandom movement of ghost
      handleGhostPlayerCollision(ghost, player);

      const collisions = checkGhostBoundaryCollision(ghost, boundaries);
      if (collisions.length > ghost.ghostPrevCollisions.length) {
        ghost.ghostPrevCollisions = collisions;
      }

      ghost.switchDirection(collisions);
    });
  });
}

// Creates fruit at random location after every 2000 frames are passed
function createFruits() {
  if (frames % 2000 === 0) {
    // Creates fruit every 2000 frames is passed
    fruits.push(new Fruit(dots, 1324, 1215, 90, 100));

    // Removes the fruit after 8 seconds
    setTimeout(() => {
      fruits.splice(0, 1);
    }, 8000);
  }

  // Checks if the player has collided with the fruit and adds 100 points
  // to the score if the player has collided with the fruit
  players.forEach((player) => {
    fruits.forEach((fruit) => {
      fruit.draw();
      if (
        circleCollision({
          circle1: { ...fruit },
          circle2: { ...player },
        })
      ) {
        fruits.splice(0, 1);
        score += 100;
        scores.innerHTML = score;
      }
    });
  });
}

// Creates fruit that increase the speed of player at random location after every 8000 frames are passed
function createSpeedFruits() {
  if (frames % 2000 === 0) {
    // Creates fruit every 2000 frames is passed
    speedfruits.push(new SpeedFruit(dots, 1236, 4, 64, 98));

    // Removes the fruit after 10 seconds
    setTimeout(() => {
      speedfruits.splice(0, 1);
    }, 10000);
  }

  // Checks if the player has collided with the fruit and increase speed
  players.forEach((player) => {
    speedfruits.forEach((speedfruit) => {
      speedfruit.draw();
      if (
        circleCollision({
          circle1: { ...speedfruit },
          circle2: { ...player },
        })
      ) {
        // Removes the fruit from the canvas
        speedfruits.splice(0, 1);

        // Increases the player speed
        player.speed = 3;

        // Resets the player speed after 8 seconds
        setTimeout(() => {
          player.speed = 2;
        }, 8000);
        // score += 100;
        // scores.innerHTML = score;
      }
    });
  });
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

  // Creates fruits every 2000 frames is passed
  createFruits();

  //create speed fruits every 8000 frames is passed
  createSpeedFruits();

  // Updates player position
  players.forEach((player) => {
    player.update();
  });

  // Increases frames by 1
  frames++;
}

addListeners();
