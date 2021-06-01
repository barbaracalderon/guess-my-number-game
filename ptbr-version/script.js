"use strict";

let score = 20;
let secretNumber = Math.trunc(Math.random() * 50) + 1;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const changeBackground = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
const displayQuestionMark = function (message) {
  document.querySelector(".number").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const displayHighscore = function (highscore) {
  document.querySelector(".highscore").textContent = highscore;
};

displayQuestionMark("?");
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score > 1) {
    if (!guess) {
      displayMessage("📛 Não tem número!");
    } else if (guess === secretNumber) {
      displayQuestionMark(secretNumber);
      displayMessage("🎆 Aê! Você conseguiu!");
      changeBackground("#60b347");
      document.querySelector(".number").style.width = "40rem";
      if (score > highscore) {
        highscore = score;
        displayHighscore(Number(highscore));
      }
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? "🚫 Tá muito alto!" : "🚫 Tá baixo demais!");
      score--;
      displayScore(score);
    }
  } else {
    displayScore(Number("0"));
    displayMessage("Game Over!");
    changeBackground("#cc0000");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  displayMessage("Tenta aí...");
  displayScore(score);
  displayQuestionMark("?");
  document.querySelector(".guess").value = "";
  changeBackground("#222");
  document.querySelector(".number").style.width = "15rem";
});
