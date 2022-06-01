import React from 'react'
import Grid from './Grid'
import './Game.css'


function Game({ width, height }) {
  return (
    <div className='Game'>
      <h1> Lights Out 💡</h1>

      <Grid width={width} height={height}/>

    </div>
  )
}

Game.defaultProps = {
  width: 5,
  height: 5
}

export default Game