import React, {useState} from "react";


const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <h2>Counter</h2>
            <h4>Total:{count}</h4>
            <button onClick={()=>setCount(
                count + 1
            )}>Add</button>
            <button onClick={()=>setCount(
                count - 1
            )}>Sub</button>
        </>
    )

}


export default Counter;