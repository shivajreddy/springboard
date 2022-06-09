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
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    // create array-of-arrays of true/false values
    for (let r = 0; r < nrows; r++) {
      const rowOfTrueFalses = []
      for (let c = 0; c < ncols; c++) {
        const flag = Math.random() < chanceLightStartsOn;
        rowOfTrueFalses.push(flag);
      }
      initialBoard.push(rowOfTrueFalses);
    }
    return initialBoard;
  }

  function hasWon() {
    // check the board in state to determine whether the player has won.

    // this solution is much efficient
    // return board.every(row => row.every(cell => !cell));


    // check all the boxes in "board"
    let totalItems = nrows * ncols;
    for (let rowcount = 0; rowcount < nrows; rowcount++) {
      for (let colcount = 0; colcount < ncols; colcount++) {
        if (board[rowcount][colcount] === false) {
          totalItems--;
        }
      }
      if (totalItems === 0) {
        return true
      }
    }
    return false;
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [r, c] = coord.split("-").map(Number);

      const flipCell = (r, c, boardCopy) => {
        // if this coord is actually on board, flip it

        if (c >= 0 && c < ncols && r >= 0 && r < nrows) {
          boardCopy[r][c] = !boardCopy[r][c];
        }
      };

      // Make a (deep) copy of the oldBoard
      const deepCopy = [...oldBoard];

      // in the copy, flip this cell and the cells around it
      flipCell(r, c, deepCopy);
      flipCell(r + 1, c, deepCopy);
      flipCell(r - 1, c, deepCopy);
      flipCell(r, c + 1, deepCopy);
      flipCell(r, c - 1, deepCopy);

      // return the copy
      return deepCopy;
    });
    return coord;
  }

  // TODO if the game is won, just show a winning msg & render nothing else
  if (hasWon()) {
    return <h2>You Won!</h2>
  }


  // TODO make table board

  const resultGameDiv = [];
  for (let r = 0; r < board.length; r++) {
    const rowElements = [];
    for (let c = 0; c < board[0].length; c++) {
      const item = board[r][c];
      const coord = `${r}-${c}`
      rowElements.push(
        <Cell
          flipCellsAroundMe={() => flipCellsAround(coord)}    //Fix me
          isLit={item}
          key={coord}
        />
      )
    }
    resultGameDiv.push(
      <tr key={r}>{rowElements}</tr>
    )
  }

  return (
    <table>
      <tbody>
        {resultGameDiv}
      </tbody>
    </table>
  )
}

export default Board;
