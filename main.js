

const choices = ["rock", "paper", "scissors"];
const max = choices.length;

let playerScore = 0;
let computerScore = 0;
let computerWinMsg = "I win this round, as always.";
let humanWinMsg = "Lucky meatbag, you win this round.";
let tieMsg = "It's a tie."
let rounds = 5;
let wonRound = false;
let itsTie = false;



function getComputerChoice() {
    let index = Math.floor(Math.random() * max);
    return choices[index];
}

function getHumanChoice() {
    let choice = prompt("What's your choice, human? ");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`You choose ${humanChoice}.`)
    console.log(`Computer choose ${computerChoice}.`)

    wonRound = false;
    itsTie = false;

    //if player choice is not in choices go to next round
    if (!choices.includes(humanChoice)) {
        console.log(`That's not valid input, dumbass`)
        return
    }

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
        console.log(tieMsg);
        return
    } else if (wonRound) {
        console.log(humanWinMsg);
        playerScore += 1;
    } else {
        console.log(computerWinMsg);
        computerScore += 1;
    }
}
    

for (let i = 0; i < 5; i++) {
    console.log(`Round ${i+1}, let's play filthy human...`)
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`| Player Score = ${playerScore} | Computer Score = ${computerScore} |`)
    
}

