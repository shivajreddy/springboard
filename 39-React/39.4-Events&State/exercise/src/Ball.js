import React, { useState } from 'react';
import './Ball.css';

import msgs from './messages'


function Ball() {

  const random_msg = () => {
    const n = msgs.length;
    const random_msg = msgs[Math.floor(Math.random() * n)];
    return random_msg;
  };

  const [current_msg, setMsg] = useState();

  return (
    <div >
      <div className='Ball'>

        <div style={{ cursor: 'pointer', backgroundColor: current_msg ? current_msg.color : null }}
          id="ball"
          className='Ball-circle'
          onClick={() => setMsg(random_msg())}>
          <h4>Think of a Question</h4>
        </div>

      </div >
      <h4 style={{ textAlign: 'center' }}>{current_msg && current_msg.msg}</h4>
    </div>
  )
}

export default Ball