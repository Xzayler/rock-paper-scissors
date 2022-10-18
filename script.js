//Rock Paper Scissors

//Game-flow:
//User selects from 3
//Computer selects from same three choices
//Result is evaluated and victor is decided on

//Pseudo-Code
/**
 * GET player choice of rock, paper, or scissors as a string
 * GET computer's random choice of rock, paper or scissors as a string
 * IF player's choice is the same as the computer's:
 *  draw
 * 
 * IF player's choice beats computer's choice:
 *  player wins
 * ELSE:
 *  computer wins
 * 
 * Restart the game
 * GET new player choice
 * GET new computer's choice
 */


//Possible choices
const CHOICES = Array("rock", "paper", "scissors");

function getComputerChoice() {
  //Choose a random item from the choices list
  return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}

// This function evaluates the winner based on the oder of the
// elements within the CHOICES list. Each element beats the
// element before it, and loses to the element after it.
// This game can thus be expanded

function evaluateRound(computerSelection, playerSelection) {
  switch (computerSelection) {
    case playerSelection:
      return "It's a Draw!";
    // Does computer win?
    case CHOICES[(CHOICES.indexOf(playerSelection) + 1) % CHOICES.length]:
      return `You lose! ${computerSelection} beats ${playerSelection}!`;
    // Does computer lose?
    case CHOICES[(CHOICES.indexOf(playerSelection) - 1 + CHOICES.length) % CHOICES.length]:
      return `You win! ${playerSelection} beats ${computerSelection}!`;    
    default:
      return ERROR_MESSAGE;
  }
}

console.log(evaluateRound("paper", prompt().toLowerCase()))