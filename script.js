//              Rock    Paper   Scissors
// Rock         Draw    Lose    Win
// Paper        Win     Draw    Lose
// Scissors     Lose    Win     Draw

function game() {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();

    return result(computerSelection, playerSelection);
}

function result(computerSelection, playerSelection) {
    const ROCK = 'rock';
    const PAPER = 'paper';
    const SCISSORS = 'scissors';

    if (computerSelection === ROCK && playerSelection === PAPER) {
        return "You Win! Paper beats Rock!";
    } else if (computerSelection === ROCK && playerSelection === SCISSORS) {
        return "You Lose! Rock beats Scissors!";
    } else if (computerSelection === PAPER && playerSelection === ROCK) {
        return "You Lose! Paper beats Rock!";
    } else if (computerSelection === PAPER && playerSelection === SCISSORS) {
        return "You Win! Scissors beats Paper!";
    } else if (computerSelection === SCISSORS && playerSelection === ROCK) {
        return "You Win! Rock beats Scissors!";
    } else if (computerSelection === SCISSORS && playerSelection === PAPER) {
        return "You Lose! Scissors beats Paper!";
    } else {
        return `Draw! ${playerSelection} ties with ${computerSelection}`;
    }
}

function playerPlay() {
    let playerChoice = prompt("Enter your choice!");
    return playerChoice.toLowerCase();
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