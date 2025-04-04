function getComputerChoice() {
    let rand = Math.random();
    if(rand < 1.0/3) return "rock";
    else if(rand < 2.0/3) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let response = prompt("Choose one (rock, paper, scissors)")
    return response.toLowerCase();
}

let humanScore=0, computerScore=0;

function playRound(humanChoice, computerChoice) {

}