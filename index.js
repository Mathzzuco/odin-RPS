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
    return random
}

function getPlayerChoice () {
    const choice = prompt("Choose")
    return choice
}

const computerSelection = getComputerChoice()
const playerSelection = getPlayerChoice()