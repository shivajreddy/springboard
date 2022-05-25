import React from 'react'
import './Ball.css'

function Ball({ color, idx, x, y, changed_position }) {
  return (
    <div className='Ball' style={{
      backgroundColor: color,
      position: 'absolute',
      top: `${x}vh`,
      left: `${y}vh`
    }}
      onClick={(e) => changed_position(e, idx)}
    > {idx + 1}
    </div>
  )
}

export default Ball