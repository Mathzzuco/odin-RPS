let result = "Not played yet";
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    random = "Rock";
  }
  if (random === 1) {
    random = "Paper";
  }
  if (random === 2) {
    random = "Scissors";
  }
  return random.toLowerCase();
}

const computerSelection = getComputerChoice();

const btnRock = document.querySelector("#btn-rock");
btnRock.addEventListener("click", () => {
  const playerSelection = "rock";
  console.log(playRound(playerSelection, getComputerChoice()));
  return playerSelection;
});

const btnPaper = document.querySelector("#btn-paper");
btnPaper.addEventListener("click", () => {
  const playerSelection = "paper";
  console.log(playRound(playerSelection, getComputerChoice()));
  return playerSelection;
});

const btnScissors = document.querySelector("#btn-scissors");
btnScissors.addEventListener("click", () => {
  const playerSelection = "scissors";
  // console.log(playRound(playerSelection, getComputerChoice()));
  return playRound(playerSelection, getComputerChoice());
});

/*function getPlayerChoice() {
  const choice = prompt("Choose");
  console.log(choice);
  return choice.toLowerCase();
} */

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result = "Tie! " + playerSelection + " is equal to " + computerSelection;
    displayScore();
    return result;
  }

  const hasPlayerWon =
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper");

  if (hasPlayerWon) {
    playerScore = playerScore + 1;
    result = "You Win! " + playerSelection + " beats " + computerSelection;
    displayScore();
    return result;
  }

  const hasComputerWon =
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper");

  if (hasComputerWon) {
    computerScore = computerScore + 1;
    result = "You Lose! " + computerSelection + " beats " + playerSelection;
    displayScore();
    return result;
  } else {
    return "Not an option";
  }
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}

/*function game() {
  resetScore();
  for (let x = 0; x < 5; x++) {
    const gameLowercasePlayer = getPlayerChoice();
    const gameLowercaseComputer = getComputerChoice();
    console.log(playRound(gameLowercasePlayer, gameLowercaseComputer));
  }
  if (playerScore > computerScore) {
    return (
      "You Won! Your score: " +
      playerScore +
      " Computer score: " +
      computerScore
    );
  }
  if (computerScore > playerScore) {
    return (
      "You Lost! Your score: " +
      playerScore +
      " Computer score: " +
      computerScore
    );
  } else {
    return (
      "Tie! Your score: " + playerScore + " Computer score: " + computerScore
    );
  }
}*/
function displayScore() {
  if (playerScore >= 5) {
    document.querySelector(".results").innerHTML =
      "Player Score: " +
      playerScore +
      "<br>" +
      "Computer Score: " +
      computerScore +
      "<br>" +
      result +
      "<br>" +
      "The player is the winner";
    resetScore();
  } else if (computerScore >= 5) {
    document.querySelector(".results").innerHTML =
      "Player Score: " +
      playerScore +
      "<br>" +
      "Computer Score: " +
      computerScore +
      "<br>" +
      result +
      "<br>" +
      "The computer is the winner";
    resetScore();
  } else
    document.querySelector(".results").innerHTML =
      "Player Score: " +
      playerScore +
      "<br>" +
      "Computer Score: " +
      computerScore +
      "<br>" +
      result;
}
displayScore();
