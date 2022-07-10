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

function playRound(playerSelection, computerSelection) {
    const resdiv = document.querySelector('#results');
    if (playerSelection == computerSelection) {
        resdiv.textContent = "THERE'S A DRAW! You both selected: " + playerSelection;
        return -1; 
    }

    if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            resdiv.textContent = WinOrLose(false, playerSelection, computerSelection); //lose
            return 0; 
        } else if (computerSelection == "SCISSORS") {
            resdiv.textContent = WinOrLose(true, playerSelection, computerSelection); //win 
            return 1; 
        }
    }

    if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            resdiv.textContent = WinOrLose(false, playerSelection, computerSelection); // lose
            return 0; 
        } else if (computerSelection == "ROCK") {
            resdiv.textContent = WinOrLose(true, playerSelection, computerSelection); // win
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
    let computerScore = 0; 
    let userScore = 0; 
    let user = document.querySelector('#userscore');
    let comp = document.querySelector('#computerscore');
    while (gameNum < gamesPlayed) {
        let result = game();
        if (result != -1) {
            gameNum++; 
            if (result == 1) {
                userScore++; 
                user.textContent = "Your Score: " + userScore; 
            } else {
                computerScore++;
                comp.textContent = "Computer's Score: " + computerScore; 
            }
        }
    }
}

play5Rounds(); 

