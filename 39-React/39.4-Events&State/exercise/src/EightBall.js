import React, { useState } from 'react'
import msgs from './messages'
import './EightBall.css'

const color_count = {
  goldenrod: 0,
  red: 0,
  green: 0
}

function EightBall(props) {
  const default_msg = "Ask me anything human.🧞️"

  const [curr_msg, setMsg] = useState(default_msg);
  const [curr_color, setColor] = useState();

  function ask_ball() {
    const random_obj = msgs[(Math.floor(Math.random() * (msgs.length)))];
    setMsg(random_obj.msg)
    setColor(random_obj.color)
    if (random_obj.color === 'red') color_count.red += 1;
    if (random_obj.color === 'green') color_count.green += 1;
    if (random_obj.color === 'goldenrod') color_count.goldenrod += 1;
  }

  function reset_game() {
    setMsg(default_msg);
    setColor();
  }

  return (
    <div className='EightBall-game'>
      <div className='EightBall-ball' style={{ backgroundColor: curr_color }}>
        <h3 style={{ padding: "10px" }}>{curr_msg}</h3>
        {/* <h3>{curr_color}</h3> */}
      </div>
      <button onClick={ask_ball} className="EightBall-btn">Ask Ball</button>
      {curr_color
        &&
        <button onClick={reset_game}>Reset</button>
      }
      {
        curr_color
        &&
        <p>color count- Red:{color_count.red} Green:{color_count.green} GoldenRod:{color_count.goldenrod}</p>
      }
    </div>

  )
}



export default EightBall