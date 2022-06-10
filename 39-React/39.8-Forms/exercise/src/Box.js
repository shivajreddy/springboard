import React from 'react'
import './Box.css'


function Box({ id, color, width, height, deleteBox }) {
  console.log(color, width, height);

  const style = {
    "backgroundColor": color,
    "width": `${width}px`,
    "height": `${height}px`
  }
  return (
    <>
      <div className="Box" style={style} id={id}>
        <button onClick={() => deleteBox(id)}>X</button>
      </div>
    </>
  )
}

export default Box