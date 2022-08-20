// Rock Paper Scissors

// choices - rock, paper, scissors
const choices = ["rock", "paper", "scissors"];

// getComputerChoice() - return random choice between choices
function getComputerChoice(choices) {
    const randomInt = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomInt];
    return randomChoice;
} 

// playerSelection() - prompt player for their choice
// convert toLowerCase() for validation
function getPlayerSelection() {
    const playerSelection = prompt(`Make your choice between rock, paper, or scissors.`);  
    const validatedPlayerSelection = playerSelection.toLocaleLowerCase();
    return validatedPlayerSelection;   
}

// computerSelection = getComputerChoice()

// playRound() - compare computerSelection with playerSelection to determine
//  winner, if draw go again. Announce win or 
//  lose round.
function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') || 
        (playerSelection == 'paper' && computerSelection == 'rock')
        ){
        return `You win, ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == computerSelection) {
        return "Tie!"
    } else {
        return `You Lose, ${playerSelection} is destroyed by ${computerSelection}!`
    }
}


// game() - play 5 rounds, highest score at end is winner, announce winner.

    // playerScore starts at 0
    let playerScore = 0;

    // computerScore starts at 0
    let computerScore = 0;
