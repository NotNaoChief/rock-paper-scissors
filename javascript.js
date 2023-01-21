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
Play Game:
    Function – playGame – Encapsulates all above
*/

// starting variables
let playersScore;
let computersScore;
let playersWeapon = '';
let computersWeapon = '';
const weapons = ['rock', 'paper', 'scissors'];

// create play again button and initialize hidden
const playAgain = document.createElement("button");
playAgain.textContent = "Play Again?";
document.body.appendChild(playAgain);
playAgain.style.display = 'none'

// sections in html setup for displaying scores
const playersScoreSection = document.querySelector('#players-score');
const computersScoreSection = document.querySelector('#computers-score');


// displaying scores
function displayPlayerScore() {
    playersScoreSection.textContent = `Player: ${playersScore}`;
}


function displayComputerScore() {
    computersScoreSection.textContent = `Computer: ${computersScore}`;
}


// get a random number between 0 and 2 to use as an index in the
// ‘weapons’ array to be assigned as the computersWeapon
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
function displayRoundResults(roundMessage) {
    let message = `Player chose ${playersWeapon},
        Computer chose ${computersWeapon}. ${roundMessage}`;

    roundResultsSection.textContent = message;
}


// increasing scores
function increasePlayersScore() {
    playersScore++;
}


function increaseComputersScore() {
    computersScore++;
}


// if the roundResult is ‘tied’ – declare a tie, end the ‘round’
// if the result is ‘player’ or ‘computer’, update/display
// new score
function processResult(roundResult) { 
    let roundMessage;
    if (roundResult === 'tie') {
        roundMessage = "Tie round!";
    } else if (roundResult === 'Player'){
        roundMessage = `Player wins this round!`;
        increasePlayersScore();
        displayPlayerScore();
    } else {
        roundMessage = 'Computer wins this round!';
        increaseComputersScore();
        displayComputerScore();
    }
    
    displayRoundResults(roundMessage);
}


// grab weapons buttons for adding/removing listeners
const weaponsButtons = document.querySelectorAll('.weapons button');


// clicking a button triggers a round with the players weapon set to
// the weapon associated with the button
function addWeaponsListener() {
    weaponsButtons.forEach(
        weapon => {
            weapon.addEventListener('click', () => {
                playersWeapon = weapon.id;
                round();
            })
        }
    );
}


// event listener for play again button
function addPlayAgainListener() {
    playAgain.addEventListener("click", () => {
    
        // display messages and weapons
        weaponsButtons.forEach(
            weapon => {
                weapon.style.display = 'inline';
            }
            )
            
            // display beginning messages
            document.querySelector('p+p').style.display = 'block';
            document.querySelector('p+p+p').style.display = 'block';
            
            // clear winners message
            document.querySelector('#winner').textContent = '';

            // hide play again button
            playAgain.style.display = 'none';
            
            // restart game
            game();
    })
}


function isWinner() {
    if (playersScore === 5 || computersScore === 5) {
        return true
    } else {
        return false
    }
}


function announceWinner(winner) {
    const winnerSection = document.querySelector('#winner');

    winnerSection.textContent = `${winner} wins!`
}



function round() {
    
    computersWeapon = getComputersWeapon();
    
    const roundResult = getRoundResult(playersWeapon, computersWeapon);
    processResult(roundResult);

    // check for winner
    if (isWinner() === true) {
        
        // announcing winner
        if (playersScore === 5) {
            announceWinner('Player');
        } else {
            announceWinner('Computer');
        }

        // stop the buttons from triggering a round
        // MAKE INTO FUNCTION
        weaponsButtons.forEach(
            weapon => {
                weapon.style.display = 'none';
            }
        )
        
        // clear beginning messages
        document.querySelector('p+p').style.display = 'none';
        document.querySelector('p+p+p').style.display = 'none';

        // show play again button
        playAgain.style.display = 'inline';
        
    }
}


function game() {
    playersScore = 0;
    computersScore = 0;
    displayPlayerScore(playersScore);
    displayComputerScore(computersScore);
    
}

addWeaponsListener();
addPlayAgainListener();
game();