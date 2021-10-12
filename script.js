function game(numRounds) {
    const WIN = true;
    const LOSE = false;

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < numRounds; i++) {
        let result = round();
        if (result === WIN) {playerScore++;}
        if (result === LOSE) {computerScore++;}
    }

    if (playerScore > computerScore) {
        console.log("You've won the game!");
    } else if (computerScore > playerScore) {
        console.log("You've lost the game!");
    } else {
        console.log("The game is a draw!")
    }
    console.log(`${playerScore} to ${computerScore}!!!`)
}

function round() {
    const WIN = true;
    const LOSE = false;

    let computerSelection = computerPlay();
    let playerSelection = playerPlay();

    let result = getWinner(computerSelection, playerSelection);

    if (result === WIN) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if (result === LOSE) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    } else {
        console.log(`Draw! ${computerSelection} against ${playerSelection}`);
    }

    return result;
}

function getWinner(computerSelection, playerSelection) {
    let matchup = computerSelection + ',' + playerSelection;
    let winConditions = ['rock,paper', 'paper,scissors', 'scissors,rock'];
    let loseConditions = ['paper,rock', 'scissors,paper', 'rock,scissors'];

    if (winConditions.includes(matchup)) {
        return true;
    } else if (loseConditions.includes(matchup)) {
        return false;
    } else {
        return null;
    }
}

function playerPlay() {
    let playerChoice = prompt("Enter your choice!");
    return playerChoice.toLowerCase();
}

function computerPlay() {
    const NUM_CHOICES = 3;
    let choice = _randomNumber(NUM_CHOICES);
    let choices = {0: 'rock', 1: 'paper', 2: 'scissors'};
    return choices[choice];
}

function _randomNumber(ceiling) {
    return Math.floor(Math.random() * ceiling);
}

game(5);