const moves = new Array("Rock", "Paper", "Scissor");

function isValidMove(move) {
    return moves.includes(move);
}

function getComputerChoice() {
    // All this...for a drop of blood
    const randomComputerMove = moves[Math.floor(Math.random() * moves.length)];

    return randomComputerMove;
}

function playRound(playerSelection, computerSelection) {
    const winText = `You Win! ${playerSelection} beats ${computerSelection}`;
    const drawText = `Draw! Both played the same move`;
    const loseText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    
    if ((playerSelection == "Rock" && computerSelection == "Scissor") ||
     (playerSelection == "Paper" && computerSelection == "Rock") ||
     (playerSelection == "Scissor" && computerSelection == "Paper")) {
        return winText;
    } else if (playerSelection == computerSelection) {
        return drawText;
    }

    return loseText;
}
