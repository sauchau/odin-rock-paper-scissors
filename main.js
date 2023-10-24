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
