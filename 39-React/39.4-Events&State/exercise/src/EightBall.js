import React, { useState } from 'react'
import msgs from './messages'

function EightBall(props) {

  const [curr_state, setState] = useState();
  console.log(curr_state)

  function ball_answer() {
    const random_obj = msgs[(Math.floor(Math.random() * (msgs.length)) + 1)];
    return random_obj.msg
  }

  return (
    <>
      EightBall
      <p>{curr_state}</p>
      <button onClick={() => setState(ball_answer())}>push</button>
    </>

  )
}



export default EightBall