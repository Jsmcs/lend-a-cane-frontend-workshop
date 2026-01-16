/**
 * PHASE 1: Rock Paper Scissors
 */

// 1. Initialize Scores
let playerScore = 0;
let computerScore = 0;

// 2. Select DOM Elements
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const messageEl = document.getElementById('message');
const resetBtn = document.getElementById('reset-btn');
const choicesBtn = document.querySelectorAll('.choice-btn'); // Note the name here

// 3. Define Game Choices
const gamechoices = ['rock', 'paper', 'scissors'];
const choiceEmojis = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};

// 4. Get Computer's random choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * gamechoices.length);
    return gamechoices[randomIndex];
}

// 5. Play a single round
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        updateUI('draw', playerChoice, computerChoice);
        console.log("It's a tie! galingan niyu kasii hayz!");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        updateUI('win', playerChoice, computerChoice);
        console.log("Huwaw! You win this round!");
    } else {
        computerScore++;
        updateUI('lose', playerChoice, computerChoice);
        console.log("Oh no! Computer wins hays better luck next time haha");
    }
}

// 6. Update the HTML
function updateUI(result, player, computer) {
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    messageEl.className = result;

    if (result === 'draw') {
        messageEl.textContent = `It's a tie! You both chose ${choiceEmojis[player]}`;
    } else if (result === 'win') {
        messageEl.textContent = `You win! ${choiceEmojis[player]} beats ${choiceEmojis[computer]}`;
    } else {
        messageEl.textContent = `You lose! ${choiceEmojis[computer]} beats ${choiceEmojis[player]}`;
    }
}

// 7. Reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    messageEl.textContent = 'Choose one!';
    messageEl.className = '';
}

// 8. Event Listeners
choicesBtn.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});
resetBtn.addEventListener('click', resetGame);