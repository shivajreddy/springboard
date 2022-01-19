import React, { useState } from 'react'
import './NumberGame.css'

const NumberGame = () => {

    const randomNumber = ()=> Math.floor(Math.random()*6) + 1;

    const [target, setTarget] = useState(randomNumber());
    const [guess, setGuess] = useState(0);
    const [count, setCount] = useState(0);
    const isSame = target === guess ? true : false;
    const guessGame = ()=> {
        setGuess(randomNumber())
        setCount(count + 1)
    }

    const resetGame = () => {
        setGuess(0)
        setTarget(randomNumber())
        setCount(0)
    }

    return(
        <>
        <h1>Number Guess</h1>
            <p>Target:{target}</p>
            <p class={isSame ? "winner" : "looser"} >Your Guess: {guess}</p>
            <p>Count:{count}</p>
            {isSame ? null : 
            <button onClick={guessGame}>Guess</button>
            }
            <br></br>
            <button onClick={resetGame}>Reset</button>

        </>
    )

};


export default NumberGame;