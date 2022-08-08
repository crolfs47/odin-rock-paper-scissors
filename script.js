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
    if (player == 'rock') {
        if (computer == 'scissors') {
            return 1;
        }
        else {
            return 0;
        }
    }
    if (player == 'paper') {
        if (computer == 'rock') {
            return 1;
        }
        else {
            return 0;
        }
    }
    if (player == 'scissors') {
        if (computer == 'paper') {
            return 1;
        }
        else {
            return 0;
        }
    }
    
}

if (playRound() == 1) {
    console.log("Player Wins");
}


    


