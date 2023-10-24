const moves = new Array("Rock", "Paper", "Scissor");

function capitalize(inp) {
    res = ""
    for (let i = 0; i<inp.length; i++) {
        if (i == 0) {
            res += inp[i].toUpperCase();
        } else {
            res += inp[i].toLowerCase();
        }
    }

    return res;
}

function isValidMove(move) {
    return moves.includes(move);
}

function getComputerChoice() {
    // All this...for a drop of blood
    const randomComputerMove = moves[Math.floor(Math.random() * moves.length)];

    return randomComputerMove;
}

function playRound(playerSelection, computerSelection) {
    let roundResult, roundEndMessage;
    
    if ((playerSelection == "Rock" && computerSelection == "Scissor") ||
     (playerSelection == "Paper" && computerSelection == "Rock") ||
     (playerSelection == "Scissor" && computerSelection == "Paper")) {
        roundResult = "Win";
        roundEndMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == computerSelection) {
        roundResult = "Draw";
        roundEndMessage = `Draw! Both played the same move`;
    } else {
        roundResult = "Lose";
        roundEndMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    return {roundResult: roundResult, roundEndMessage: roundEndMessage};
}

function game(numRounds=5) {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Game has started! Please enter a move in the prompt.");
    console.log("-".repeat(50));

    for (let i = 1; i <= numRounds; i++) {
        playerSelection = capitalize(prompt("What move do you want to play? Write down Rock, Paper or Scissor."));
        computerSelection = getComputerChoice();
        
        console.log(`Player showed ${playerSelection}.`);
        console.log(`Computer showed ${computerSelection}.`);

        roundResults = playRound(playerSelection, computerSelection);
        switch (roundResults["roundResult"]) {
            case "Win":
                playerScore++;
                break;
            case "Lose":
                computerScore++;
                break;
            default:
                break;
        }

        console.log(roundResults["roundEndMessage"]);
        console.log(`Current Scores:\nPlayer Score - ${playerScore}\nComputer Score - ${computerScore}`);
        console.log("-".repeat(50));
    }

    console.log("-".repeat(50));
    console.log("Game Finished!")
    console.log(`Final Scores:\nPlayer Score - ${playerScore}\nComputer Score - ${computerScore}`)
}
