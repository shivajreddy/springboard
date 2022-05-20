import { useState } from "react";

function Counter(props) {

  const [count, setCount] = useState(0);

  // console.log(count);

  return (
    <div style={{ textAlign: "center" }}>
      <div>Counter</div>
      <h3> {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Remove</button>
    </div>
  )
}


export default Counter