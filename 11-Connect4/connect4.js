/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

var WIDTH = 7;
var HEIGHT = 6;

var currPlayer = 1; // active player: 1 or 2
var board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  //*"board" to empty HEIGHT x WIDTH matrix array
    for(h=0; h<HEIGHT ; h++){
        board.push([])

        for(w=0; w<WIDTH ; w++){
            board[h].push(null)
        }
    }
};
/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
    //*"htmlBoard" variable from the item in HTML w/ID of "board"
    const htmlBoard = document.getElementById('board');

    //* TR as top Row, Event listener to drop coins when clicked.
    var top = document.createElement("tr");
    top.setAttribute("id", "column-top");
    top.addEventListener("click", handleClick);

    //* Create & Add 'td' to the top Row. Each 'td' has id for 0 to width
    for (var x = 0; x < WIDTH; x++) {
        var headCell = document.createElement("td");
        headCell.setAttribute("id", x);
        top.append(headCell);
    }
    htmlBoard.append(top);

    //* Create n(height) rows, and in each row add n(width) 'td'. Append each row below the htmlBoard.
    for (var y = 0; y < HEIGHT; y++) {
        const row = document.createElement("tr");
        for (var x = 0; x < WIDTH; x++) {
        const cell = document.createElement("td");
        cell.setAttribute("id", `${y}-${x}`);
        row.append(cell);
        }
        htmlBoard.append(row);
    }
}

makeBoard();
/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
    //* return the index of cell, that is empty when counted from top, for a given column:x
    let col = []
    for (let i=0; i<HEIGHT;i++){
        col.push(board[i][x])
    }
    const idx = col.findIndex((item)=>item===null);
    return idx;

    // Use this if -1 is not an option
    if (idx != -1){
        return idx
    }
    else {return undefined}
};

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
    // TODO: make a div and insert into correct table cell



}

/** endGame: announce game end */

function endGame(msg) {
  // TODO: pop up alert message
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
    // get x from ID of clicked cell
    var x = +evt.target.id;
    console.log(x)

    // get next spot in column (if none, ignore click)
    var y = findSpotForCol(x);
    if (y === null) {
        return;
    }

    // place piece in board and add to HTML table
    // TODO: add line to update in-memory board
    placeInTable(y, x);

    // check for win
    if (checkForWin()) {
        return endGame(`Player ${currPlayer} won!`);
    }

    // check for tie
    // TODO: check if all cells in board are filled; if so call, call endGame

    // switch players
    // TODO: switch currPlayer 1 <-> 2
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (var y = 0; y < HEIGHT; y++) {
    for (var x = 0; x < WIDTH; x++) {
      var horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      var vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      var diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      var diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

// makeBoard();
makeHtmlBoard();
