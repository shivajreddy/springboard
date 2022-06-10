import React from 'react'
import './Box.css'


function Box({ id, color, width, height }) {

  const style = {
    "backgroundColor": color,
    "width": width,
    "height": height
  }
  return (
    <>
      <div style={style} id={id}>
        <button>X</button>
      </div>
      <button>X</button>
    </>

  )
}

export default Box