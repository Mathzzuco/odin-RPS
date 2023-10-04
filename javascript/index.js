let result = "Not played yet.";
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
  return playRound(playerSelection, getComputerChoice());
});

const btnPaper = document.querySelector("#btn-paper");
btnPaper.addEventListener("click", () => {
  const playerSelection = "paper";
  return playRound(playerSelection, getComputerChoice());
});

const btnScissors = document.querySelector("#btn-scissors");
btnScissors.addEventListener("click", () => {
  const playerSelection = "scissors";
  return playRound(playerSelection, getComputerChoice());
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result =
      "Tie! " + playerSelection + " is equal to " + computerSelection + ".";
    displayScore();
    return result;
  }

  const hasPlayerWon =
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper");

  if (hasPlayerWon) {
    playerScore = playerScore + 1;
    result =
      "You Win! " + playerSelection + " beats " + computerSelection + ".";
    displayScore();
    return result;
  }

  const hasComputerWon =
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper");

  if (hasComputerWon) {
    computerScore = computerScore + 1;
    result =
      "You Lose! " + computerSelection + " beats " + playerSelection + ".";
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

function displayScore() {
  const hasGameEnded = playerScore >= 5 || computerScore >= 5;

  document.querySelector(".player-score span").innerHTML = playerScore;
  document.querySelector(".computer-score span").innerHTML = computerScore;
  document.querySelector(".match-result p").innerHTML = result;

  let finalResult = "";

  if (hasGameEnded) {
    if (playerScore > computerScore) {
      finalResult = "The Player is the winner!";
    } else {
      finalResult = "The Computer is the winner!";
    }
    resetScore();
  }

  document.querySelector(".final-result p").innerHTML = finalResult;
}
displayScore();
