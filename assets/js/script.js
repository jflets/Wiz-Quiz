//modal code
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click' , () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click' , () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

//question area
const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "High Tech Machine Learning",
    c: "Home Tool Management Language",
    d: "Human Task Modeling Logic",
    correct: "a",
  },
  {
    question: "Which tag is used to define the main content of an HTML document?",
    a: "<header>",
    b: "<footer>",
    c: "<main>",
    d: "<section>",
    correct: "c",
  },
  {
    question: "What is the correct way to create a hyperlink in HTML?",
    a: "<link>",
    b: "<a href=''>",
    c: "<url>",
    d: "<hyperlink>",
    correct: "b",
  },
  {
    question: "Which attribute is used to specify the CSS styling for an HTML element?",
    a: "style",
    b: "class",
    c: "id",
    d: "src",
    correct: "a",
  },
  {
    question: "What is the correct HTML tag for inserting a line break?",
    a: "<br>",
    b: "<break>",
    c: "<lb>",
    d: "<newline>",
    correct: "a",
  },
];

const quiz = document.getElementById('game-page-wrapper');
const answerEls = document.querySelectorAll('.answer-buttons input');
const questionEls = document.getElementById('question');
const a_text = document.getElementById('a-btn');
const b_text = document.getElementById('b-btn');
const c_text = document.getElementById('c-btn');
const d_text = document.getElementById('d-btn');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEls.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h4>You answered ${score}/${quizData.length} questions correctly</h4><button id="reload" onclick="location.reload()">Reload</button>`;
    }
  }
});