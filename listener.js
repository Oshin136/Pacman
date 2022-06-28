function addListeners() {
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
}
