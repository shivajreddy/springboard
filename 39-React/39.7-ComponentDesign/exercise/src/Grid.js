import React from 'react'
import './Grid.js'
import './Grid.css'
import Light from './Light.js'

function creteMatrix(r, c) {

  const matrix = Array(r).fill(<h1>1</h1>).map(() => Array(c).fill(<h1>1</h1>))

  return matrix
}

// const matrix = Array(r).fill(1).map(() => Array(c).fill(1))

const func21 = () => {
  // const matrix = Array(9).fill().map(() => Array(3).fill())
  // const gameDiv = <div></div>;
  // for (row in matrix) {
  //   for (col in row) {
  //     <h1>1</h1>
  //   }
  // }
  Array(3).fill().map(() => Array(3).fill().map(() => 1))
}

function Grid({ width, height }) {

  return (
    <div className='Grid'>
      <h2>Grid: {width} x {height} </h2>

      <div>
      {
        Array(3).fill(1).map(() => new Array(3).fill(1))
      }
      </div>

      {/* <Light r={} c={}/> */}


    </div>
  )
}

export default Grid