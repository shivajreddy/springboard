import { useState } from 'react'

let previous_state;
function NumberGame() {

  const newRandom = () => {
    const random_number = Math.floor(Math.random() * 5) + 1;
    return random_number;
  };

  const [current_target] = useState(newRandom());
  const [current_state, setState] = useState();

  function check(e) {
    const p = document.getElementById('ptag');
    setState(() => {
      previous_state = current_state;
      const another_guess = newRandom();
      if (another_guess === current_target) {
        p.style.color = 'green'

      } else {
        p.style.color = 'red'
      }
      return another_guess;
    }
    )
  }

  return (
    <>
      <h4>Target: {current_target}</h4>
      <p id='ptag' >previous guess:{previous_state} Your Guess:{current_state}</p>
      {current_target === current_state ?
        <button onClick={() => {
          previous_state = null;
          document.getElementById('ptag').style.color = 'black'
          setState()
        }}>New Game</button>
        : <button id='guess_btn' onClick={(e) => check(e)}>Guess</button>
      }
    </>
  )
}

export default NumberGame