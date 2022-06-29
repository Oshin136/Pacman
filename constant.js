const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

const scorediv = document.querySelector(".scorediv");
const scores = document.querySelector(".score");
const livesdiv = document.querySelector(".lives");
const lifes = document.querySelectorAll(".lives img");
console.log(lifes);
// const startButton = document.querySelector(".btn__start");
const singlePlayerButton = document.querySelector(".btn__single");
const multiPlayerButton = document.querySelector(".btn__multiple");
const card = document.querySelector(".card");
const gameOver = document.querySelector(".gameOver");

const sprite = new Image();
sprite.src = "assets/pc.png";

const players = [];
const dots = [];
const powerups = [];
const boundaries = [];

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
  ArrowUp: {
    ispressed: false,
  },
  ArrowDown: {
    ispressed: false,
  },
  ArrowLeft: {
    ispressed: false,
  },
  ArrowRight: {
    ispressed: false,
  },
};
