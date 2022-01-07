/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */


// let gameNumber = 1;
const startButton = document.querySelector('#start-btn');
startButton.addEventListener('click',()=>{
    // gameNumber += 1;
    if(!document.querySelector('tr')){
        // console.log('its notthere');

        const game1 = new Game(parseInt(document.getElementById('height').value),parseInt(document.getElementById('width').value))
        game1.makeBoard()
        game1.makeHtmlBoard()
    }
    else if(document.querySelector('tr')){
        // console.log('its there');

        document.querySelector('#game').removeChild(document.querySelector('#board'));
        const table = document.createElement('table')
        table.setAttribute('id', 'board')
        document.querySelector('#game').append(table)
        const game1 = new Game(parseInt(document.getElementById('height').value),parseInt(document.getElementById('width').value))
        game1.makeBoard();
        game1.makeHtmlBoard();
    }



})

// const createBoard = () => {
//     const game = document.getElementById('game');
//     const classboard = document.createElement('table');
//     classboard.classList.add('board')
//     classboard.setAttribute('id',`${gameNumber}`);
//     game.append(classboard);
//     return classboard;
// }


//* Game Class
//TODO 
class Game {

    //! properties
    constructor (height, width) {
        //Check if height, width are +ve finite numbers
        if (!Number.isFinite(height) || !Number.isFinite(width) || height<=0 || width<=0){throw new Error(`Make sure ${height} and ${width} are Finite non -ve numbers`)}
        this.HEIGHT = height;
        this.WIDTH = width;
        // this.gameNumber = gameNumber;

        // Variable Properties
        this.currPlayer = 1;
        this.board = [];
        this.p1Color = document.querySelector('#p1-color').value;
        this.p2Color = document.querySelector('#p2-color').value;

        //! making the 'this' inside an event equal to object
        this.handleClick = this.handleClick.bind(this);
    }

    //! Methods
    /**makeBoard: Array DataStructure respresenting a Board*/
    makeBoard() {
        for (let y = 0; y < this.HEIGHT; y++) {
          this.board.push(Array.from({ length: this.WIDTH }));
        }
    };

    makeHtmlBoard() {
        const board = document.getElementById('board');
        // const board = createBoard();
        
        // make column tops (clickable area for adding a piece to that column)
        const top = document.createElement('tr');
        top.setAttribute('id', 'column-top');
        top.addEventListener('click', this.handleClick);
        
        for (let x = 0; x < this.WIDTH; x++) {
            const headCell = document.createElement('td');
            headCell.setAttribute('id', x);
            top.append(headCell);
        }
        
        board.append(top);
        
        // make main part of board
        for (let y = 0; y < this.HEIGHT; y++) {
            const row = document.createElement('tr');
        
            for (let x = 0; x < this.WIDTH; x++) {
            const cell = document.createElement('td');
            cell.setAttribute('id', `${y}-${x}`);
            row.append(cell);
            }
        
            board.append(row);
        }
    };
    
    /** findSpotForCol: given column x, return top empty y (null if filled) */
    findSpotForCol(x) {
        for (let y = this.HEIGHT - 1; y >= 0; y--) {
        if (!this.board[y][x]) {return y;}}
        return null;
    }

    placeInTable(y, x) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.classList.add(`p${this.currPlayer}`);
        //TODO fix this, to get new colors
        if (this.currPlayer===1){piece.style.background = this.p1Color;}
        if (this.currPlayer===2){piece.style.background = this.p2Color;}
        piece.style.top = -50 * (y + 2);
      
        const spot = document.getElementById(`${y}-${x}`);
        spot.append(piece);
    }

    /** endGame: announce game end */  
    endGame(msg) {
        alert(msg);
    }

    testThis(e){
        console.log(e, this, this.board);
        this.board[0][0] = 1;
    }

    /**handleClick: handle click of column top to play piece */
    handleClick(evt) {
        // get x from ID of clicked cell
        const x = +evt.target.id;
        console.log(this);
        // console.log(x, this, this.board);
        // get next spot in column (if none, ignore click)
        //! this refers to table(since its the parent of the event), but line 43 solves it.
        const y = this.findSpotForCol(x);
        if (y === null) {
          return;
        }
      
        // place piece in board and add to HTML table
        this.board[y][x] = this.currPlayer;
        this.placeInTable(y, x);
        
        // check for win
        if (this.checkForWin()) {
          return this.endGame(`Player ${this.currPlayer} won 🏆!`);
        }
        
        // check for tie
        if (this.board.every(row => row.every(cell => cell))) {
          return this.endGame('Tie!');
        }
          
        // switch players
        this.currPlayer = this.currPlayer === 1 ? 2 : 1;
    };

    /** checkForWin: check board cell-by-cell for "does a win start here?" */
    checkForWin() {
        const HEIGHT = this.HEIGHT
        const WIDTH = this.WIDTH
        const board = this.board
        let currPlayer = this.currPlayer
        // console.log(this);
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
    
        for (let y = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++) {
            // get "check list" of 4 cells (starting here) for each of the different
            // ways to win
            const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
            const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
            const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
            const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
    
            // find winner (only checking each win-possibility as needed)
            if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
            return true;
            }
        }
        }
    };

    // makeBoard()
    // makeHtmlBoard();
}

const game1 = new Game(6,7)
game1.makeBoard()
game1.makeHtmlBoard()

