function addListeners() {
  singlePlayerButton.addEventListener("click", () => {
    card.classList.add("hide");
    scorediv.classList.remove("hide");
    livesdiv.classList.remove("hide");
    leveldiv.classList.remove("hide");
    replayButton.classList.remove("hide");
    levelValue.innerHTML = level;
    highscore.innerHTML = highScore;

    players.push(
      new Player({
        position: {
          x: mapBoundary.width * 10 + mapBoundary.width / 2,
          y: mapBoundary.height * 13 + mapBoundary.height / 2,
        },
        velocity: {
          x: 0,
          y: 0,
        },
        speed: 2,
      })
    );

    // Draws the map
    buildMap();
    play();
  });

  multiPlayerButton.addEventListener("click", () => {
    card.classList.add("hide");
    scorediv.classList.remove("hide");
    livesdiv.classList.remove("hide");
    leveldiv.classList.remove("hide");
    replayButton.classList.remove(".hide");

    levelValue.innerHTML = level;
    highscore.innerHTML = highScore;

    players.push(
      new Player({
        position: {
          x: mapBoundary.width * 10 + mapBoundary.width / 2,
          y: mapBoundary.height * 13 + mapBoundary.height / 2,
        },
        velocity: {
          x: 0,
          y: 0,
        },
        speed: 2,
      })
    );

    players.push(
      new Player({
        position: {
          x: mapBoundary.width * 13 + mapBoundary.width / 2,
          y: mapBoundary.height * 13 + mapBoundary.height / 2,
        },
        velocity: {
          x: 0,
          y: 0,
        },
        speed: 2,
      })
    );

    buildMap();
    play();
  });

  levelButton.addEventListener("click", () => {
    levelButton.classList.add("hide");

    level++;
    levelValue.innerHTML = level;

    boundaries = [];
    dots = [];
    powerups = [];

    if (level == 2) {
      console.log(Ghost.speed);
      ghosts.push(ghost3);
      ghosts.forEach((ghost) => {
        ghost.speed += 0.5;
        console.log(ghost.speed);
      });
    } else if (level == 3) {
      console.log(Ghost.speed);
      ghosts.push(ghost4);
      ghosts.forEach((ghost) => {
        ghost.speed += 0.5;
      });
    }
    // Draws the map
    buildMap();
    play();
  });

  replayButton.addEventListener("click", () => {
    cancelAnimationFrame(animationID);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    card.classList.remove("hide");
    replayButton.classList.add("hide");
    scorediv.classList.add("hide");
    livesdiv.classList.add("hide");
    leveldiv.classList.add("hide");
  });

  window.addEventListener("keydown", ({ key }) => {
    switch (key) {
      case "a":
        keys.a.ispressed = true;
        players[0].rotation = Math.PI;
        lastkey = "a";
        break;

      case "d":
        keys.d.ispressed = true;
        players[0].rotation = 0;
        lastkey = "d";
        break;

      case "w":
        keys.w.ispressed = true;
        players[0].rotation = Math.PI * 1.5;
        lastkey = "w";
        break;

      case "s":
        keys.s.ispressed = true;
        players[0].rotation = Math.PI / 2;
        lastkey = "s";
        break;

      case "ArrowLeft":
        if (players.length > 1) {
          keys.ArrowLeft.ispressed = true;
          players[1].rotation = Math.PI;
          lastkey = "ArrowLeft";
        }
        break;

      case "ArrowRight":
        if (players.length > 1) {
          keys.ArrowRight.ispressed = true;
          players[1].rotation = 0;
          lastkey = "ArrowRight";
        }
        break;

      case "ArrowUp":
        if (players.length > 1) {
          keys.ArrowUp.ispressed = true;
          players[1].rotation = Math.PI * 1.5;
          lastkey = "ArrowUp";
        }
        break;

      case "ArrowDown":
        if (players.length > 1) {
          keys.ArrowDown.ispressed = true;
          players[1].rotation = Math.PI / 2;
          lastkey = "ArrowDown";
        }
        break;
    }
  });

  window.addEventListener("keyup", ({ key }) => {
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
        break;

      case "ArrowLeft":
        keys.ArrowLeft.ispressed = false;
        break;

      case "ArrowRight":
        keys.ArrowRight.ispressed = false;
        break;

      case "ArrowUp":
        keys.ArrowUp.ispressed = false;
        break;

      case "ArrowDown":
        keys.ArrowDown.ispressed = false;
        break;
    }
  });
}
