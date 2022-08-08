let choice = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    return randChoice;
}