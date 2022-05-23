import React, { useState } from 'react'
import Box from './Box'
import './ParentBox.css'

import choice from '../helpers'

function ParentBox(props) {

  const [current_box, setBox] = useState(
    Array.from({ length: props.number }, () => choice(props.colors))
  )

  const box_comp_array = current_box.map((color, idx) => <Box key={idx} color={color} />)

  function changeColor() {
    const random_number = Math.floor(Math.random() * props.number);
    // const randomly_selected_Box = 
    // changing the state of the randomly selected box
    setBox(boxes => {
      let box_copy = [...boxes];
      box_copy[random_number] = choice(props.colors);
      return box_copy;
    })
  }

  return (
    <div className='ParentBox'>
      <section className='ParentBox-section'>
        {box_comp_array}
      </section>
      <button onClick={changeColor}>BOOM</button>
    </div>

  )
}

export default ParentBox