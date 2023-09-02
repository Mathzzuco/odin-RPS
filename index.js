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
  console.log(random);
  return random.toLowerCase();
}

function getPlayerChoice() {
  const choice = prompt("Choose");
  console.log(choice);
  return choice.toLowerCase();
}

function playRound(lowercasePlayer, lowercaseComputer) {
  if (lowercasePlayer === lowercaseComputer) {
    return "Tie! " + playerSelection + " is equal to " + computerSelection;
  }

  const hasPlayerWon =
    (lowercasePlayer === "rock" && lowercaseComputer === "scissors") ||
    (lowercasePlayer === "paper" && lowercaseComputer === "rock") ||
    (lowercasePlayer === "scissors" && lowercaseComputer === "paper");

  if (hasPlayerWon) {
    playerScore = playerScore + 1;
    return "You Win! " + playerSelection + " beats " + computerSelection;
  }

  const hasComputerWon =
    (lowercaseComputer === "rock" && lowercasePlayer === "scissors") ||
    (lowercaseComputer === "paper" && lowercasePlayer === "rock") ||
    (lowercaseComputer === "scissors" && lowercasePlayer === "paper");

  if (hasComputerWon) {
    computerScore = computerScore + 1;
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  } else {
    return "Not a option";
  }
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}

function game() {
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
}

const playerSelection = getPlayerChoice();
let playerScore = 0;

const computerSelection = getComputerChoice();
let computerScore = 0;

console.log(playRound(playerSelection, computerSelection));
