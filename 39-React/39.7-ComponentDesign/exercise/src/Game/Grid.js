import React, { useState } from 'react'
import './Grid.js'
import './Grid.css'
import Light from './Light.js'



function Grid({ width, height }) {

  // State
  const [board, setBoard] = useState(() => createBoard(width, height));

  function createBoard(rows, columns) {
    const board = [];
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < columns; c++) {
        row.push(
          <Light rowId={r} colId={c} key={c} power={false} toggleLight={() => newBoard(r, c)} />
        )
      }
      // console.log("going to push row", row)
      board.push(<div style={{ display: 'flex' }} key={r}> {row} </div>)
    }
    // console.log("final matrix", matrix)
    return board;
  }

  function newBoard(r, c) {
    setBoard(previousBoard => {
      const save = previousBoard;
      // console.log(previousBoard)
      previousBoard.map(row => {
        return row.props.children[1].map(item => {
          // console.log("actual item is", item)
          let result;
          if (item.props.rowId === r && item.props.colId === c) {
            console.log(item)
            item.props.power = true;
            // if (item.props.power{
            //   item.props.power = false;
            // })
            //   (item.props.power ? item.props.power = false : item.props.power = true)
            result = item
          }
          return result;
        }
        )
        // console.log("item is ", item.props.children[1])
        // item.map(subItem => console.log(subItem))
      })
      console.log(r, c)

      return previousBoard;
      // return 21;
    })
  }


  return (
    <div className='Grid'>

      <div>
        {board}
        {/* {createBoard(width, height)} */}
      </div>

    </div>
  )
}



export default Grid