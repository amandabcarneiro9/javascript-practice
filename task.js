const startButton = document.querySelector(".start");
const playButton = document.querySelector(".submit");
const optionsVisible = document.querySelector(".options");

startButton.addEventListener("click", () => {
  optionsVisible.classList.toggle("--visible");
  playButton.classList.toggle("--visible");
  showWins.textContent = 0;
  showLoses.textContent = 0;
  endGame.textContent = "";
});

playButton.addEventListener("click", playerChoice);
