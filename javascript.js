let playerSelection = null;
let computerSelection = null;
let playerScore = 0;
let computerScore = 0;
let testVar = 0;

function computerPlay(){
    var index = Math.floor(Math.random() * 3);
    let state = ["rock", "paper", "scissor"];
    return state[index]; 
}

function playRound(a, b){
    if(playerSelection === "paper" && computerSelection === "rock"){
        ++playerScore;
        return("You win! Paper beats rock.")
    } else if(playerSelection === "rock" && computerSelection === " scissor"){
        ++playerScore;
        return("You win! Rock beats scissor.");
    } else if(playerSelection === "scissor" && computerSelection === "paper"){
        ++playerScore;
        return("You win! Scissor beats paper.");
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        ++computerScore;
        return("You lose! Paper beats rock.")
    } else if(playerSelection === "paper" && computerSelection === "scissor"){
        ++computerScore;
        return("You lose! Scissor beats paper");
    } else if(playerSelection === "scissor" && computerSelection === "rock"){
        ++computerScore;
        return("You lose! Rock beats Scissor");
    } else if(playerSelection === "rock" && computerSelection === "rock"){
        return("Its a tie!");
    } else if(playerSelection === "paper" && computerSelection === "paper"){
        return("Its a tie!");
    } else if(playerSelection === "scissor" && computerSelection === "scissor"){
        return("Its a tie!");
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
score(playerScore, computerScore);

function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Enter your choice: ").toLowerCase();
        computerSelection = computerPlay();
        playRound();
        console.log(playRound());
    }
    console.log(score());

}

playRound(playerSelection, computerSelection);
game();
