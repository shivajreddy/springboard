import React, { useState, useEffect } from 'react'

function Timer() {
  const [timer, setTimer] = useState(0);

  function ChangeTimer() {
    setInterval(() => {
      setTimer(time => time + 1);
    }, 1000);
  }

  // DOM changes after 2 seconds, not after 1 second
  // useEffect(ChangeTimer, []);

  // DOM changes after 2 seconds, not after 1 second
  // useEffect(() => {
  //   setInterval(() => {
  //     setTimer(time => time + 1);
  //   }, 1000);
  // }, [])


  return (
    <>
      <h2> Time: {timer} </h2>
    </>
  )
}

export default Timer