let choice = ['rock', 'paper', 'scissors']

const tie = "Tie!";
const win = "Player Wins!";
const loss = "Player Loses :(";
let playerScore = 0;
let computerScore = 0;

const playerChoice = document.querySelector('#playerSelection');
const computerChoice = document.querySelector('#computerSelection');
const results = document.querySelector('#results');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const gameOver = document.querySelector('#gameOver');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id,);
    })
})

function getComputerChoice() {
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    return randChoice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    player = playerSelection.toLowerCase();
    computer = computerSelection;
    playerChoice.textContent = 'Player Selection: ' + player;
    computerChoice.textContent = 'Computer Selection: ' + computer;
    if (player == computer) {
        results.textContent = "Results: " + tie;
        return tie; 
    }
    else if (player == 'rock') {
        if (computer == 'scissors') {
            results.textContent = "Results: " + win;
            playerPoints.textContent = "Player Score: " + ++playerScore;
            //return win;
            if (playerScore === 5) {
                gameOver.textContent = "Game over! Player wins!";
            }
        }
        else {
            results.textContent = "Results: " + loss;
            computerPoints.textContent = "Computer Score: " + ++computerScore;
            //return loss;
            if (computerScore === 5) {
                gameOver.textContent = "Game over! Computer wins!";
            }
        }
    }
    else if (player == 'paper') {
        if (computer == 'rock') {
            results.textContent = "Results: " + win;
            playerPoints.textContent = "Player Score: " + ++playerScore;
            //return win;
            if (playerScore === 5) {
                gameOver.textContent = "Game over! Player wins!";
            }
        }
        else {
            results.textContent = "Results: " + loss;
            computerPoints.textContent = "Computer Score: " + ++computerScore;
            //return loss;
            if (computerScore === 5) {
                gameOver.textContent = "Game over! Computer wins!";
            }
        }
    }
    else if (player == 'scissors') {
        if (computer == 'paper') {
            results.textContent = "Results: " + win;
            playerPoints.textContent = "Player Score: " + ++playerScore;
            //return win;
            if (playerScore === 5) {
                gameOver.textContent = "Game over! Player wins!";
            }
        }
        else {
            results.textContent = "Results: " + loss;
            computerPoints.textContent = "Computer Score: " + ++computerScore;
            //return loss;
            if (computerScore === 5) {
                gameOver.textContent = "Game over! Computer wins!";
            }
        }
    } 
}









//function game() {
//    playerScore = 0;
//    computerScore = 0;

//    for (let i = 0; i < 5; i++) {
//        result = playRound();
//        if (result == win) {
//            playerScore += 1;
//       }
//        if (result == loss) {
//            computerScore += 1;
//        }
//        console.log("Player Score = " + playerScore + ", Computer Score = " + computerScore);
//    }

//    if (playerScore > computerScore) {
//        console.log("Player Wins!");
//    }
//    else if (playerScore < computerScore) {
//        console.log("Computer Wins!");
//    }
//    else {
//        console.log("Tie!");
//    }
//}



    


