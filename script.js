const rockBtn = document.getElementById(`rockBtn`);
const paperBtn = document.getElementById(`paperBtn`);
const scissorsBtn = document.getElementById(`scissorsBtn`);
const scoreBox = document.querySelector(`#scoreBox`);
const totalBox = document.querySelector(`#totalBox`);
const roundBox = document.getElementById(`roundBox`);

let playerChoice = "";
let symbol = "";
let playerScore = 0;
let computerScore = 0;

// generate a random number up to num
function getRandomNum(num) {
	return Math.floor(Math.random() * num);
}
// assign computer a number from 0-2
function computerChoice() {
	choice = getRandomNum(3);
	if (choice === 0) {
		symbol = "rock";
	} else if (choice === 1) {
		symbol = "paper";
	} else if (choice === 2) {
		symbol = "scissors";
	} else {
		symbol = "error";
	}
	return symbol;
}

function playRound(playerSelection, computerSelection) {
	computerSelection = computerChoice();
	playerSelection = playerChoice;

	if (
		(computerSelection === "rock" && playerSelection === "rock") ||
		(computerSelection === "paper" && playerSelection === "paper") ||
		(computerSelection === "scissors" && playerSelection === "scissors")
	) {
		scoreBox.innerHTML = `You chose ${playerSelection}. Computer chose ${computerSelection}. You tied.`;
	} else if (
		(computerSelection === "rock" && playerSelection === "paper") ||
		(computerSelection === "paper" && playerSelection === "scissors") ||
		(computerSelection === "scissors" && playerSelection === "rock")
	) {
		scoreBox.innerHTML = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win.`;
		return playerScore++;
	} else if (
		(computerSelection === "rock" && playerSelection === "scissors") ||
		(computerSelection === "paper" && playerSelection === "rock") ||
		(computerSelection === "scissors" && playerSelection === "paper")
	) {
		scoreBox.innerHTML = `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose.`;
		return computerScore++;
	} else {
		console.log(`something went wrong`);
	}
}

function displayWinner() {
	if (playerScore >= 5) {
		totalBox.textContent = `You win!`;
		playerScore = 0;
		computerScore = 0;
	} else if (computerScore >= 5) {
		totalBox.textContent = `The computer wins!`;
		playerScore = 0;
		computerScore = 0;
	}
}

rockBtn.addEventListener("click", () => {
	playerChoice = "rock";
	playRound();
	totalBox.innerHTML = `Player = ${playerScore} Computer = ${computerScore}`;
	displayWinner();
});

paperBtn.addEventListener("click", () => {
	playerChoice = "paper";
	playRound();
	totalBox.innerHTML = `Player = ${playerScore} Computer = ${computerScore}`;
	displayWinner();
});

scissorsBtn.addEventListener("click", () => {
	playerChoice = "scissors";
	playRound();
	totalBox.innerHTML = `Player = ${playerScore} Computer = ${computerScore}`;
	displayWinner();
});

totalBox.innerHTML = `Player = ${playerScore} Computer = ${computerScore}`;
