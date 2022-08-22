let choice = ['rock', 'paper', 'scissors']

const tie = "Tie!";
const win = "Player Wins!";
const loss = "Player Loses :(";
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.choiceButton');
const playerChoice = document.querySelector('#playerSelection');
const computerChoice = document.querySelector('#computerSelection');
const results = document.querySelector('#results');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const gameOver = document.querySelector('#gameOver');
const restart = document.querySelector('#restart');

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
            endGame();
        }
        else {
            results.textContent = "Results: " + loss;
            computerPoints.textContent = "Computer Score: " + ++computerScore;
            endGame();
        }
    }
    else if (player == 'paper') {
        if (computer == 'rock') {
            results.textContent = "Results: " + win;
            playerPoints.textContent = "Player Score: " + ++playerScore;
            endGame();
        }
        else {
            results.textContent = "Results: " + loss;
            computerPoints.textContent = "Computer Score: " + ++computerScore;
            endGame();
        }
    }
    else if (player == 'scissors') {
        if (computer == 'paper') {
            results.textContent = "Results: " + win;
            playerPoints.textContent = "Player Score: " + ++playerScore;
            endGame();
        }
        else {
            results.textContent = "Results: " + loss;
            computerPoints.textContent = "Computer Score: " + ++computerScore;
            endGame();
        }
    } 
}

function endGame() {
    if (playerScore === 5) {
        gameOver.textContent = "Game over! Player wins!";
        buttons.forEach((button) => {
            button.disabled = true;
        })
    }
    else if (computerScore === 5) {
        gameOver.textContent = "Game over! Computer wins!";
        buttons.forEach((button) => {
            button.disabled = true;
        })  
}}

restart.addEventListener('click', () => {
    location.reload();
})




    


