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
    
    let computerWon = (humanChoice === "rock" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "rock");
    
    if (humanChoice === computerChoice) {
        output += "Tie!";
    }
    else if(computerWon) {
        output += "Computer won!";
        computerScore++;
    }
    else {
        output += "You won!";
        humanScore++;
    }

    const result = document.querySelector("#result");
    result.textContent = output;

    updateScoreDisplay();
    // console.log(output);
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

function updateScoreDisplay() {
    const score = document.querySelector("#score");
    score.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`
}

function initGame() {
    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");

    const result = document.createElement("div");
    result.id = "result";
    const score = document.createElement("div");
    score.id = "score";
    
    rockBtn.textContent = "rock"
    paperBtn.textContent = "paper"
    scissorsBtn.textContent = "scissors"
    rockBtn.addEventListener("click", () => onPress("rock"));
    paperBtn.addEventListener("click", () => onPress("paper"));
    scissorsBtn.addEventListener("click", () => onPress("scissors"));

    const body = document.querySelector("body");
    body.appendChild(rockBtn);
    body.appendChild(paperBtn);
    body.appendChild(scissorsBtn);
    body.appendChild(result);
    body.appendChild(score);

    updateScoreDisplay();
}

function onPress(humanChoice) {
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

initGame();
// playGame();