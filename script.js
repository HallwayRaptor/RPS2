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
	playerSelection = prompt(`Chose Rock, Paper, or Scissors`).toLowerCase();

	if (
		(computerSelection === "rock" && playerSelection === "rock") ||
		(computerSelection === "paper" && playerSelection === "paper") ||
		(computerSelection === "scissors" && playerSelection === "scissors")
	) {
		console.log(
			`You chose ${playerSelection}. computer chose ${computerSelection}. You tied.`
		);
	} else if (
		(computerSelection === "rock" && playerSelection === "paper") ||
		(computerSelection === "paper" && playerSelection === "scissors") ||
		(computerSelection === "scissors" && playerSelection === "rock")
	) {
		console.log(
			`You chose ${playerSelection}. Computer chose ${computerSelection}. You win.`
		);
		return playerScore++;
	} else if (
		(computerSelection === "rock" && playerSelection === "scissors") ||
		(computerSelection === "paper" && playerSelection === "rock") ||
		(computerSelection === "scissors" && playerSelection === "paper")
	) {
		console.log(
			`You chose ${playerSelection}. Computer chose ${computerSelection}. You lose.`
		);
		return computerScore++;
	} else {
		console.log(`something went wrong`);
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		playRound();
		console.log(
			`Your score is ${playerScore}, opponent's score is ${computerScore}`
		);
	}

	console.log(`The score is You: ${playerScore} Computer: ${computerScore}`);
	if (playerScore > computerScore) {
		console.log(`You win`);
	} else if (computerScore > playerScore) {
		console.log(`You lose`);
	} else {
		console.log(`You tied`);
	}
}

game();
