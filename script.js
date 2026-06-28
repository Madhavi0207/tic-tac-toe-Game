const gameBoard = document.querySelector(".game-board");

// Start with Player 1 (X)
let currentPlayer = "X";
const turnInfo = document.querySelector("#turnInfo");

// Add click event listener to parent (game board)
gameBoard.addEventListener("click", (event) => {
  const cell = event.target;

  // Ensure the cell is empty before marking it
  if (cell.textContent === "") {
    // Mark the cell with the current player's symbol
    cell.textContent = currentPlayer;

    // Change turn info
    turnInfo.textContent =
      currentPlayer === "X" ? "Player 2's Turn" : "Player 1's Turn";

    // Switch players
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
});
