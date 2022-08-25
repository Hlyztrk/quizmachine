
const questions =[
    {
        id:0,
        img : "./images/facebook.jpg",
        
    }
]
const bColors = ["#c79900","#97ff36","#46c700","#36ffdd","#fb7dff", "#ff7d8a", "#7dc7ff"]


// answerArray.sort(() => 0.5 - Math.random());
// console.log(answerArray)

const cardAll = document.querySelectorAll(".card .card-body")
const inputAnswers = document.querySelectorAll("#inputAnswer");
const checkAnswerBtn = document.querySelectorAll(".card .btn")
const answerDisplay = document.querySelectorAll("#answer")
const pDisplay = document.querySelectorAll("#pa")
const element = document.querySelector(".h3Calss")
const btnLeft = document.querySelector(".left-arrow")
const btnRight = document.querySelector(".right-arrow")

let answer;
let index = 0;

function changeBg(){
    var random = Math.floor(Math.random() * bColors.length)
    var randomColor = bColors[random];
    console.log(randomColor)
    document.body.style.backgroundColor = randomColor

    for(var i = 0 ; i < bColors.length ; i++){
        if( bColors[i] === bColors[i]){
            return randomColor
        }
    }
    
}


Array.from(checkAnswerBtn).forEach(btn => btn.addEventListener("click", (e)=>{
    e.preventDefault
    let bnt = e.target.className;
    console.log(bnt + " clicked")
    getAnswers();
    
    

    
}))


function slideLeft(){
    if(index == 0){ index = answerArray.length -1}
    else{index--;}
    gsap.to(".card", .3 , {x: `${-index * 100}%`})
}


function slideRight(){
    if(index == answerArray.length -1){index = 0}
    else {index++;}
    gsap.to(".card", .3 , {x: `${-index * 100}%`})
}

btnLeft.addEventListener("click", slideLeft)
btnLeft.addEventListener("click", changeBg)
btnRight.addEventListener("click", slideRight)
btnRight.addEventListener("click", changeBg)




function getAnswers(){
    for(let i = 0; i < answerArray.length; i++){
            inputAnswers.forEach((answer)=>{
                if(answer.value === answerArray[i]){
                    toggleAnswers();
                    answer = answerArray[i]
                        for(let j = 0 ; j < answerDisplay.length; j++){
                            answerDisplay[i].innerHTML = answer
                            
                        }
                    
                    }
               
            })
    
    }
        
}



function toggleAnswers(){
    for(let i=0; i < cardAll.length; i++){
        cardAll[i].classList.toggle("active");
        pDisplay.forEach(pd =>{
        if(pd.style.display == "none"){
            pd.style.display = "block"
        }else{
            pd.style.display = "none"
        }
    })
}

}
