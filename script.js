//              Rock    Paper   Scissors
// Rock         Draw    Lose    Win
// Paper        Win     Draw    Lose
// Scissors     Lose    Win     Draw

function game() {
    const ROCK = 'rock';
    const PAPER = 'paper';
    const SCISSORS = 'scissors';

    let computerChoice = computerPlay();
    let playerChoice = prompt("Enter your choice!");

    playerChoice = playerChoice.toLowerCase();

    if (computerChoice === ROCK && playerChoice === PAPER) {
        return "You Win! Paper beats Rock!";
    } else if (computerChoice === ROCK && playerChoice === SCISSORS) {
        return "You Lose! Rock beats Scissors!";
    } else if (computerChoice === PAPER && playerChoice === ROCK) {
        return "You Lose! Paper beats Rock!";
    } else if (computerChoice === PAPER && playerChoice === SCISSORS) {
        return "You Win! Scissors beats Paper!";
    } else if (computerChoice === SCISSORS && playerChoice === ROCK) {
        return "You Win! Rock beats Scissors!";
    } else if (computerChoice === SCISSORS && playerChoice === PAPER) {
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