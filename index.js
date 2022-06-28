let score = 0;
let lastkey = "";
let animationID;
let fruits = [];
let speedfruits = [];
let frames = 0;
let ghosts = [];
let lives = 3;
let game_over = false;

const player = new Player({
  position: {
    x: mapBoundary.width * 10 + mapBoundary.width / 2,
    y: mapBoundary.height * 13 + mapBoundary.height / 2,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  speed: 2,
});

// const player2 = new Player({
//   position: {
//     x: mapBoundary.width * 2 + mapBoundary.width / 2,
//     y: mapBoundary.height + mapBoundary.height / 2,
//   },
//   velocity: {
//     x: 0,
//     y: 0,
//   },
//   speed: 2,
// });

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
    player.handleLeftMovement();
  } else if (keys.d.ispressed && lastkey === "d") {
    player.handleRightMovement();
  } else if (keys.w.ispressed && lastkey === "w") {
    player.handleTopMovement();
  } else if (keys.s.ispressed && lastkey === "s") {
    player.handleBottomMovement();
  }

  // Handle Controls for player2
  // if (keys.ArrowLeft.ispressed && lastkey === "ArrowLeft") {
  //   player2.handleLeftMovement();
  // } else if (keys.ArrowRight.ispressed && lastkey === "ArrowRight") {
  //   player2.handleRightMovement();
  // } else if (keys.ArrowUp.ispressed && lastkey === "ArrowUp") {
  //   player2.handleTopMovement();
  // } else if (keys.ArrowDown.ispressed && lastkey === "ArrowDown") {
  //   player2.handleBottomMovement();
  // }
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
      //   ||
      //   circleCollision({
      //     circle1: { ...dot },
      //     circle2: { ...player2 },
      //   })
      // )
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
      //  ||
      // circleCollision({
      //   circle1: { ...powerup },
      //   circle2: { ...player2 },
      // })
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

    // if (
    //   collisionDetection({
    //     circle: player2,
    //     rectangle: boundary,
    //   })
    // ) {
    //   player2.velocity.x = 0;
    //   player2.velocity.y = 0;
    // }
  });
}

// function playerGhostCollisionCheck({ ghost }) {
//   if (
//     circleCollision({
//       circle1: { ...ghost },
//       circle2: { ...player },
//     })
//     // ||
//     // circleCollision({
//     //   circle1: { ...ghost },
//     //   circle2: { ...player2 },
//     // })
//   ) {
//     if (ghost.scared) {
//       console.log("testing");
//       setTimeout(() => {
//         ghosts.push(
//           new Ghost({
//             position: {
//               x: mapBoundary.width * 10 + mapBoundary.width / 2,
//               y: mapBoundary.height * 9 + mapBoundary.height / 2,
//             },
//             velocity: {
//               x: Ghost.speed,
//               y: 0,
//             },
//             spriteX: 835,
//             spriteY: 524,
//             width: 58,
//             height: 66,
//           })
//         );
//         console.log(ghosts);
//       }, 5000);
//     }
//     ghosts.splice(i, 1);
//     // } else {
//     //   cancelAnimationFrame(animationID);
//     // }
//     // gameOver.style.display = block;
//     // }
//   }
// }

// function ghostIsScared({ ghost }) {
//   if (ghost.scared) {
//     // console.log("testing");
//     setTimeout(() => {
//       ghosts.push(
//         new Ghost({
//           position: {
//             x: mapBoundary.width * 10 + mapBoundary.width / 2,
//             y: mapBoundary.height * 9 + mapBoundary.height / 2,
//           },
//           velocity: {
//             x: Ghost.speed,
//             y: 0,
//           },
//           spriteX: ghost.spriteX,
//           spriteY: ghost.spriteY,
//           width: ghost.width,
//           height: ghost.height,

//           // spriteX: 835,
//           // spriteY: 524,
//           // width: 58,
//           // height: 66,
//         })
//       );
//       console.log(ghosts);
//     }, 5000);
//   }
// }

function handleGhost() {
  for (let i = ghosts.length - 1; i >= 0; i--) {
    const ghost = ghosts[i];
    ghost.update();
    // playerGhostCollisionCheck({ ghost });

    //checks if there is collision between ghost ans player
    if (
      circleCollision({
        circle1: { ...ghost },
        circle2: { ...player },
      })
      // ||
      // circleCollision({
      //   circle1: { ...ghost },
      //   circle2: { ...player2 },
      // })
    ) {
      // let previousX = ghost.spriteX;
      // let previousY = ghost.spriteY;
      // let prevwidth = ghost.width;
      // let prevheight = ghost.height;
      if (ghost.scared) {
        console.log("testing");
        // let previousX = ghost.spriteX;
        // let previousY = ghost.spriteY;
        // let prevwidth = ghost.width;
        // let prevheight = ghost.height;
        setTimeout(() => {
          // let previousX = ghost.spriteX;
          // let previousY = ghost.spriteY;
          // let prevwidth = ghost.width;
          // let prevheight = ghost.height;

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
              // spriteX: previousX,
              // spriteY: previousY,
              // width: prevwidth,
              // height: prevheight,

              spriteX: 835,
              spriteY: 524,
              width: 58,
              height: 66,
            })
          );
          console.log(ghosts);
        }, 5000);
        ghosts.splice(i, 1);
      } else {
        lives--;
        console.log(lives);
        if (lives === 0) {
          console.log("hello");
          cancelAnimationFrame(animationID);
        }
        // console.log("hello");
        // cancelAnimationFrame(animationID);
        // gameOver.style.display = block;
      }
    }

    //collision check for the rqandom movement of ghost
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
}

// Creates fruit that increase the speed of player at random location after every 8000 frames are passed
function createSpeedFruits() {
  if (frames % 2000 === 0) {
    // Creates fruit every 8000 frames is passed
    speedfruits.push(new SpeedFruit(dots, 1236, 4, 64, 98));

    // Removes the fruit after 8 seconds
    setTimeout(() => {
      speedfruits.splice(0, 1);
    }, 10000);
  }

  // Checks if the player has collided with the fruit and increase speed

  speedfruits.forEach((speedfruit) => {
    speedfruit.draw();
    if (
      circleCollision({
        circle1: { ...speedfruit },
        circle2: { ...player },
      })
    ) {
      speedfruits.splice(0, 1);
      player.speed = 3;
      console.log(player.speed);
      setTimeout(() => {
        player.speed = 2;
        console.log(player.speed);
      }, 8000);
      // score += 100;
      // scores.innerHTML = score;
    }
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
  player.update();

  // Increases frames by 1
  frames++;
}

addListeners();
