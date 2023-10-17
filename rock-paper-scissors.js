// Rock Paper Scissors Project
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let computerChoice;
let userInput;
const n = 5;



// FUNCTIONS

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



// Define a round and return who won the round
function playRound(userChoice) {
    let winner;
    let computerChoice = getComputerChoice().toLowerCase()
    console.log(`you chose ${userChoice}, and the computer chose ${computerChoice}`)
    if (userChoice == computerChoice) {
        return `It's a tie! you both chose ${userChoice}`
    }
    else if (userChoice == 'rock' && computerChoice == `scissors`) {
        playerScore++
        return `You Win! Rock beats Scissors!`
    }
    else if (userChoice == 'rock' && computerChoice == `paper`) {
        computerScore++
        return `You lose! paper beats rock!`
    }
    else if (userChoice == 'paper' && computerChoice == 'rock') {
        playerScore++
        return `You win! paper beats rock!`
    }
    else if (userChoice == `paper` && computerChoice == 'scissors') {
        computerScore++
        return `You lose! scissors beats paper!`
    }
    else if (userChoice == 'scissors' && computerChoice == 'paper') {
        playerScore++
        return `You win! scissors beats paper!`
    }
    else if (userChoice == `scissors` && computerChoice == 'rock') {
        computerScore++
        return `You lose! rock beats scissors!`
    }
    else {
        console.log(`There appears to be a problem, please play again!`)
    }
}


// Define a game of n rounds (n is defined)

function game(nRounds) {
    for (let i = 1; i < (nRounds+1); i++) {
        console.log(`round ${i}, the score is ${playerScore} (player) to ${computerScore} (computer)`)
        
        console.log(playRound(userChoice, computerChoice))
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


// Create Buttons

const btns = document.querySelectorAll('div button')

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (event) => {
        playRound(event.target.id);
        // console.log(event.target.id)
    });
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
rock.addEventListener('click', function (event) {
    event.target.style.background = 'blue';
});
paper.addEventListener('click', function (event) {
    event.target.style.background = 'blue';
});
scissors.addEventListener('click', function (event) {
    event.target.style.background = 'blue';
});


// Play the game

welcome()
console.log(btns)

// game(n)