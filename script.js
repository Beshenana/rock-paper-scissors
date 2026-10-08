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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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

    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i);
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log("Final score: You " + humanScore + " - Computer " + computerScore);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("The computer won the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();