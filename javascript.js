// rock, paper, scissors

/* 
Screen Initialy Displays:
    • “Choose your weapon”
    • Three ‘buttons’, one corresponding to each weapon in ‘weapons’
    • playersScore on the left
    • computersScore on the right

Buttons:
    • Clicking a ‘button’ assings its corresponding ‘weapon’ to playersWeapon
    • playersWeapon is then used to play a ‘round’

Rounds:
    • function – round – takes playersWeapon
        // function – processResult
            // if the roundResult is ‘tied’ – declare a tie, end the ‘round’
            // if the result is ‘player’ or ‘computer’, update/display
            // new score
        ◦ function – checkForWinner – takes playersScore and computersScore
            ▪ if playersScore or computersScore >= 5
                • function – removeListeners
                    ◦ removes the listeners from the buttons
                • function – declareWinner
                    ◦ Announces winner
                • function – playAgain
                    ◦ add button to play again
                        ▪ button – event on click - 
                            • playGame
    • Function – playGame – Encapsulates all above
*/

// starting variables
let playersScore = 0;
let computersScore = 0;
let playersWeapon = '';
let computersWeapon = '';
const weapons = ['rock', 'paper', 'scissors'];

// sections in html setup for displaying scores
const playersScoreSection = document.querySelector('#players-score');
const computersScoreSection = document.querySelector('#computers-score');


// displaying scores
function displayPlayerScore(playersScore) {
    playersScoreSection.textContent = `Player: ${playersScore}`;
}


function displayComputerScore(computersScore) {
    computersScoreSection.textContent = `Computer: ${computersScore}`;
}


// get a random number between 0 and 2 to use as an index in the
// ‘weapons’ array to be assinged as the computersWeapon
function getRandomIndex() {
    const randomIndex = Math.floor(Math.random() * weapons.length);
    return randomIndex;
}


function getComputersWeapon() {
    const randomIndex = getRandomIndex();
    const computersWeapon = weapons[randomIndex];
    return computersWeapon;
}


// compares weapons and returns the winner as a string ‘player’,
// ‘computer’, or ‘tied’ – to be assinged to roundResult
function getRoundResult(playersWeapon, computersWeapon) {

    let roundResult;

    if (playersWeapon === computersWeapon){
        roundResult = 'tie';
    } else if (
        (playersWeapon == 'rock' && computersWeapon == 'scissors') ||
        (playersWeapon == 'scissors' && computersWeapon == 'paper') || 
        (playersWeapon == 'paper' && computersWeapon == 'rock')
    ){
        roundResult = 'Player';
    } else {
        roundResult = 'Computer';
    }
    
    return roundResult;
}


// section in html for displaying round results
const roundResultsSection = document.querySelector('#round-results');


// displaying round results
function displayRoundResults(roundResult) {
    let message = `Player chose ${playersWeapon},
        Computer chose ${computersWeapon}. `;
    
    if (roundResult === 'tie') {
        message += "Tied! Go again!"
    } else {
        message += `${roundResult} wins this round!`
    }

    roundResultsSection.textContent = message;
}


// increasing scores
function increasePlayersScore() {
    playersScore++;
}


function increaseComputersScore() {
    computersScore++;
}


// code for testing while building
displayPlayerScore(playersScore);
displayComputerScore(computersScore);

playersWeapon = 'rock';
computersWeapon = getComputersWeapon();

const roundResult = getRoundResult(playersWeapon, computersWeapon);

displayRoundResults(roundResult);