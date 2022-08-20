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


// playerScore starts at 0

// computerScore starts at 0

// playRound() - compare computerSelection with playerSelection to determine
//  winner, if draw go again. Increment winners score by 1. Announce win or 
//  lose round.

// game() - play 5 rounds, highest score at end is winner, announce winner.

