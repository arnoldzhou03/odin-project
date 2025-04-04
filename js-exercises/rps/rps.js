function getComputerChoice() {
    let rand = Math.random();
    if (rand < 1.0 / 3) return "rock";
    else if (rand < 2.0 / 3) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let response = prompt("Choose one (rock, paper, scissors)")
    return response.toLowerCase();
}

const MAX_SCORE = 5;
let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    output = `The computer chose ${computerChoice}. `
    if (humanChoice === computerChoice) {
        output += "Tie!";
        console.log(output);
        return;
    }
    let computerWon = (humanChoice === "rock" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "rock");
    
    if(computerWon) {
        output += "Computer won!";
        computerScore++;
    }
    else {
        output += "You won!";
        humanScore++;
    }

    console.log(output);
}

function playGame() {
    while(humanScore < MAX_SCORE && computerScore < MAX_SCORE) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        
        playRound(humanChoice, computerChoice);
    }

    if(humanScore == MAX_SCORE) console.log("You win!");
    else if(computerScore == MAX_SCORE) console.log("Computer wins!");
}

playGame();