const choices = ['rock', 'paper', 'scissors'];
const n = 5;
let playerScore = 0;
let computerScore = 0;

// Helper function to get computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Helper function to determine the winner of a round
function getRoundWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    }
    return 'computer';
}

// Helper function to update the UI
function updateUI(userChoice, computerChoice, roundResult) {
    const roundChoices = document.getElementById('choices');
    const roundOutcome = document.getElementById('outcome');
    const score = document.getElementById('score');

    roundChoices.textContent = `You chose ${userChoice}, and the computer chose ${computerChoice}`;
    if (roundResult === 'tie') {
        roundOutcome.textContent = `It's a tie! You both chose ${userChoice}`;
    } else if (roundResult === 'player') {
        playerScore++;
        roundOutcome.textContent = `You win! ${userChoice} beats ${computerChoice}!`;
    } else {
        computerScore++;
        roundOutcome.textContent = `You lose! ${computerChoice} beats ${userChoice}!`;
    }
    score.textContent = `Current Score: Player ${playerScore} - ${computerScore} Computer`;

    if (playerScore >4 || computerScore > 4) {
        alert(`Game over! Final score is Player ${playerScore} - ${computerScore} Computer `)
        window.location.reload();
    }
    

}

// Event delegation for button clicks
const container = document.querySelector('.container');
container.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const userChoice = event.target.id;
        const computerChoice = getComputerChoice();
        const roundResult = getRoundWinner(userChoice, computerChoice);
        updateUI(userChoice, computerChoice, roundResult);

        if (playerScore >= n || computerScore >= n) {
            // Game over logic here
        }
    }
});

// Initial UI setup
const score = document.createElement('h1');
score.id = 'score';
score.textContent = `Current Score: Player ${playerScore} - ${computerScore} Computer`;

const roundOutcome = document.createElement('h2');
roundOutcome.id = 'outcome';
roundOutcome.textContent = 'Click on a button to start the game!';

const roundChoices = document.createElement('h2');
roundChoices.id = 'choices';

const div = document.createElement('div');
div.style.border = '6px solid black';
div.append(score, roundOutcome, roundChoices);
container.appendChild(div);

// Welcome message
console.log("Welcome to Rock Paper Scissors!");
