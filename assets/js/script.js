// Modal code, this code taken from a youtube video linked in the README file.
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
// Quiz questions and answers
const quizDataHTML = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "High Tech Machine Learning",
    c: "Home Tool Management Language",
    d: "Human Task Modeling Logic",
    correct: "a",
  },
  {
    question:
      "Which tag is used to define the main content of an HTML document?",
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
    question:
      "Which attribute is used to specify the CSS styling for an HTML element?",
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
  {
    question: "What is the purpose of the <head> tag in an HTML document?",
    a: "To define the main content of the page",
    b: "To specify the title and metadata of the page",
    c: "To display a header section at the top of the page",
    d: "To create a hyperlink to another webpage",
    correct: "b",
  },
  {
    question: "Which HTML tag is used to display an image on a webpage?",
    a: "<img>",
    b: "<picture>",
    c: "<image>",
    d: "<photo>",
    correct: "a",
  },
  {
    question: "What is the purpose of the alt attribute in an <img> tag?",
    a: "To specify the alignment of the image",
    b: "To define the alternative text for the image",
    c: "To set the background color behind the image",
    d: "To add a border around the image",
    correct: "b",
  },
  {
    question: "Which HTML element is used to create a numbered list?",
    a: "<ul>",
    b: "<ol>",
    c: "<li>",
    d: "<dl>",
    correct: "b",
  },
  {
    question: "What is the purpose of the <form> tag in HTML?",
    a: "To define a section of the page",
    b: "To create a table",
    c: "To specify the font style",
    d: "To create an interactive input form",
    correct: "d",
  }
];

const quizDataJavaScript = [
  {
    question: "What is JavaScript?",
    a: "A programming language",
    b: "A style sheet language",
    c: "A markup language",
    d: "A database query language",
    correct: "a",
  },
  {
    question: "Which statement is used to declare a JavaScript variable?",
    a: "let",
    b: "var",
    c: "const",
    d: "All of the above",
    correct: "d",
  },
  {
    question:
      "What is the output of the following code? console.log(2 + 2 + '2');",
    a: "4",
    b: "22",
    c: "24",
    d: "None of the above",
    correct: "d",
  },
  {
    question:
      "Which method is used to add an element to the end of an array in JavaScript?",
    a: "push()",
    b: "pop()",
    c: "shift()",
    d: "unshift()",
    correct: "a",
  },
  {
    question: "What is the result of the following expression? typeof null;",
    a: "'object'",
    b: "'null'",
    c: "'undefined'",
    d: "'number'",
    correct: "a",
  },
  {
    question: "What is the difference between 'null' and 'undefined' in JavaScript?",
    a: "'null' is an empty value, while 'undefined' means a variable has been declared but not assigned a value.",
    b: "'null' and 'undefined' are interchangeable and can be used interchangeably.",
    c: "'null' and 'undefined' both represent the absence of a value in JavaScript.",
    d: "'null' is used to terminate a loop, while 'undefined' is used to define a function.",
    correct: "a",
  },
  {
    question: "Which operator is used to check if two values are equal in JavaScript?",
    a: "==",
    b: "===",
    c: "!=",
    d: "!==",
    correct: "b",
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    a: "To refer to the current HTML document",
    b: "To declare a new variable",
    c: "To refer to the current object or context",
    d: "To define a function",
    correct: "c",
  },
  {
    question: "What is the result of the following expression? NaN === NaN;",
    a: "true",
    b: "false",
    c: "undefined",
    d: "NaN",
    correct: "b",
  },
  {
    question: "What does the 'typeof' operator return for an array?",
    a: "'array'",
    b: "'object'",
    c: "'array'",
    d: "'undefined'",
    correct: "b",
  }
];

const quiz = document.getElementById("game-page-wrapper");
const answerEls = document.querySelectorAll(".answer-buttons input");
const questionEls = document.getElementById("question");
const a_text = document.getElementById("a-btn");
const b_text = document.getElementById("b-btn");
const c_text = document.getElementById("c-btn");
const d_text = document.getElementById("d-btn");
const submitBtn = document.getElementById("submit");
const titleEl = document.getElementById("quiz-title");
const playerName = sessionStorage.getItem("playerName");

let currentQuiz = 0;
let score = 0;
let selectedQuiz = sessionStorage.getItem("selectedQuiz");
let currentQuizData;

if (playerName) {
  const nameOfPlayerElement = document.getElementById("name-of-player");
  nameOfPlayerElement.textContent = playerName;
}

if (selectedQuiz === "javascript") {
  currentQuizData = quizDataJavaScript;
  titleEl.innerText = "JavaScript Quiz";
} else {
  currentQuizData = quizDataHTML;
  titleEl.innerText = "HTML Quiz";
}

loadQuiz();
function loadQuiz() {
  if (currentQuiz >= currentQuizData.length) {
    showFinalScore();
    return;
  }
  deselectAnswer();
  const currentQuestion = currentQuizData[currentQuiz];
  questionEls.innerText = currentQuestion.question;
  a_text.innerText = currentQuestion.a;
  b_text.innerText = currentQuestion.b;
  c_text.innerText = currentQuestion.c;
  d_text.innerText = currentQuestion.d;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
// Reload button and score
function showFinalScore() {
  quiz.innerHTML = `<h4>Hi ${playerName} you answered ${score}/${currentQuizData.length} questions correctly</h4><button id="reload" onclick="location.reload()">Reload</button>`;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (!answer) {
    alert("Please select an answer before submitting.");
    return;
  }
  {
    if (answer === currentQuizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    loadQuiz();
  }
});
