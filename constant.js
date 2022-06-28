const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

const scores = document.querySelector(".score");

const sprite = new Image();
sprite.src = "assets/pc.png";

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
};
