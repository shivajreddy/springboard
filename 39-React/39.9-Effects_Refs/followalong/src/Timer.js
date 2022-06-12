import React, { useState, useEffect } from 'react'

function Timer({ start = 0, color = "cyan" }) {
  const [timer, setTimer] = useState(start);

  function ChangeTimer() {
    setInterval(() => {
      setTimer(time => time + 1);
    }, 1000);
  }

  // DOM changes after 2 seconds, not after 1 second
  useEffect(ChangeTimer, [start]);

  // DOM changes after 2 seconds, not after 1 second
  // useEffect(() => {
  //   setInterval(() => {
  //     setTimer(time => time + 1);
  //   }, 1000);
  // }, [])


  return (
    <>
      <h2 style={{ backgroundColor: color }}> Time: {timer} </h2>
    </>
  )
}

export default Timer