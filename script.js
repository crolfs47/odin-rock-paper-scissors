let choice = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    return randChoice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("choose rock, paper, or scissors");
    player = playerSelection.toLowerCase();
    computer = computerSelection;
    console.log(player);
    console.log(computer);
    if (player == computer) {
        return tie; 
    }
    else if (player == 'rock') {
        if (computer == 'scissors') {
            return win;
        }
        else {
            return loss;
        }
    }
    else if (player == 'paper') {
        if (computer == 'rock') {
            return win;
        }
        else {
            return loss;
        }
    }
    else if (player == 'scissors') {
        if (computer == 'paper') {
            return win;
        }
        else {
            return loss;
        }
    }
}

let tie;
let win;
let loss;

function game() {
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        result = playRound();
        if (result == win) {
            playerScore += 1;
        }
        if (result == loss) {
            computerScore += 1;
        }
        console.log("Player Score = " + playerScore + ", Computer Score = " + computerScore);
    }

    if (playerScore > computerScore) {
        console.log("Player Wins!");
    }
    else if (playerScore < computerScore) {
        console.log("Computer Wins!");
    }
    else {
        console.log("Tie!");
    }
}


    


