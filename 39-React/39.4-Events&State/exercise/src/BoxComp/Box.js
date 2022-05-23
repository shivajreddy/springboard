import React from 'react'

function Box(props) {
  return (
    <div className='Box' style={{ backgroundColor: props.color }}>
      {props.color}
    </div>
  )
}

export default Box