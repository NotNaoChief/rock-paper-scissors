// Rock Paper Scissors

// choices - rock, paper, scissors
const choices = ["rock", "paper", "scissors"];

let computerScore = 0;
let playerScore = 0;

function getRandomInt() {
    const randomInt = Math.floor(Math.random() * choices.length);
    return randomInt
}

// getComputerChoice() - return random choice between choices
function getComputerChoice(choices) {
    const randomInt = getRandomInt();
    const computerChoice = choices[randomInt];
    return computerChoice;
}

const playerScoreSection = document.querySelector('.playerScoreSection');

const computerScoreSection = document.querySelector('.computerScoreSection');

function updatePlayerScore() {
    playerScore++;
    playerScoreSection.textContent = `Player: ${playerScore}`;
}

function updateComputerScore() {
    computerScore++;
    computerScoreSection.textContent = `Computer: ${computerScore}`;
}

function initializeScores() {
    playerScoreSection.textContent = "Player: 0";
    computerScoreSection.textContent = "Computer: 0";
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') || 
        (playerSelection == 'paper' && computerSelection == 'rock')
        ) {
        updatePlayerScore();   
        return `You win, ${playerSelection} beats ${computerSelection}!`;
    } else {
        updateComputerScore();
        return `You Lose, ${playerSelection} beats ${computerSelection}!`
    }
}

// add event listener on the buttons calling playRound with the correct
// player selection
let result;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        // get result of the round 
        result = playRound(button.id, getComputerChoice(choices))
        
        // display results of the round in the results div
        const results = document.querySelector('#results');
        results.textContent = result;

        // check for winner
        if (computerScore === 5 || playerScore === 5) {
            if (playerScore > computerScore) {
                results.textContent = "Player Wins! Game over!";
            } else {
                results.textContent = "Computer Wins! Game Over!"
            }
        }

    })
});

initializeScores();



// game() - play 5 rounds, highest score at end is winner, announce winner.
`function game() {
    // playerScore starts at 0
    let playerScore = 0;

    // computerScore starts at 0
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let winner = playRound(getPlayerSelection(), getComputerChoice(choices));
        console.log(winner);
        if (winner[4] === 'w') {
            playerScore += 1;
        } else {
            computerScore += 1;
        }
    }
    if (playerScore > computerScore) {
        alert('Player Wins!');
    } else {
        alert("Player Loses!");
    }
}`