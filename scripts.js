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
    }

    if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            printWinOrLose(false, playerSelection, computerSelection); //lose
        } else if (computerSelection == "SCISSORS") {
            printWinOrLose(true, playerSelection, computerSelection); //win 
        }
    }

    if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            printWinOrLose(false, playerSelection, computerSelection); // lose
        } else if (computerSelection == "ROCK") {
            printWinOrLose(true, playerSelection, computerSelection); // win
        }
    }
}

function printWinOrLose(wongame, playerSelection, computerSelection) {
    if (wongame) {
        console.log("YOU WIN! You selected: " + playerSelection + " and computer selected: " + computerSelection);
    } else {
        console.log("YOU LOSE! You selected: " + playerSelection + " and computer selected: " + computerSelection);
    }
}

let playerSelection = prompt("Choose ROCK, PAPER, or SCISSORS").toUpperCase();
let computerSelection = computerPlay();
playRPS(playerSelection, computerSelection);