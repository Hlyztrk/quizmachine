const inputAnswer = document.getElementById("inputAnswer");
const correctAnswerDisplay = document.getElementById("correctAnswer")
const submitBtn = document.querySelector("#submitButton")
const questionIndexDisplay = document.getElementById("questionIndex")
const btnLeft = document.querySelector(".left-arrow")
const btnRight = document.querySelector(".right-arrow")
const cardDisplay = document.querySelector(".card")
const img = document.querySelector(".image")
const body = document.querySelector("body")
let result;
let index=0;
let scoreDisplay = 0;
var input;
var bgGradient =["#edc709", "#4eed09", "#09edcf", "#e509ed","#ed7b09","#ff96cc"]
var images =[
    "./images/facebook.jpg",
    "./images/sheffield.jpg",
    "./images/hongkong.jpg",
    "./images/porsche.jpg",
    "./images/calcium.jpg",
    "./images/cia.jpg",
    "./images/suriname.jpg",
    "./images/homer.jpg",
    "./images/haemotology.jpg",
    "./images/bankofengland.jpg",
    "./images/celebration.jpg"
]
function Question(question, input, answer){
    this.question = question
    this.input = input
    this.answer = answer

}


Question.prototype.checkAnswer = function(answer){
    return this.answer === answer
}

//Quiz constructor
function Quiz(questions){
    this.questions = questions
    this.score = 0
    this.questionIndex = 0
}

var q1 = new Question("What was Meta Platforms Inc formerly known as?","", "Facebook")
var q2 = new Question("Which English city is known as the Steel City?","", "Sheffield")
var q3 = new Question("Which former British colony was given back to China in 1997?","", "Hong Kong")
var q4 = new Question("The logo for luxury car maker Porsche features which animal?","", "Horse")
var q5 = new Question("Which element is said to keep bones strong","", "Calcium")
var q6 = new Question("What does CIA stand for","", "Central Intelligence Agency")
var q7 = new Question("Suriname is located on which continent?","", "South America")
var q8 = new Question("What brand of beer does Homer Simpson drink?","", "Duff Beer")
var q9 = new Question("Haematology is the study of what","", "The blood")
var q10 = new Question("Which body sets the interest rates in the UK","", "Bank of England")

// Quiz prototype
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.isFinished = function(){
    return this.questions.length === this.questionIndex 
}

Quiz.prototype.guess = function(answer){
    var question = this.getQuestion()

    if(question.checkAnswer(answer)){
        this.score++
    }
    this.questionIndex++;

}


Quiz.prototype.guessReverse = function(answer){
    var question = this.getQuestion()
    this.questionIndex--;

}
var qArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
//Start Quiz
var quiz = new Quiz(qArray)



loadQuestion()

function loadQuestion(){
    if(quiz.isFinished()){
        showScore()
    }else{
        
        var question = quiz.getQuestion()
        var questionDisplay = document.querySelector("#card-text")
        questionDisplay.innerHTML = question.question
        questionIndexDisplay.innerHTML = quiz.questionIndex + 1
    
        
        submitBtn.addEventListener("click", function(){
            
            input = question.answer
            console.log(input)
        
            if(inputAnswer.value === input){
                cardDisplay.classList.add("active")
                result = "The correct answer is " + input
                scoreDisplay++;
                console.log(scoreDisplay)
                

             }else if(inputAnswer.value  !== input){
                cardDisplay.classList.add("active")
                result = "It is the wrong answer, correct answer is " + input
                
            }
            correctAnswerDisplay.innerHTML = result
            
            
        })
        
        inputAnswer.value = ""
        correctAnswerDisplay.innerHTML = ""
        
        
        
    }
    
}


btnLeft.addEventListener("click", ()=>{
    changeBg()
    previousImage();
    guessRevers(inputAnswer);
    
    

    
})
btnRight.addEventListener("click", ()=>{
    changeBg()
    nextImage()
    guess(inputAnswer)
    if(quiz.questionIndex === qArray.length){
        quiz.questionIndex = 0;

    }
    
    
    
})
function guessRevers(guess){
    quiz.guessReverse(guess)
    cardDisplay.classList.remove("active")
    loadQuestion()
    if(quiz.questionIndex === 0){
        btnLeft.classList.add("disabled")
    }
}

function guess(guess){
    
    quiz.guess(guess)
    cardDisplay.classList.remove("active")
    loadQuestion()
}
function makeImg(){
    var imageD = document.createElement("img")
    imageD.src = images[index]
    img.appendChild(imageD)
}

function nextImage(){
    var imgTest = img.getElementsByTagName("img")[0]
    if(index === images.length){
        index = 0
    }else{
    index++
    }
    index = index % images.length
    imgTest.src = images[index]
   
}


function previousImage(){
    var imgTest = img.getElementsByTagName("img")[0]
    if(index === 0){
        index = images.length - 1
    }else{
    index--
    }
    index = index % images.length
    imgTest.src = images[index]
}





function showScore(){
    var html = `<h2>Your Score is : </h2><h3>${scoreDisplay}</h3>`
    document.querySelector(".card-body").innerHTML = html
    btnLeft.classList.add("disabled")
    btnRight.classList.add("disabled")
    
}

function animation(){
    const t1 = gsap.timeline({defaults: {ease : Expo.InOut}})
    t1.fromTo(".title", 1, {y: "-10rem"}, {y: 0})
}

animation()

function changeBg(){
    var random = Math.floor(Math.random() * bgGradient.length)
    var randomBg = bgGradient[random];
    console.log(randomBg)
    body.style.backgroundColor = randomBg;
}