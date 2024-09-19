let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#userScore");


let compScorePara = document.querySelector("#compScore");



const showWinner = (userWin, userChoice,compChoice) => {
    if (userWin) {
    userScore++;
    userScorePara.innerText = userScore ;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
    compScore++;
    compScorePara.innerText = compScore ;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    };
};




const drawGame = () => {
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#000138";
};


   /* computer choice*/

const gencompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};



const playGame = (userChoice) => {
    
    // generate computer choice
    const compChoice = gencompChoice();
    
    //draw game
    if (userChoice == compChoice) {
        drawGame();
    } else {
    let userWin = true ;
        if (userChoice === "rock") {
        // paper, scissors 
        userWin = compChoice === "paper" ? false : true ;      
        }else if (userChoice === "paper"){
        // rock , scissors 
        userWin = compChoice === "rock" ? false : true ;
        } else {
        // rock , paper
        userWin = compChoice === "rock" ? false : true ;
        };
        showWinner(userWin, userChoice,compChoice);
    };  
}; 


    /* user choice */


choices.forEach((choice) => {
  choice.addEventListener("click" , () => {
  let userChoice = choice.getAttribute("id");
  playGame(userChoice);
    });
});


 