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
