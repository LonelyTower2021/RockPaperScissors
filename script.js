function game() {
    const WIN = true;
    const LOSE = false;

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = round();
        if (result === WIN) {playerScore++;}
        if (result === LOSE) {computerScore++;}
    }

    if (playerScore > computerScore) {
        return `You've won the game! ${playerScore} to ${computerScore}!!!`;
    } else if (computerScore > playerScore) {
        return `You've lost the game! ${playerScore} to ${computerScore}!!!`;
    } else {
        return `The game is a draw! ${playerScore} to ${computerScore}!!!`;
    }
}

function round() {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();

    return result(computerSelection, playerSelection);
}

function result(computerSelection, playerSelection) {
    let matchup = computerSelection + ',' + playerSelection;
    let winConditions = ['rock,paper', 'paper,scissors', 'scissors,rock'];
    let loseConditions = ['paper,rock', 'scissors,paper', 'rock,scissors'];

    if (winConditions.includes(matchup)) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return true;
    } else if (loseConditions.includes(matchup)) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        return false;
    } else {
        console.log(`Draw! ${computerSelection} against ${playerSelection}`);
        return null;
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