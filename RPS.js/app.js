let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const drawGame = () => {
    msg.innerText = "Draw / Try again";
    msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
};

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const playGame = (userChoice) => {
    const compChoice = genComputerChoice();
    let userWin;

    if (userChoice === compChoice) {
        drawGame();
    } else {
        if (userChoice === "rock") {
            userWin = compChoice !== "paper";
        } else if (userChoice === "paper") {
            userWin = compChoice !== "scissors";
        } else {
            userWin = compChoice !== "rock";
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        playGame(userChoice);
    });
});
