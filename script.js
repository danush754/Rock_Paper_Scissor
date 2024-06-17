const gameContent = document.getElementById("gameContent")
const popupBtn = document.getElementById("infoCloseBtn")
const popupDiv = document.getElementById("infoPopup")

const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorBtn = document.getElementById("scissorBtn")
const gameStatus = document.getElementById("gameStatus")
const humanScr = document.querySelector('#humanScore span')
const compScr = document.querySelector('#compScore span')


document.addEventListener('DOMContentLoaded', () =>{
    gameContent.style.display = "none";
})

popupBtn.addEventListener('click', function() {
    popupDiv.style.display = "none"
    gameContent.style.display = "block"
})

function getCompChoice(){
   return  Math.floor(Math.random() * 3);
}


rockBtn.addEventListener('click',function(){
   let  humanVal = 0
   let  compVal = getCompChoice()
    playRound(humanVal,compVal)
})
paperBtn.addEventListener('click',function(){
    humanVal = 1
    let  compVal = getCompChoice()
    playRound(humanVal,compVal)
})
scissorBtn.addEventListener('click',function(){
    humanVal = 2
    let  compVal = getCompChoice()
    playRound(humanVal,compVal)
})





var humanScore = 0

var compScore  =  0     

function playRound(humanChoice, compChoice){
    if(humanChoice === 0 || humanChoice === 1 || humanChoice === 2){

        if(humanChoice == 0 && compChoice == 0){
            gameStatus.textContent = "Match Draw both choose ROCK";
        }

        else if(humanChoice == 0 && compChoice == 1){
             gameStatus.textContent = "You lost the Round PAPER beats ROCK";
            compScore += 1
            compScr.textContent = compScore

        }

        else if(humanChoice == 0 && compChoice == 2){
             gameStatus.textContent = "You won the round ROCK beats SCISSOR";
            humanScore += 1
            humanScr.textContent = humanScore
        }

        else if(humanChoice == 1 && compChoice == 0){
             gameStatus.textContent = "You won the round PAPER beats ROCK";
            humanScore +=1
            humanScr.textContent = humanScore
        }

        else if(humanChoice == 1 && compChoice == 1){
             gameStatus.textContent = "Match Draw both choose PAPER";
        }

        else if(humanChoice == 1 && compChoice == 2){
             gameStatus.textContent = "You lost the round SCISSOR beats PAPER";
            compScore += 1
            compScr.textContent = compScore
        }

        else if(humanChoice == 2 && compChoice == 0){
             gameStatus.textContent = "You lost the round ROCK beats SCISSOR";
            compScore += 1
            compScr.textContent = compScore
        }

        else if(humanChoice == 2 && compChoice == 1){
             gameStatus.textContent = "You won the round SCISSOR beats PAPER";
            humanScore += 1
            humanScr.textContent = humanScore
        }

        else if(humanChoice == 2 && compChoice == 2){
             gameStatus.textContent = "Match Draw both choose SCISSOR";
        }
    }else{
        alert("Choose a number between 0 to 2")
    }
    
    
    
}

if(humanScore == 5 || compScore == 5){
    if (humanScore == 5){
        gameStatus.textContent = "You have mastered the magic"
    }else if(compScore == 5){
        gameStatus.textContent = "You need more practice to master this magic"
    }
}


// function playGame(){

//     let rounds = 5

//     for(let i = 0; i < rounds; i++){
//         const humanSelection = getHumanVal()
//         const compSelection = getCompChoice()
     
//         playRound(humanSelection,compSelection)

//         console.log("Human Score :",humanScore);
//         console.log("Computer Score:",compScore);
//     }

//     if(humanScore > compScore){
//         console.log("Congratulations You've won the game");
//     }else if(compScore > humanScore){
//         console.log("Sorry you've lost the game");
//     }else{
//         console.log("Match Draw");
//     }
        

    

// }

// playGame();





