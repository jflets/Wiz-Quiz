const playerNameInput = document.getElementById("player-name");
const startBtns = document.querySelectorAll(".start-button a");
const titleEl = document.querySelector("h1.logo");

startBtns.forEach((startBtn) => {
  startBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // Check if player name is entered
    const playerName = playerNameInput.value.trim();
    if (playerName === "") {
      alert("Please enter your name before starting the quiz.");
      return;
    }

    const selectedQuiz = startBtn.dataset.quizType;

    sessionStorage.setItem("selectedQuiz", selectedQuiz);
    sessionStorage.setItem("playerName", playerName);
    window.location.href = startBtn.href;
  });
});