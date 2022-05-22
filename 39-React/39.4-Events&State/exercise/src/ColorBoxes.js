import React, { useState } from 'react'
import './ColorBoxes.css'
import ColorBox from './ColorBox'

const colors = ['red', 'yellow', 'green', 'blue', 'black']

function ColorBoxes() {


  return (
    <div className="ColorBoxes-div">
      <h1>Color Boxes</h1>

      {/* This is where 16 boxes will come */}
      <ColorBox
        all_colors={colors}
      />
      <button>random</button>

    </div >
  )
}

export default ColorBoxes