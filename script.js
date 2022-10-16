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
 * ELSE
 *  IF player's is rock
 *    IF computer's is scissors
 *      player wins
 *    IF computer is paper
 *      computer wins
 *  IF player's is paper
 *    IF computer's is rock
 *      player wins
 *    IF computer is scissors
 *      computer wins
 * IF player's is scissors
 *    IF computer's is paper
 *      player wins
 *    IF computer is rock
 *      computer wins
 * 
 * Restart the game
 * GET new player choice
 * GET new computer's choice
 */

//Possible choices
const choices = Array("rock", "paper", "scissors");

function getComputerChoice() {
  //Choose a random item from the choices list
  return choices[Math.floor(Math.random() * choices.length)]
}

console.log(getComputerChoice())