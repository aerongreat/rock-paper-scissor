const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const compDisplay = document.getElementById("compDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {
  const compChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === compChoice) {
    result = "IT'S A TIE";
  } else {
    switch (playerChoice) {
      case "rock":
        result = (compChoice == "scissor") ? "YOU WIN" : "YOU LOSE";
        break;
      case "paper":
        result = (compChoice == "rock") ? "YOU WIN" : "YOU LOSE";
        break;
      case "scissor":
        result = (compChoice == "paper") ? "YOU WIN" : "YOU LOSE";
        break;
    }
  }
  playerDisplay.textContent = `PLAYER : ${playerChoice}`;
  compDisplay.textContent = `COMPUTER : ${compChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove = ("textToGreen", "textToRed");

  switch(result){
    case "YOU WIN":
      resultDisplay.classList.add("textToGreen");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE":
      resultDisplay.classList.add("textToRed");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}