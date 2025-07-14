let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  let choice = Math.random() * 1000;
  return choice < 333 ? "ROCK" : choice < 666 ? "PAPER" : "SCISSORS";
}

/* function getHumanChoice() {
  let choice = prompt(
    'Please enter your choice "Rock" or "Paper" or "Scissors"'
  );
  choice = choice.toUpperCase();
  return choice;
} */

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
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
  if (computerScore == 5) {
    alert(
      `Game over, you lost the game. The score is: You -> ${humanScore} , Computer -> ${computerScore}`
    );
    humanScore = computerScore = 0;
    return;
  }

  if (humanScore == 5) {
    alert(
      `Congratulations!, you won the game. The score is: You -> ${humanScore} , Computer -> ${computerScore}`
    );
    humanScore = computerScore = 0;
    return;
  }
}
