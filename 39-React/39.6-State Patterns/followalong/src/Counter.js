import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(()=>0);
  return (
    <>
      Count:{count}
      <button onClick={()=>setCount(prev_count=>prev_count+1)}>+</button>
    </>
  )
}

export default Counter