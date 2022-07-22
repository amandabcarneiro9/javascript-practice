function computerPlay() {
  const elements = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
}
function playerChoice() {
  const select = document.querySelector(".options");
  const round = playRound(select.value, computerPlay());
  return console.log(round);
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
