import { useState } from 'react'

function Time() {

  const current_time = new Date().toLocaleTimeString();
  const [current_state, setState] = useState(current_time);

  setInterval(() => {
    setState(new Date().toLocaleTimeString())
  }, 1000);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{current_state} </h2>
    </div>
  )
}

export default Time