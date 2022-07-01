const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

const scorediv = document.querySelector(".scorediv");
const scores = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const livesdiv = document.querySelector(".lives");
const lifes = document.querySelectorAll(".lives img");
const leveldiv = document.querySelector(".level");

const singlePlayerButton = document.querySelector(".btn__single");
const multiPlayerButton = document.querySelector(".btn__multiple");
const levelButton = document.querySelector(".btn__level");
const replayButton = document.querySelector(".btn__replay");
const levelValue = document.querySelector(".levelValue");

const card = document.querySelector(".card");
const gameOver = document.querySelector(".gameOver");

const sprite = new Image();
sprite.src = "assets/pc.png";

const startAudio = new Audio("./audio/start.ogg");
const dotEatAudio = new Audio("./audio/eat1.ogg");
const powerUpAudio = new Audio("./audio/eat2.ogg");
const deathAudio = new Audio("./audio/death.mp3");
const ghostKillAudio = new Audio("./audio/kill.mp3");

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
