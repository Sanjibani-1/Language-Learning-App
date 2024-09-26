// Interactive Lessons
function startLesson(lessonId) {
    alert(`Starting ${lessonId}...`);
    // Add your lesson interaction logic here
}

// Quizzes
const quizQuestions = [
    { question: "How do you say 'hello' in Spanish?", answers: ["Hola", "Adiós", "Gracias"], correct: 0 },
    { question: "How do you say 'thank you' in French?", answers: ["Merci", "Bonjour", "Pardon"], correct: 0 }
];

function startQuiz() {
    let quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Clear previous quiz
    quizQuestions.forEach((q, index) => {
        let quizElement = document.createElement('div');
        quizElement.innerHTML = `<p>${q.question}</p>`;
        q.answers.forEach((answer, i) => {
            quizElement.innerHTML += `<input type="radio" name="q${index}" value="${i}"> ${answer}<br>`;
        });
        quizContainer.appendChild(quizElement);
    });
    let submitButton = document.createElement('button');
    submitButton.textContent = "Submit";
    submitButton.onclick = checkQuiz;
    quizContainer.appendChild(submitButton);
}

function checkQuiz() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        let selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });
    alert(`You scored ${score} out of ${quizQuestions.length}`);
}

// Achievements
const achievements = ['Complete first lesson', 'Score 100% on a quiz'];
function loadAchievements() {
    let achievementList = document.getElementById('achievement-list');
    achievementList.innerHTML = '';
    achievements.forEach((achievement, index) => {
        let achievementElement = document.createElement('div');
        achievementElement.textContent = `${index + 1}. ${achievement}`;
        achievementList.appendChild(achievementElement);
    });
}
loadAchievements(); // Load achievements on page load

// Community Forum
const forumPosts = [];

function postToForum() {
    let postContent = document.getElementById('newPost').value;
    if (postContent.trim() !== '') {
        forumPosts.push(postContent);
        updateForum();
        document.getElementById('newPost').value = '';
    }
}

function updateForum() {
    let forumList = document.getElementById('forum-posts');
    forumList.innerHTML = '';
    forumPosts.forEach(post => {
        let postElement = document.createElement('li');
        postElement.textContent = post;
        forumList.appendChild(postElement);
    });
}
