import React from 'react'

function NumberItem(props) {
  return (
    <li>
      {props.num}
      <button onClick={props.remove}>-</button>
    </li>
  )
}

export default NumberItem