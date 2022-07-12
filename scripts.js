function computerPlay() {
    let choice = Math.ceil(Math.random(3) * 3);
    switch (choice) {
        case 1:
            return "ROCK"
        case 2:
            return "PAPER"
        case 3:
            return "SCISSORS"
        default:
            return ""
    }
}

let computerScore = 0; 
let userScore = 0; 

function displayScores() {
    let user = document.querySelector('#userscore');
    let comp = document.querySelector('#computerscore');
    user.textContent = "Your Score: " + userScore; 
    comp.textContent = "Computer's Score: " + computerScore; 
}

function playRound(playerSelection, computerSelection) {
    const resdiv = document.querySelector('#results');
    if (playerSelection == computerSelection) {
        resdiv.textContent = "THERE'S A DRAW! You both selected: " + playerSelection;
        displayScores();
        determineWinner();
        return -1; 
    }

    if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            resdiv.textContent = WinOrLose(false, playerSelection, computerSelection); //lose
            computerScore++;
            displayScores();
            determineWinner();
            return 0; 
        } else if (computerSelection == "SCISSORS") {
            resdiv.textContent = WinOrLose(true, playerSelection, computerSelection); //win 
            userScore++;
            displayScores();
            determineWinner();
            return 1; 
        }
    }

    if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            resdiv.textContent = WinOrLose(false, playerSelection, computerSelection); // lose
            computerScore++;
            displayScores();
            determineWinner();
            return 0; 
        } else if (computerSelection == "ROCK") {
            resdiv.textContent = WinOrLose(true, playerSelection, computerSelection); // win
            userScore++;
            displayScores();
            determineWinner();
            return 1; 
        }
    }
    return 0; 
}

function WinOrLose(wongame, playerSelection, computerSelection) {
    if (wongame) {
        return "YOU WIN THIS ROUND! You selected: " + playerSelection + " and computer selected: " + computerSelection;
    } else {
        return "YOU LOST THIS ROUND! You selected: " + playerSelection + " and computer selected: " + computerSelection;
    }
}

function game() {
    const rockB = document.querySelector('#rock');
    const paperB = document.querySelector('#paper');
    const scissorsB = document.querySelector('#scissors');
    rockB.addEventListener('click', () => {
        return playRound("ROCK", computerPlay());
    });
    paperB.addEventListener('click', () => {
        return playRound("PAPER", computerPlay());
    });
    scissorsB.addEventListener('click', () => {
        return playRound("SCISSORS", computerPlay());
    });
}

function play5Rounds() {
    let gamesPlayed = 5; 
    let gameNum = 0;
    computerScore = 0; 
    userScore = 0; 
    while (gameNum < gamesPlayed) {
        game();
        gameNum++;
    }
}

function determineWinner() {
    const winner = document.querySelector('#winner');
    if (computerScore == 3) {
        winner.textContent = "GAME OVER: Computer Wins!!!"
    }
    if (userScore == 3) {
        winner.textContent = "GAME OVER: You Win!!!"
    }
}


play5Rounds(); 


