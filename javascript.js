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
        ◦ variabe – roundResult – starts as empty string ‘’
        
        ◦ function – processResult - takes roundResult
            ▪ if the roundResult is ‘tied’ – declare a tie, end the ‘round’
            ▪ if the result is ‘player’ or ‘computer’, update/display
                new score
                
                
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

// Starting Variables:
	// playersScore – Number – starts at 0
	// computersScore – Number – starts at 0
	// weapons – Array of String’s – ‘rock’, ‘paper’, ‘scissors’
	// playersWeapon – String – starts as an empty string ‘’
	// computersWeapon – String – starts as an empty string ‘’
let playersScore = 0;
let computersScore = 0;
const weapons = ['rock', 'paper', 'scissors'];
let playersWeapon = '';
let computersWeapon = '';


// Get a random number between 0 and 2 to use as an index in the
// ‘weapons’ array to be assinged as the computersWeapon
function getRandomIndex(weapons) {
    const randomIndex = Math.floor(Math.random() * weapons.length);
    return randomIndex;
}


function getComputersWeapon(weapons) {
    const randomIndex = getRandomIndex(weapons);
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
        roundResult = 'player';
    } else {
        roundResult = 'computer';
    }

    return roundResult;
}


// • function – increaseScore – takes either ‘player’ or ‘computer’
//                     ◦ updates the corresponding score
function increaseScore(roundResult) {
    if (roundResult === 'player') {
        playersScore++;
    } else if (roundResult === 'computer'){
        computersScore++;
    } else {
        return;
    }
}


//                 • function – displayNewScore – takes either ‘player’ or ‘computer’
//                     ◦ displays the corresponding new score