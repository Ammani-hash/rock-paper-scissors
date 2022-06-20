function computerPlay(){
    var index = Math.floor(Math.random() * 3);
    let state = ["Rock", "Paper", "Scissor"];
    console.log(index);
    return state[index]; 
}

function play(a, b){
    if(playerSelection === "Paper" && computerSelection === "Rock"){
        console.log("You win! Paper beats rock.")
    } else if(playerSelection === "Rock" && computerSelection === " Scissor"){
        return("You win! Rock beats scissor.");
    } else if(playerSelection === "Scissor" && computerSelection === "Paper"){
        return("You win! Scissor beats paper.");
    } else if(playerSelection === "Rock" && computerSelection === "Paper"){
        return("You lose! Paper beats rock.")
    } else if(playerSelection === "Paper" && computerSelection === "Scissor"){
        return("You lose! Scissor beats paper");
    } else if(playerSelection === "Scissor" && computerSelection === "Rock"){
        return("You lose! Rock beats Scissor");

    } else if(playerSelection === "Rock" && computerSelection === "Rock"){
        return("Its a tie!");
    } else if(playerSelection === "Paper" && computerSelection === "Paper"){
        return("Its a tie!");
    } else if(playerSelection === "Scissor" && computerSelection === "Scissor"){
        return("Its a tie!");
    } 
}

const playerSelection = "Paper";
const computerSelection = computerPlay();
console.log(play(playerSelection, computerSelection));

computerPlay();