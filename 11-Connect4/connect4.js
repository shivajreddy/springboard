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

if (localStorage.getItem('1') === null){
    localStorage.setItem('1',0)}
if (localStorage.getItem('1')!== null){
    (document.getElementById('p1-score')).innerText = `Player1: ${localStorage.getItem(1)}`
}
if (localStorage.getItem('2') === null){localStorage.setItem('2',0)}
if (localStorage.getItem('2')!== null){
    (document.getElementById('p2-score')).innerText = `Player2: ${localStorage.getItem(2)}`
}

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

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
    //* return the index of cell, that is empty when counted from top, for a given column:x
    for (let y=HEIGHT-1; y>=0; y--){
        if(!board[y][x]){
            return y}
    }

};

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {

    // Game Piece DIV element, with classes
    const piece = document.createElement('div')
    piece.classList.add('piece')
    piece.classList.add(`p${currPlayer}`)

    // The td that is empty in the selected column
    const empty_td = document.querySelector(`#\\3${y}-${x}`)

    // Add the game piece of that player into this td
    empty_td.append(piece)
}

/** endGame: announce game end */

function endGame(msg) {
    //Time out for animation of winning piece to finish.
    setTimeout(()=>{
        alert(msg);
    },220);

    // Add reset only if there is no reset button, after Game over.
    const reset = document.createElement('button');
    reset.classList.add('reset');
    reset.innerText = 'Reset Game';
    reset.onclick = () =>window.location.reload(true)
    if (document.querySelector('.reset') == null)
    {
        document.querySelector('#game').append(reset)
    }

    // Clear scores button to clear local storage
    const clearScores = document.createElement('button');
    clearScores.classList.add('clearScores');
    clearScores.innerText = 'Clear Scores';
    const resetScores = () => {
        (document.getElementById('p1-score')).innerText = `Player1: 0`;
        (document.getElementById('p2-score')).innerText = `Player2: 0`;
        localStorage.clear()};
    clearScores.addEventListener('click', resetScores)
    if (document.querySelector('.clearScores') == null)
    {
        document.querySelector('#game').append(clearScores)
    }

}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
    // get x from ID of clicked cell
    var x = +evt.target.id;

    // get next spot in column (if none, ignore click)
    var y = findSpotForCol(x);
    if (y === null) {
        return;
    }

    //* place piece in board and add to HTML table
    // TODO: add line to update in-memory board
    board[y][x] = currPlayer;
    placeInTable(y, x);

    // check for win
    if (checkForWin()) {
        // Update Local storage with the score
        localStorage.setItem(`${currPlayer}`, parseInt(localStorage.getItem(`${currPlayer}`))+1 )

        if(currPlayer == 1){
            (document.getElementById('p1-score')).innerText = `Player1: ${localStorage.getItem(1)}`
        }
        if(currPlayer == 2){
            (document.getElementById('p2-score')).innerText = `Player2: ${localStorage.getItem(2)}`
        }

        return endGame(`Player ${currPlayer} won 🎉!`);
    }

    //* check for tie
    // const empty_idx = []
    // for(let column=board.length - 1; column>0;column--){
    //     const idx = (board[column]).findIndex((i)=>i != null)
    //     empty_idx.push(idx)
    // }
    // if (empty_idx.findIndex((i)=>i== -1) == -1){
    //     return setTimeout(() => {
    //         alert(`It's a tie`)
    //     }, 220);
    // }
    // console.log(empty_idx)

    //* switch players
    if (currPlayer == 1){currPlayer = 2}
    else {currPlayer = 1}

    //* Updating Score board
    document.querySelector('#status').innerText = `Player ${currPlayer} make your move`

}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer
    // console.log(cells)

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

        // console.log([horiz, vert, diagDR, diagDL])

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
