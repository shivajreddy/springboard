import React from 'react'
import Circle from './Circle'

function ColorButtons(props) {

  return (
    <>
      {props.options.map(color => {
        return(
          <button
          style={{backgroundColor: color}}
          key = {color}
          onClick = {()=>props.addCircle(color)}
          >
          {color}
          </button>
        )
      })}
    </>

  )
}


ColorButtons.defaultProps = {
  options : ["red", "blue", "gray", "pink", "lavender"]
}

export default ColorButtons