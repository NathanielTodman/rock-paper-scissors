const choices = ["Rock", "Paper", "Scissors"]

// Get random choice of rock, paper or scissors for the computer oponent
function getComputerChoice() {
    // Get a random number between 0 and 2
    const index = Math.ceil(Math.random() * 3);
    // Return an element from the choices array using the random index
    return index;
}

// Get choice from player
function getPlayerChoice() {
    let playerChoice = 0;

    while (isNaN(playerChoice) || playerChoice < 1 || playerChoice > 3) {
        playerChoice = parseInt(prompt("Please enter a number to select your choice:\r\n1.Rock\r\n2.Paper\r\n3.Scissors"));
    }

    return playerChoice;
}

// Determine winner from the given selections. Return 1 if player wins, -1 if computer wins, or 0 if a draw
function playRound(playerSelection = 0, computerSelection = 0) {
    if (playerSelection === computerSelection) {
        console.log("Draw Game!");
        return 0;
    }

    let playerWins = false;

    // 1 (rock) beats 3 (scissors)
    if (playerSelection === 1 && computerSelection === 3) {
        playerWins = true;
    }
    // 2 (paper) beats 1 (rock)
    else if (playerSelection === 2 && computerSelection === 1) {
        playerWins = true;
    }
    // 3 (scissors) beats 2 (paper)
    else if (playerSelection === 3 && computerSelection === 2) {
        playerWins = true;
    }

    if (playerWins) {
        console.log(`You Win! ${choices[playerSelection - 1]} beats ${choices[computerSelection - 1]}`);
        return 1;
    }
    else {
        console.log(`You Lose! ${choices[computerSelection - 1]} beats ${choices[playerSelection - 1]}`);
        return -1;
    }
}

function play() {
    // Propmt user for a choice
    const playerSelection = getPlayerChoice();

    // Get computer's choice
    const computerSelection = getComputerChoice();

    // Play round and determine winner
    return playRound(playerSelection, computerSelection)
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        const result = play();
        if (result > 0)
            playerScore++;
        else if (result < 0)
            computerScore++;
    }

    if (playerScore > computerScore) {
        console.log(`You Won the Game! ${playerScore}-${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You Lost the Game! ${playerScore}-${computerScore}`);
    }
    else {
        console.log(`Draw Game! ${playerScore}-${computerScore}`);
    }
}

game();