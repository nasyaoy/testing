// Массив с с вопросами, вариантами ответов и правильными ответами
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
        correctAnswer: "Happier Than Ever"
    },
    {
        question: "Откуда эта строчка: 'So, where did you go?I should know, but it's cold'",
        options: ["NDA", "ilomilo", "bellyache", "Oxitocin"],
        correctAnswer: "ilomilo"
    },
    {
        question: "Откуда эта строчка: ''Cause I loved you then and I love you now'",
        options: ["Bored", "Your Power", "Oxitocin", "Male Fantasy"],
        correctAnswer: "Male Fantasy"
    },
    {
        question: "Откуда эта строчка: 'Just can't get enough guy'",
        options: ["Hotline", "Bored", "No Time To Die", "bad guy"],
        correctAnswer: "bad guy"
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
        button.classList.add('btn');
    });

    // добавить обработчик события на блок с кнопками
    optionsElement.addEventListener('click', (e) => {
        // записать переменную элемент на который кликнули
        let target = e.target;
        // вызвать функцию перехода к следующему вопросу и передать ей текстовое содержимое кнопки по которой кликнули
        nextQuestion(target.textContent);
    }, { once: true });
}
// функция перехода к следующему вопросу
function nextQuestion(answer) {
    // если кликнули на правитьный ответ то 
    if (answer === questions[currentQuestion].correctAnswer) {
        // увеличиваем на 1 счетчик правильных ответов
        correctAnswers++;
    }
    currentQuestion++; // перейти к следующему вопросу 
    if (currentQuestion < questions.length) {
        displayQuestion(); // отобразить следующий вопрос
    } else {
        displayResult();
    }
};

// функция отображения результатов теста
function displayResult() {
    let questionElement = document.getElementById('question'); // получить блок с вопросом
    let optionsElement = document.getElementById('options'); // получить блок с кнопками
    let resultElement = document.getElementById('result'); // получить блок дл яотображения результата
    let wrongAnswer = question.value
    questionElement.style.display = 'none'; // выключить видимость блока вопросов
    optionsElement.style.display = 'none'; // выключить видимость блока ответов
    let procent = (correctAnswers / questions.length) * 100;
    resultElement.textContent = `правильных ответов ${correctAnswers} из ${questions.length} (${procent.toFixed(0)}%)`;// отобразить результат теста
}

// let startBtn = document.querySelector('.start__btn');
// let input = document.querySelector('#nameInput');
// startBtn.addEventListener('click', (e) => {
//     e.preventDefault;
//     if (input.value === '') {
//         questionElement.style.visibility = 'hidden';
//         optionsElement.style.visibility = 'hidden';
//     } else {
//         let form = document.querySelectorAll('.form')
//         questionElement.style.visibility = 'visible';
//         optionsElement.style.visibility = 'visible';
//         form.style.display = 'none';
//     }
// })


displayQuestion();