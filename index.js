const choices = {
  rock: {
    beats: "scissors",
    beatenBy: "paper",
  },
  paper: {
    beats: "rock",
    beatenBy: "scissors",
  },
  scissors: {
    beats: "paper",
    beatenBy: "rock",
  },
};
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const choicesArray = Object.keys(choices);
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getHumanChoice() {
  const choice = prompt("Enter choice: ").toLowerCase();
  if (!Object.keys(choices).includes(choice)) {
    console.log("Invalid choice");
    return getHumanChoice();
  }
  return choice;
}

function playRound(computerChoice, humanChoice) {
  console.log("computer:", computerChoice);
  console.log("human:", humanChoice);
  if (choices[computerChoice].beats === humanChoice) {
    console.log("human loses");
    computerScore++;
  } else if (choices[computerChoice].beatenBy === humanChoice) {
    console.log("human wins");
    humanScore++;
  } else if (computerChoice === humanChoice) {
    console.log("tie");
  } else {
    console.log("Something went wrong.");
  }
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
playRound(computerChoice, humanChoice);

// for (let i = 0; i < choices.length; i++) {
//   for (let j = 0; j < choices.length; j++) {
//     const computerChoice = choices[i];
//     const humanChoice = choices[j];
//     console.log(computerChoice);
//     console.log(humanChoice);
//     playRound(computerChoice, humanChoice);
//   }
// }
