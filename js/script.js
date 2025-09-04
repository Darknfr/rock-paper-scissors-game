const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

function playRound(playerSelection) {
	const computerSelection = computerPlay();
	let result = '';
	let resultColor = '';
	if (playerSelection === computerSelection) {
		result = `🤝 It's a tie! Both chose ${emojiFor(playerSelection)}.`;
		resultColor = '#888';
	} else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		playerScore++;
		result = `🎉 You win! ${emojiFor(playerSelection)} beats ${emojiFor(computerSelection)}.`;
		resultColor = '#28a745';
	} else {
		computerScore++;
		result = `😢 You lose! ${emojiFor(computerSelection)} beats ${emojiFor(playerSelection)}.`;
		resultColor = '#dc3545';
	}
	const resultDiv = document.getElementById('result');
	resultDiv.textContent = result;
	resultDiv.style.color = resultColor;
	document.getElementById('player-score').textContent = `Player: ${playerScore}`;
	document.getElementById('computer-score').textContent = `Computer: ${computerScore}`;
	animateChoice(playerSelection);
}

function emojiFor(choice) {
	if (choice === 'rock') return '🪨';
	if (choice === 'paper') return '📄';
	if (choice === 'scissors') return '✂️';
	return '';
}

function animateChoice(choice) {
	const btn = document.getElementById(choice);
	btn.classList.add('chosen');
	setTimeout(() => btn.classList.remove('chosen'), 300);
}

document.getElementById('rock').onclick = () => playRound('rock');
document.getElementById('paper').onclick = () => playRound('paper');
document.getElementById('scissors').onclick = () => playRound('scissors');
document.getElementById('reset').onclick = () => {
	playerScore = 0;
	computerScore = 0;
	document.getElementById('player-score').textContent = `Player: 0`;
	document.getElementById('computer-score').textContent = `Computer: 0`;
	const resultDiv = document.getElementById('result');
	resultDiv.textContent = '';
	resultDiv.style.color = '';
	animateReset();
};

function animateReset() {
	const resetBtn = document.getElementById('reset');
	resetBtn.classList.add('reset-anim');
	setTimeout(() => resetBtn.classList.remove('reset-anim'), 300);
}
