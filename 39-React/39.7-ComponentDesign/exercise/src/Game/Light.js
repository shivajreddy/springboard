import React from 'react'
import './Light.css'



function Light({ power, toggleLight }) {
  return (
    <a className={power ? 'Light On' : 'Light Off'} onClick={toggleLight}>
      {power ? '🌕' : '🌑'}
    </a>
  )
}

export default Light