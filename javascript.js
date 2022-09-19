// Rock Paper Scissors

// choices - rock, paper, scissors
const choices = ["rock", "paper", "scissors"];

// getComputerChoice() - return random choice between choices
function getComputerChoice(choices) {
    const randomInt = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomInt];
    return randomChoice;
} 

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') || 
        (playerSelection == 'paper' && computerSelection == 'rock')
        ) {
        return `You win, ${playerSelection} beats ${computerSelection}!`;
        } else {
        return `You Lose, ${playerSelection} is destroyed by ${computerSelection}!`
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
    })
});





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