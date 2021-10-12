//              Rock    Paper   Scissors
// Rock         Draw    Lose    Win
// Paper        Win     Draw    Lose
// Scissors     Lose    Win     Draw

function game() {
    let computerChoice = computerPlay();
    let playerChoice = prompt("Enter your choice!");
    playerChoice = playerChoice.toLowerCase();
    if (computerChoice === 'rock' && playerChoice === 'paper') {
        return "You Win! Paper beats Rock!";
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        return "You Lose! Rock beats Scissors!";
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        return "You Lose! Paper beats Rock!";
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        return "You Win! Scissors beats Paper!";
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        return "You Win! Rock beats Scissors!";
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        return "You Lose! Scissors beats Paper!";
    } else {
        return `Draw! ${computerChoice} and ${playerChoice}`;
    }
}

function computerPlay() {
    const NUM_CHOICES = 3;
    let number = _randomNumber(NUM_CHOICES);
    let choice = '';
    switch(number) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
        default:
            choice = 'NOT POSSIBLE';
            break;
    }
    return choice;
}

function _randomNumber(ceiling) {
    return Math.floor(Math.random() * ceiling);
}

console.log(game());