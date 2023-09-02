function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)
    if (random == 0) {
        random = "Rock"
    }
    if (random == 1) {
        random = "Paper"
    }
    if (random == 2) {
        random = "Scissors"
    }
    console.log(random)
    return random
}

function getPlayerChoice () {
    const choice = prompt("Choose")
    console.log(choice)
    return choice
}

function playRound(lowercasePlayer, lowercaseComputer) {
    if (lowercasePlayer == lowercaseComputer) {
        return "Tie! " + playerSelection + " is equal to " + computerSelection
    }
    if (lowercasePlayer == "rock" && lowercaseComputer == "scissors" || lowercasePlayer == "paper" && lowercaseComputer == "rock" || lowercasePlayer == "scissors" && lowercaseComputer == "paper") {
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
    if (lowercaseComputer == "rock" && lowercasePlayer == "scissors" || lowercaseComputer == "paper" && lowercasePlayer == "rock" || lowercaseComputer == "scissors" && lowercasePlayer == "paper") {
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
}

const computerSelection = getComputerChoice()
lowercaseComputer = computerSelection.toLowerCase()

const playerSelection = getPlayerChoice()
lowercasePlayer = playerSelection.toLowerCase()

console.log(playRound(lowercasePlayer, lowercaseComputer))