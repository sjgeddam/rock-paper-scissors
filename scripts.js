function computerPlay() {
    let choice = Math.ceil(Math.random(3) * 3);

    switch (choice) {
        case 1:
            return "ROCK"
        case 2:
            return "PAPER"
        case 3:
            return "SCISSORS"
    }
}

function playRPS(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("THERE'S A DRAW! You both selected: " + playerSelection);
        return 0; 
    }

    if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            console.log(printWinOrLose(false, playerSelection, computerSelection)); //lose
            return 0; 
        } else if (computerSelection == "SCISSORS") {
            console.log(printWinOrLose(true, playerSelection, computerSelection)); //win 
            return 1; 
        }
    }

    if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            console.log(printWinOrLose(false, playerSelection, computerSelection)); // lose
            return 0; 
        } else if (computerSelection == "ROCK") {
            console.log(printWinOrLose(true, playerSelection, computerSelection)); // win
            return 1; 
        }
    }
}

function printWinOrLose(wongame, playerSelection, computerSelection) {
    if (wongame) {
        return "YOU WIN! You selected: " + playerSelection + " and computer selected: " + computerSelection;
    } else {
        return "YOU LOSE! You selected: " + playerSelection + " and computer selected: " + computerSelection;
    }
}

function game() {
    let gamesWon = 0; 
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose ROCK, PAPER, or SCISSORS").toUpperCase();
        let computerSelection = computerPlay();
        gamesWon += playRPS(playerSelection, computerSelection);   
    }
    if (gamesWon >= 3) {
        console.log("You won " + gamesWon + " out of the 5 games! You win overall!!!");
    } else {
        console.log("You won " + gamesWon + " out of the 5 games! You lost overall!!!");
    }
}

game();


