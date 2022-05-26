import React, { useState } from 'react'
import './Dice.css'
import Die from './Die';

// Helper function -> Return an array of random numbers <= highest
function randomNumbers(quantity, highest) {
  const result = [];
  for (let i = 0; i < quantity; i++) {
    result.push(Math.floor(Math.random() * highest) + 1)
  }
  return result;
}


function Dice({ numDice, title, maxValue }) {

  const [dice, setDice] = useState(randomNumbers(numDice, maxValue))

  function rollDice() {
    setDice(randomNumbers(numDice, maxValue));
  }

  return (
    <div className='Dice'>

      {title}
      {dice.map((num, idx) => <Die key={idx} val={num} />)}

      <button onClick={rollDice}>ROLL</button>
    </div>
  )
}

export default Dice

Dice.defaultProps = {
  title: "Roll Me",
  numDice: 1,
  maxValue: 6
}