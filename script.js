// Home Screen is Displayed
// Player makes a choice
//      Player clicks button
//      Click event is caught by window
//      Window extracts value from event
//      Return value
// Computer makes a choice
// Compare Choices
// Update Score
// Display Results
// Continue until all rounds played

const WIN = true;
const LOSE = false;

function game(numRounds) {
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

function round(e) {
    let playerSelection = e.target.value;
    let computerSelection = computerPlay();

    let result = getWinner(computerSelection, playerSelection);

    let resultDisplay = document.querySelector('.result > .score');
    if (result === WIN) {
        resultDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (result === LOSE) {
        resultDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
        resultDisplay.textContent = `Draw! ${computerSelection} against ${playerSelection}`;
    }
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

function playerPlay(e) {
    // On click, submit choice here
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

const btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
   btn.addEventListener('click', round); 
});
