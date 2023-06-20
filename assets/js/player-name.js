const playerNameInput = document.getElementById('player-name');
const startButtons = document.querySelectorAll('.start-button a');

startButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (playerNameInput.value.trim() === '') {
      event.preventDefault();
      alert('Please enter your name before starting the quiz');
    } else {
      const selectedQuiz = button.getAttribute('onclick').includes('html')
        ? 'html-quiz.html'
        : 'javascript-quiz.html';
      window.location.href = selectedQuiz;
    }
  });
});
