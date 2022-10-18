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
// I could have made this simpler by never checking if the computer loses,
// since if there is no computer win, and no draw, it must be
// a computer lose, but only assuming everything else went right.
function evaluateRound(computerSelection, playerSelection) {
  console.log(`Computer chose: ${computerSelection}`)
  console.log(`You chose: ${playerSelection}`)
  switch (computerSelection) {
    case playerSelection:
      console.log("It's a Draw!");
      return null;
    // Does computer win?
    case CHOICES[(CHOICES.indexOf(playerSelection) + 1) % CHOICES.length]:
      console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
      return -1;
    // Does computer lose?
    case CHOICES[(CHOICES.indexOf(playerSelection) - 1 + CHOICES.length) % CHOICES.length]:
      console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
      return 1;
    default:
      console.log("Someting went wrong");
      return null;
  }
}

function game() {
  return evaluateRound(getComputerChoice(), prompt().toLowerCase())
}
game()