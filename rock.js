let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was draw.");
  msg.innerText = "Game was draw. Play again.";
  msg.style.backgroundColor = "#386641";
};

const showwinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userscore++;
    userscorePara.innerText = userscore;
    console.log("you win!");
    msg.innerText = `You win. Your ${userChoice} beats Comp ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorePara.innerText = compscore;
    console.log("you lose");
    msg.innerText = `You lose. Comp ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const resetGame = () => {
  userscore = 0;
  compscore = 0;
  userscorePara.innerText = userscore;
  compscorePara.innerText = compscore;
  msg.innerText = "Game reset. Let's play!";
  msg.style.backgroundColor = "#6a994e"; // Optional: default color
};

if (resetBtn) {
  resetBtn.addEventListener("click", resetGame);
} else {
  console.error("Reset button with ID #reset not found.");
}

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("Comp choice =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userwin = compChoice === "scissors" ? false : true;
    } else {
      userwin = compChoice === "rock" ? false : true;
    }
    showwinner(userwin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
