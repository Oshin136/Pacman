function addListeners() {
  singlePlayerButton.addEventListener("click", () => {
    card.classList.add("hide");
    scorediv.classList.remove("hide");
    livesdiv.classList.remove("hide");
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

    play();
  });

  multiPlayerButton.addEventListener("click", () => {
    card.classList.add("hide");
    scorediv.classList.remove("hide");
    livesdiv.classList.remove("hide");

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
    play();
  });

  window.addEventListener("keydown", ({ key }) => {
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
        break;

      case "ArrowLeft":
        keys.ArrowLeft.ispressed = true;
        player2.rotation = Math.PI;
        lastkey = "ArrowLeft";
        break;

      case "ArrowRight":
        keys.ArrowRight.ispressed = true;
        player2.rotation = 0;
        lastkey = "ArrowRight";
        break;

      case "ArrowUp":
        keys.ArrowUp.ispressed = true;
        player2.rotation = Math.PI * 1.5;
        lastkey = "ArrowUp";
        break;

      case "ArrowDown":
        keys.ArrowDown.ispressed = true;
        player2.rotation = Math.PI / 2;
        lastkey = "ArrowDown";
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
