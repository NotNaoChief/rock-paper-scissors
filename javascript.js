// rock, paper, scissors

/* 
Starting Variables:
	playersScore – Number – starts at 0
	computersScore – Number – starts at 0
	weapons – Array of String’s – ‘rock’, ‘paper’, ‘scissors’
	playersWeapon – String – starts as an empty string ‘’
	computersWeapon – String – starts as an empty string ‘’

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
        ◦ function – getComputersWeapon - takes ‘weapons’ Array
            ▪ function – getRandomInt
                • returns a random number between 0 and 2
            ▪ uses the randomInt as an index in the ‘weapons’ array to be assinged as the computersWeapon
        ◦ function – getRoundResult – takes playersWeapon and computersWeapon
            ▪ compares weapons
            ▪ returns the winner as a string ‘player’, ‘computer’, or ‘tied’ – to be assinged to roundResult
        ◦ function – processResult - takes roundResult
            ▪ if the roundResult is ‘tied’ – declare a tie, end the ‘round’
            ▪ if the result is ‘player’ or ‘computer’, update their score
                • function – updateScore – takes either ‘player’ or ‘computer’
                    ◦ updates the corresponding score
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
