import React from 'react'
import './Grid.js'
import './Grid.css'
import Light from './Light.js'


function creteMatrix(r, c){
  const matrix = Array(r).fill(1).map(()=>Array(c).fill(1))
}


function Grid({width, height}) {



  return (
    <div className='Grid'>
      <h2>Grid: {width} x {height} </h2>

      {/* <Light r={} c={}/> */}


    </div>
  )
}

export default Grid