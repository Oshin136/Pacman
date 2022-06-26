// const map = [
//   ["1", "-", "-", "-", "-", "-", "-", "7", "-", "-", "-", "-", "-", "-", "2"],
//   ["|", ".", ".", ".", ".", ".", ".", "|", ".", ".", ".", ".", ".", ".", "|"],
//   ["|", "p", "b", ".", "[", "]", ".", "_", ".", "[", "]", ".", "b", "p", "|"],
//   ["|", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "|"],
//   ["|", ".", "b", ".", "^", ".", "[", "-", "]", ".", "^", ".", "b", ".", "|"],
//   ["|", ".", ".", ".", "|", ".", ".", ".", ".", ".", "|", ".", ".", ".", "|"],
//   ["|", ".", "^", ".", "6", "-", "]", ".", "[", "-", "8", ".", "^", ".", "|"],
//   ["|", ".", "_", ".", "|", ".", ".", ".", ".", ".", "|", ".", "_", ".", "|"],
//   ["|", ".", ".", ".", "_", ".", "[", "-", "]", ".", "_", ".", ".", ".", "|"],
//   ["|", ".", "^", ".", ".", ".", ".", ".", ".", ".", ".", ".", "^", ".", "|"],
//   ["|", ".", "|", ".", "1", "]", " ", " ", " ", "[", "2", ".", "|", ".", "|"],
//   ["|", ".", "_", ".", "|", " ", " ", " ", " ", " ", "|", ".", "_", ".", "|"],
//   ["|", ".", ".", ".", "4", "-", "-", "-", "-", "-", "3", ".", ".", ".", "|"],
//   ["|", ".", "^", ".", ".", ".", ".", ".", ".", ".", ".", ".", "^", ".", "|"],
//   ["|", ".", "_", ".", "^", ".", "[", "7", "]", ".", "^", ".", "_", ".", "|"],
//   ["|", ".", ".", ".", "|", ".", ".", "_", ".", ".", "|", ".", ".", ".", "|"],
//   ["|", ".", "[", "-", "3", ".", ".", ".", ".", ".", "4", "-", "]", ".", "|"],
//   ["|", ".", ".", ".", ".", ".", "^", ".", "^", ".", ".", ".", ".", ".", "|"],
//   ["|", ".", "[", "]", ".", "[", "3", ".", "4", "]", ".", "[", "]", ".", "|"],
//   ["|", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "|"],
//   ["|", ".", "1", "-", "]", ".", ".", "^", ".", ".", "[", "-", "2", ".", "|"],
//   ["|", "p", "_", ".", ".", ".", "[", "5", "]", ".", ".", ".", "_", "p", "|"],
//   ["|", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "|"],
//   ["4", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "3"],
// ];

const map = [
  [
    "1",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "7",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "2",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "|",
    "p",
    "[",
    "]",
    ".",
    "b",
    ".",
    "[",
    "]",
    ".",
    "_",
    ".",
    "[",
    "]",
    ".",
    "b",
    ".",
    "[",
    "]",
    "p",
    "|",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    "1",
    "2",
    ".",
    "b",
    ".",
    "^",
    ".",
    "[",
    "-",
    "]",
    ".",
    "^",
    ".",
    "b",
    ".",
    "1",
    "2",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    "4",
    "3",
    ".",
    ".",
    ".",
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
    ".",
    ".",
    ".",
    "4",
    "3",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    "^",
    ".",
    "6",
    "-",
    "]",
    ".",
    "[",
    "-",
    "8",
    ".",
    "^",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "6",
    "-",
    "-",
    "2",
    ".",
    "_",
    ".",
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
    ".",
    "_",
    ".",
    "1",
    "-",
    "-",
    "8",
  ],
  [
    "|",
    " ",
    " ",
    "|",
    ".",
    ".",
    ".",
    "_",
    ".",
    "[",
    "-",
    "]",
    ".",
    "_",
    ".",
    ".",
    ".",
    "|",
    " ",
    " ",
    "|",
  ],
  [
    "6",
    "-",
    "-",
    "3",
    ".",
    "^",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "^",
    ".",
    "4",
    "-",
    "-",
    "8",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    "|",
    ".",
    "1",
    "]",
    "n",
    "n",
    "n",
    "[",
    "2",
    ".",
    "|",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    "1",
    "2",
    ".",
    "_",
    ".",
    "|",
    "n",
    "n",
    "n",
    "n",
    "n",
    "|",
    ".",
    "_",
    ".",
    "1",
    "2",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    "6",
    "8",
    ".",
    ".",
    ".",
    "4",
    "-",
    "-",
    "-",
    "-",
    "-",
    "3",
    ".",
    ".",
    ".",
    "6",
    "8",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    "4",
    "3",
    ".",
    "^",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "^",
    ".",
    "4",
    "3",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    "_",
    ".",
    "^",
    ".",
    "1",
    "7",
    "2",
    ".",
    "^",
    ".",
    "_",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "6",
    "-",
    "-",
    "2",
    ".",
    ".",
    ".",
    "|",
    ".",
    "4",
    "5",
    "3",
    ".",
    "|",
    ".",
    ".",
    ".",
    "1",
    "-",
    "-",
    "8",
  ],
  [
    "|",
    " ",
    " ",
    "|",
    ".",
    "[",
    "-",
    "3",
    ".",
    ".",
    ".",
    ".",
    ".",
    "4",
    "-",
    "]",
    ".",
    "|",
    " ",
    " ",
    "|",
  ],
  [
    "6",
    "-",
    "-",
    "3",
    ".",
    ".",
    ".",
    ".",
    ".",
    "^",
    ".",
    "^",
    ".",
    ".",
    ".",
    ".",
    ".",
    "4",
    "-",
    "-",
    "8",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    "[",
    "]",
    ".",
    "[",
    "3",
    ".",
    "4",
    "]",
    ".",
    "[",
    "]",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    "[",
    "]",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "[",
    "]",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    "^",
    ".",
    "^",
    ".",
    "1",
    "7",
    "2",
    ".",
    "^",
    ".",
    "^",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "|",
    "p",
    "[",
    "]",
    ".",
    "_",
    ".",
    "_",
    ".",
    "4",
    "5",
    "3",
    ".",
    "_",
    ".",
    "_",
    ".",
    "[",
    "]",
    "p",
    "|",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "4",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "3",
  ],
];

