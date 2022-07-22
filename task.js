const startButton = document.querySelector(".start");
const playButton = document.querySelector(".submit");
const optionsVisible = document.querySelector(".options");

startButton.addEventListener("click", () => {
  console.log("clicou");
  optionsVisible.classList.toggle("--visible");
  playButton.classList.toggle("--visible");
});

playButton.addEventListener("click", playerChoice);
