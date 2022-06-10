import React from 'react'
import './Box.css'


function Box({ id, color, width, height }) {
  console.log(color, width, height);

  const style = {
    "backgroundColor": color,
    "width": `${width}px`,
    "height": `${height}px`
  }
  return (
    <>
      <div className="Box" style={style} id={id}>
        <button>X</button>
      </div>
    </>

  )
}

export default Box