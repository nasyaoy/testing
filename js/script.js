// Ьассив с с вопросами, вариантами ответов и правильными ответами
let questions = [
    {
        question: "Откуда эта строчка: 'You really know how to make me cry'",
        options: ["What Was I Made For", "ocean eyes", "bellyache", "my future"],
        correctAnswer: "ocean eyes"
    },
    {
        question: "Откуда эта строчка: 'I put on Survivor just to watch somebody suffer'",
        options: ["bellyache", "The 30th", "TV", "hotline"],
        correctAnswer: "TV"
    },
    {
        question: "Откуда эта строчка: 'You call me again, drunk in your Benz'",
        options: ["Happier Than Ever", "ilomilo", "TV", "watch"],
        correctAnswer: "TV"
    }
]
let currentQuestion = 0 //текущий вопрос
let correctAnswers = 0 // количество правильных ответов

// Функция для отображения текущего вопроса и вариантов ответа
function displayQuestion() {
    let questionElement = document.getElementById('question'); // получить блок для размещения вопроса
    // Размещаем вопрос на странице
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
    let optionsElement = document.getElementById('options'); // получить блок для размещения кнопок
    optionsElement.innerHTML = ''; // очищаем содержимое блока optionsElement

    // Получить массив ответов
    let optionsArray = questions[currentQuestion].options;

    // Создать кнопки с вариантами ответов и привязить к ним функцию перехода к след вопросу
    optionsArray.forEach((option) => {
        let button = document.createElement('button');
        optionsElement.append(button);
        button.textContent = option;
        button.classList.add('btn')
    });
}

displayQuestion();