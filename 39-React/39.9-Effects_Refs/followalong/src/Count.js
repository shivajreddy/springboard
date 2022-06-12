import React, { useState } from 'react'

function Count() {

  const [count, setCount] = useState(0);

  function changeCount() {
    setCount(c => c + 1)
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={changeCount}>add</button>
    </div>
  )
}

export default Count