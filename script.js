let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const random = Math.random();
    if (random < 0.34) return "rock";
    else if (random <= 0.67) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    const choice = prompt("Enter rock, paper or scissors");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! You both chose " + humanChoice);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanScore, computerScore);