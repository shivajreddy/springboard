import React from 'react'
import './Circle.css'

function Circle(props) {
  return (
    <button
    className='Circle'
    style={{backgroundColor: props.color}}
    // onClick = {()=>props.addCircle()}
    key = {props.color}
    >
    {props.idx + 1}
    </button>
  )
}

export default Circle