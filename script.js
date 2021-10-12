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

console.log(computerPlay());