map.forEach((row, i) => {
  row.forEach((symbol, j) => {
    switch (symbol) {
      case "-":
        boundaries.push(
          new mapBoundary({
            position: {
              x: mapBoundary.width * j,
              y: mapBoundary.height * i,
            },
            image: createImage("./assets/pipeHorizontal.png"),
          })
        );
        break;
      case "|":
        boundaries.push(
          new mapBoundary({
            position: {
              x: mapBoundary.width * j,
              y: mapBoundary.height * i,
            },
            image: createImage("./assets/pipeVertical.png"),
          })
        );
        break;
      case "1":
        boundaries.push(
          new mapBoundary({
            position: {
              x: mapBoundary.width * j,
              y: mapBoundary.height * i,
            },
            image: createImage("./assets/pipeCorner1.png"),
          })
        );
        break;
      case "2":
        boundaries.push(
          new mapBoundary({
            position: {
              x: mapBoundary.width * j,
              y: mapBoundary.height * i,
            },
            image: createImage("./assets/pipeCorner2.png"),
          })
        );
        break;
      case "3":
        boundaries.push(
          new mapBoundary({
            position: {
              x: mapBoundary.width * j,
              y: mapBoundary.height * i,
            },
            image: createImage("./assets/pipeCorner3.png"),
          })
        );
        break;
      case "4":
        boundaries.push(
          new mapBoundary({
            position: {
              x: mapBoundary.width * j,
              y: mapBoundary.height * i,
            },
            image: createImage("./assets/pipeCorner4.png"),
          })
        );
        break;
      case "b":
        boundaries.push(
          new mapBoundary({
            position: {
              x: mapBoundary.width * j,
              y: mapBoundary.height * i,
            },
            image: createImage("./assets/block.png"),
          })
        );
        break;
      case "[":
        boundaries.push(
          new mapBoundary({
            position: {
              x: j * mapBoundary.width,
              y: i * mapBoundary.height,
            },
            image: createImage("./assets/capLeft.png"),
          })
        );
        break;
      case "]":
        boundaries.push(
          new mapBoundary({
            position: {
              x: j * mapBoundary.width,
              y: i * mapBoundary.height,
            },
            image: createImage("./assets/capRight.png"),
          })
        );
        break;
      case "_":
        boundaries.push(
          new mapBoundary({
            position: {
              x: j * mapBoundary.width,
              y: i * mapBoundary.height,
            },
            image: createImage("./assets/capBottom.png"),
          })
        );
        break;
      case "^":
        boundaries.push(
          new mapBoundary({
            position: {
              x: j * mapBoundary.width,
              y: i * mapBoundary.height,
            },
            image: createImage("./assets/capTop.png"),
          })
        );
        break;
      case "+":
        boundaries.push(
          new mapBoundary({
            position: {
              x: j * mapBoundary.width,
              y: i * mapBoundary.height,
            },
            image: createImage("./assets/pipeCross.png"),
          })
        );
        break;
      case "5":
        boundaries.push(
          new mapBoundary({
            position: {
              x: j * mapBoundary.width,
              y: i * mapBoundary.height,
            },
            color: "blue",
            image: createImage("./assets/pipeConnectorTop.png"),
          })
        );
        break;
      case "6":
        boundaries.push(
          new mapBoundary({
            position: {
              x: j * mapBoundary.width,
              y: i * mapBoundary.height,
            },
            color: "blue",
            image: createImage("./assets/pipeConnectorRight.png"),
          })
        );
        break;
      case "7":
        boundaries.push(
          new mapBoundary({
            position: {
              x: j * mapBoundary.width,
              y: i * mapBoundary.height,
            },
            color: "blue",
            image: createImage("./assets/pipeConnectorBottom.png"),
          })
        );
        break;
      case "8":
        boundaries.push(
          new mapBoundary({
            position: {
              x: j * mapBoundary.width,
              y: i * mapBoundary.height,
            },
            image: createImage("./assets/pipeConnectorLeft.png"),
          })
        );
        break;

      case ".":
        dots.push(
          new Dots({
            position: {
              x: j * mapBoundary.width + mapBoundary.width / 2,
              y: i * mapBoundary.height + mapBoundary.height / 2,
            },
          })
        );
        break;

      case "p":
        powerups.push(
          new PowerUps({
            position: {
              x: j * mapBoundary.width + mapBoundary.width / 2,
              y: i * mapBoundary.height + mapBoundary.height / 2,
            },
          })
        );
        break;

      case "n":
        break;
    }
  });
});
