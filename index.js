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
// console.log(playRound(fixedPlayerSelection, computerSelection));

function game() {
  const totalRounds = 5;
  const resultsList = [];
  for (let round = 1; round <= totalRounds; round++) {
    const playerSelection = elements;
    // prompt(
    //   `Round ${round}/${totalRounds}\n make your choice:`
    // );
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    resultsList.push(`Round ${round}: ${result}`);
  }
  const wins = resultsList.filter((result) => result.includes("win")).length;
  const loses = resultsList.filter((result) => result.includes("lose")).length;
  alert(resultsList.join("\n"));

  if (wins > loses) return alert("You are the winner");
  if (loses > wins) return alert("You lose, try again!");
  alert("draw");
}

game();
