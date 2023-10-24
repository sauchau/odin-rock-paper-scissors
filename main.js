function getComputerChoice() {
    moves = new Array("Rock", "Paper", "Scissor");
    // All this...for a drop of blood
    randomComputerMove = moves[Math.floor(Math.random() * moves.length)];

    return randomComputerMove;
}
