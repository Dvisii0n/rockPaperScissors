

const choices = ["rock", "paper", "scissors"];
const max = choices.length;

let playerScore = 0;
let computerScore = 0;
let computerWinMsg = "I win this round, as always.";
let humanWinMsg = "Lucky, you win this round.";
let tieMsg = "It's a tie."
let roundLimit = 5;
let roundCount = 0;
let wonRound = false;
let itsTie = false;
let text = "";

const body = document.querySelector("body");
const restartButton = document.createElement("button");
restartButton.textContent = "Restart";
restartButton.addEventListener("click", (e) => restartGame());

function getComputerChoice() {
    let index = Math.floor(Math.random() * max);
    return choices[index];
}

function getHumanChoice() {
    let choice = prompt("What's your choice, human? ");
    return choice.toLowerCase();
}

function displayScore(text) {
    let score = document.querySelector(".score");
    score.textContent = text;
}

function addRestartButton() {
    body.appendChild(restartButton);
    
}

function restartGame() {
    roundCount = 0;
    displayScore("Game restarted, select something")
    playerScore = 0;
    computerScore = 0;
    body.removeChild(restartButton);
}

function playRound(humanChoice, computerChoice) {
    let msg = "";
    
    wonRound = false;
    itsTie = false;

    if (humanChoice === computerChoice) {
        itsTie = true;
    }

    if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            wonRound = true;
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            wonRound = true;
        } 
    } else if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            wonRound = true;
        }
    } 
   
    if (itsTie) {
        msg = tieMsg;
    } else if (wonRound) {
        msg = humanWinMsg;
        playerScore += 1;
    } else {
        msg = computerWinMsg;
        computerScore += 1;
    }
    roundCount += 1;
    if (roundCount > roundLimit) {
        if (playerScore > computerScore) {
            msg = `You WON, Your Score: ${playerScore} | Computer: ${computerScore}`;
        } else if (playerScore < computerScore) {
            msg = `You LOST, Your Score: ${playerScore} | Computer: ${computerScore}`;

        } else {
            msg = `It's a tie HOW??!!!, Your Score: ${playerScore} | Computer: ${computerScore}`;
        }

        text = `Game ended: ${msg}`;
        addRestartButton();

    } else {
        text = `Round ${roundCount} You choose ${humanChoice}. Computer choose ${computerChoice}. Your Score: ${playerScore} | Computer: ${computerScore}: ${msg}`;
    }

    displayScore(text);
}
    
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(button.className, getComputerChoice())
    });
})

