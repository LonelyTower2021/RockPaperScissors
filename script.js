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

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function round(e) {
    const WIN = true;
    const LOSE = false;

    let playerSelection = e.target.value;
    let computerSelection = computerPlay();

    let result = getWinner(computerSelection, playerSelection);
    let resultText = '';

    if (result === WIN) {
        resultText = `You win! ${playerSelection} beats ${computerSelection}!`;
        playerScore++;
    } else if (result === LOSE) {
        resultText = `You lose! ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
    } else {
        resultText = `Draw! ${computerSelection} against ${playerSelection}`;
    }

    rounds++;
    updateScoreUI(resultText);
}

function updateScoreUI(resultText) {
    let resultDisplay = document.querySelector('#resultText');
    let playerDisplay = document.querySelector('#playerScore');
    let computerDisplay = document.querySelector('#computerScore');

    resultDisplay.textContent = resultText;
    playerDisplay.textContent = playerScore;
    computerDisplay.textContent = computerScore;
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
