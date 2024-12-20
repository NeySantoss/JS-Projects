const buttonsEl = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let  computerScore = 0;

buttonsEl.forEach(button =>{
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;        
    });
});


function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){

        return "it's a tie!! ";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") 
    ) {
        playerScore++;
        userScoreEl.textContent = playerScore;
        return "You Win!! " + playerSelection + " beats " + computerSelection
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
}