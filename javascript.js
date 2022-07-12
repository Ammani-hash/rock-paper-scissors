let computerSelection = null;
let playerSelection = null;
let playerScore = 0;
let computerScore = 0;
let testVar = 0;
const result = document.querySelector(".results")



const computerPlay = () =>{
    var index = Math.floor(Math.random() * 3);
    let state = ["rock", "paper", "scissor"];
    return state[index]; 
}
    

const playRound = (a, b) =>{
    if(playerSelection === "paper" && computerSelection === "rock"){
        const p = document.createElement("p");
        p.innerText = "You win! Paper beats rock.";
        result.appendChild(p);
        ++playerScore;
    } else if(playerSelection === "rock" && computerSelection === " scissor"){
        const p = document.createElement("p");
        p.innerText = "You win! Paper beats rock.";
        result.appendChild(p);
        ++playerScore;
    } else if(playerSelection === "scissor" && computerSelection === "paper"){
        const p = document.createElement("p");
        p.innerText = "You win! Scissor beats paper";
        result.appendChild(p);
        ++playerScore;
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        const p = document.createElement("p");
        p.innerText = "You lose! Paper beats rock";
        result.appendChild(p)
        ++computerScore;
    } else if(playerSelection === "paper" && computerSelection === "scissor"){
        const p = document.createElement("p");
        p.innerText = "You lose! Scissor beats paper";
        result.appendChild(p);
        ++computerScore;
    } else if(playerSelection === "scissor" && computerSelection === "rock"){
        const p = document.createElement("p");
        p.innerText = "You lose! Rock beats scissor";
        result.appendChild(p);
        ++computerScore;
    } else if(playerSelection === "rock" && computerSelection === "rock"){
        const p = document.createElement("p");
        p.innerText = `Its a tie! You both picked ${playerSelection}`;
        result.appendChild(p);
    } else if(playerSelection === "paper" && computerSelection === "paper"){
        const p = document.createElement("p");
        p.innerText = `Its a tie! You both picked ${playerSelection}`;
        result.appendChild(p);
    } else if(playerSelection === "scissor" && computerSelection === "scissor"){
        const p = document.createElement("p");
        p.innerText = `Its a tie! You both picked ${playerSelection}`;
        result.appendChild(p);

    } 
}


function score(c, d){
    if(playerScore > computerScore){
        return("Congratulations! You are the winner");
    } else if(playerScore < computerScore){
        return("Game Over. Better luck next time.");
    } else if(playerScore === computerScore){
        return("No winner! It's a tie game.");
    }
}

const button1 = document.querySelector("#rock");
button1.addEventListener("click", () =>{
    playerSelection = "rock";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

const button2 = document.querySelector("#paper");
button2.addEventListener("click", () =>{
    playerSelection = "paper";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

const button3 = document.querySelector("#scissor");
button3.addEventListener("click", () => {
    playerSelection = "scissor";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});


score(playerScore, computerScore);

// function game(){
//     const button1 = document.querySelector("#rock");
//     button1.addEventListener("click", playRound =>{
//         return "rock"
//     });

//     const button2 = document.querySelector("#paper");
//     button2.addEventListener("click", playRound =>{
//         return "paper";
//     });

//     const button3 = document.querySelector("#scissor");
//     button3.addEventListener("click", playRound => {
//         return "scissor";
//     });
    
// //  playerSelect = playerSelection(); 
//     computerSelection = computerPlay();
//     playRound();
//     console.log(playRound());
    
//     console.log(score());
// }

//game();
