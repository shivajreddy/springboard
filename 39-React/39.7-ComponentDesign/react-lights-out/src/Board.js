import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {

  // Declare state of the board
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    for (let r = 0; r < nrows; r++) {
      const row = [];
      for (let c = 0; c < ncols; c++) {
        row.push(Math.random() < chanceLightStartsOn)
      }
      initialBoard.push(row);
    }
    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
  }

  // The call back fn, that is going to be passed down
  // fn changes the state of the board
  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      const copy = [...oldBoard]

      // TODO: in the copy, flip this cell and the cells around it
      // copy.map(row => {
      //   map.
      // })

      // TODO: return the copy
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board

  // TODO
  // board is the trueFalseMatrix
  const trueFalseMatrix = board;
  const resultDivGrid = [];

  // Iterater over trueFlaseMatrix and make a divMatrix
  for (let r = 0; r < trueFalseMatrix.length; r++) {
    // array to collect all table rows
    const row = [];

    for (let c = 0; c < trueFalseMatrix[0].length; c++) {
      const coord = `${r}-${c}`;
      // console.log('now actual', r, c, trueFalseMatrix[r][c]);
      row.push(
        <Cell
          key={coord}
          isLit={trueFalseMatrix[r][c]}
          flipCellsAroundMe={() => 21}
        />
      )
    }
    // make a table row and push it to row array
    resultDivGrid.push(<tr key={r} >{row}</tr>);
  };

  return (
    <table className="Board">
      <tbody>{resultDivGrid}</tbody>
    </table>
  )
}

export default Board;

Board.defaultProps = {
  nrows: 5,
  ncols: 5,
  chanceLightStartsOn: 0.5
}
