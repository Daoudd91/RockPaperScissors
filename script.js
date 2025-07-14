let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  let choice = Math.random() * 1000;
  return choice < 333 ? "ROCK" : choice < 666 ? "PAPER" : "SCISSORS";
}

function getHumanChoice() {
  let choice = prompt(
    'Please enter your choice "Rock" or "Paper" or "Scissors"'
  );
  choice = choice.toUpperCase();
  return choice;
}

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  if (humanChoice === computerChoice) {
    console.log(`Draw! ${humanChoice} and ${computerChoice}`);
  } else {
    if (humanChoice === "ROCK") {
      if (computerChoice === "SCISSORS") {
        console.log(`Win! ${humanChoice} Beats ${computerChoice}`);
        humanScore++;
      } else {
        console.log(`Loser! ${computerChoice} Beats ${humanChoice}`);
        computerScore++;
      }
    } else if (humanChoice === "PAPER") {
      if (computerChoice === "ROCK") {
        console.log(`Win! ${humanChoice} Beats ${computerChoice}`);
        humanScore++;
      } else {
        console.log(`Loser! ${computerChoice} Beats ${humanChoice}`);
        computerScore++;
      }
    } else {
      if (computerChoice === "PAPER") {
        console.log(`Win! ${humanChoice} Beats ${computerChoice}`);
        humanScore++;
      } else {
        console.log(`Loser! ${computerChoice} Beats ${humanChoice}`);
        computerScore++;
      }
    }
  }
  console.log(
    `Result is -----> You : ${humanScore} - Computer : ${computerScore}`
  );
}

function playGame() {
  for (let i = 0; i < 10; i++) {
    playRound();
  }
}
