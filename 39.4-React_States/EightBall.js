import './EightBall.css'
import React, { useState } from 'react'

const EightBall = (props) => {

    const randomIdx =()=> Math.floor(Math.random()*props.answers.length);
    const [message, setMessage] = useState('Think of a question')
    const [color, setColor] = useState('black');

    const [count, setCount] = useState(0)

    const eightBallGame = () => {
        setColor(
            props.answers[randomIdx()].color
        )
        setMessage(
            props.answers[randomIdx()].msg
        )
        setCount(count+1)

    }
    const resetGame = ()=> {
        setColor('black')
        setMessage('Think of a question')
        setCount(0)
    }

    return(
        <>
            <h1>Part1</h1>
            <div className="game">
                <div className='ball' style={{backgroundColor: color}} >
                    <h4  >{message}</h4>
                </div>
            </div>
            <p>Count:-TotalCount={count}</p>
            <button onClick={eightBallGame}>Roll</button>
            <br></br>
            <button onClick={resetGame}>Reset</button>
        </>
    )
};


export default EightBall;