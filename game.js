const results = document.querySelector(".result");
const select = document.querySelector(".options");
const showScore = document.querySelector(".score");
const showWins = document.querySelector(".win");
const showLoses = document.querySelector(".loses");
const endGame = document.querySelector(".end-game");

function computerPlay() {
  const elements = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
}
function playerChoice() {
  const round = playRound(select.value, computerPlay());
  return displayResult(round);
}

function playRound(playerSelection, computerSelection) {
  const fixedPlayerSelection = playerSelection.toLowerCase();
  const round = `${fixedPlayerSelection}-${computerSelection}`;
  //computer lose
  if (round === "rock-scissor") return "You win! Rock beats scissor";
  if (round === "scissor-paper") return "You win! Scissor beats paper";
  if (round === "paper-rock") return "You win! Paper beats rock";
  //computer win
  if (round === "scissor-rock") return "You lose! Rock beats scissor";
  if (round === "paper-scissor") return "You lose! Scissor beats paper";
  if (round === "rock-paper") return "You lose! Paper beats rock";

  return "There is a draw";
}

const score = {
  wins: 0,
  loses: 0,
};

function findWiner() {
  let hasWinner = false;
  if (score.wins === 5) {
    endGame.textContent = "You are the winner!";
    hasWinner = true;
  }
  if (score.loses === 5) {
    endGame.textContent = "You Lose!";
    hasWinner = true;
  }
  if (hasWinner) {
    optionsVisible.classList.toggle("--visible");
    playButton.classList.toggle("--visible");
    score.wins = 0;
    score.loses = 0;
    results.textContent = "";
  }
}

function displayResult(round) {
  const roundElement = document.createElement("li");
  roundElement.textContent = round;
  results.appendChild(roundElement);

  if (round.includes("win")) {
    score.wins++;
  }
  if (round.includes("lose")) {
    score.loses++;
  }

  showWins.textContent = score.wins;
  showLoses.textContent = score.loses;

  return findWiner();
}
