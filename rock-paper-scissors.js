// Rock Paper Scissors Project
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let computerChoice;
let userInput;

// Step 1: Initialize the game and explain the rules

function welcome() {
    console.log("Welcome to Rock Paper Scissors!")
}


// Grab computer choice with the getComputerChoice function

function getComputerChoice() {
    let computerChoice;
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice
}

welcome()

computerChoice = getComputerChoice().toLowerCase()


// Grab user input



// write a function to play the game -- take in the player and computer selections
function playGame(userInput, computerInput) {
    let winner;
    if (userInput == computerInput) {
        return `It's a tie! you both chose ${userInput}`
    }
    else if (userInput == 'rock' && computerInput == `scissors`) {
        playerScore++
        return `You Win! Rock beats Scissors!`
    }
    else if (userInput == 'rock' && computerInput == `paper`) {
        computerScore++
        return `You lose! paper beats rock!`
    }
    else if (userInput == 'paper' && computerInput == 'rock') {
        playerScore++
        return `You win! paper beats rock!`
    }
    else if (userInput == `paper` && computerInput == 'scissors') {
        computerScore++
        return `You lose! scissors beats paper!`
    }
    else if (userInput == 'scissors' && computerInput == 'paper') {
        playerScore++
        return `You win! scissors beats paper!`
    }
    else if (userInput == `scissors` && computerInput == 'rock') {
        computerScore++
        return `You lose! rock beats scissors!`
    }
    else {
        console.log(`There appears to be a problem, please play again!`)
    }
}


// Keep score

function game() {
    for (let i = 1; i < 6; i++) {
        console.log(`round ${i}, the score is ${playerScore} (player) to ${computerScore} (computer)`)
        computerChoice = getComputerChoice().toLowerCase()
        userInput = prompt(`Select a choice from Rock, Paper, or Scissors!`).toLowerCase()
        console.log(`you chose ${userInput}, and the computer chose ${computerChoice}`)
        console.log(playGame(userInput, computerChoice))
    }
    console.log(checkWinner())
}

function checkWinner() {
    if (playerScore > computerScore) {
        return `Player Wins! ${playerScore} to ${computerScore}`
    }
    else if (playerScore < computerScore) {
        return `Player Loses! ${playerScore} to ${computerScore}`
    }
    else if (playerScore == computerScore) {
        return `Draw! ${playerScore} to ${computerScore}`
    }
}







// Repeat 5 times

game()