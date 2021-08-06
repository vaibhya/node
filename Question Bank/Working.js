var quizContainer = document.getElementById('question');
var resultsContainer = document.getElementById('result');
var submitButton = document.getElementById('submit');
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");

var currentSlide = 0;
var myQuestions = [];
function buildQuiz(){
    var output = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
        var answers = [];
        for(letter in currentQuestion.answers){
            answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} : ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
      }
    );
    question.innerHTML = output.join('');
  }

  function showResults(){
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var numCorrect = 0;
    var percentage;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        return;
      }
    });
    resultsContainer.innerHTML = `You achieved ${(numCorrect/myQuestions.length)*100} %  !!`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
      submitButton.style.display = 'none';
      return;
    }
    previousButton.style.display = 'inline-block';
    
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
      return;
    }  
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
    
  }
  

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
submitButton.addEventListener('click', showResults);


var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	},
    {
		question: "who wrote this code?",
		answers: {
			a: 'vaibhav',
			b: 'atul',
			c: 'mahesh'
		},
		correctAnswer: 'a'
	},
    {
		question: "1gb:",
		answers: {
			a: '1024mb',
			b: '1000mb',
			c: '1020mb'
		},
		correctAnswer: 'a'
	},
    {
		question: "Number 1 budget smartphone company?",
		answers: {
			a: "xiaomi",
			b: 'iphone',
			c: 'onePlus'
		},
		correctAnswer: 'a'
	},
];
buildQuiz();

var slides = document.querySelectorAll(".slide");
showSlide(currentSlide);
