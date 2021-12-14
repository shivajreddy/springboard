import './ColorBoxes.css';
import Box from './Box';
import React, { useState } from 'react'

const ColorBoxes = () => {

    const nums = []
    for(let i =0 ; i<25 ; ++i)
    {
        nums.push(i)
    }

    const randomIdx =()=> Math.floor(Math.random()*16)+1;
    const someRandomNumber = randomIdx()
    const [random, setRandom] = useState(0);
    const randomBox =()=>{
        setRandom(random+1)
    }

    return(
        <>
        <h1>Part - 2&3</h1>
        <div className='display'>
            {
                nums.map(item=>
                <>
                <Box count={random} color={item===someRandomNumber ? 'yes':'no'} cls="box" id={item}/>
                </>
                )
            }
        </div>
        <br></br>
        <button onClick={randomBox}>Change</button>
        </>
    );
};


export default ColorBoxes;