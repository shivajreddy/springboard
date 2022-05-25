import BallButtons from './BallButtons'
import { useState } from 'react'
import Ball from './Ball';

function BallBoard() {

  const [balls, setBalls] = useState([]);

  function getRandom(min = 0, max = 100) {
    return Math.random() * (max - min) + min
  }

  function add_ball(new_ball_color) {
    // console.log('going to add', new_ball_color);
    setBalls(old_balls => [...old_balls, { new_ball_color, x: getRandom(), y: getRandom() }])
  }

  function changed_position(e, idx) {
    // get the old state, return the new state based on index
    setBalls(balls => {
      const old_balls = [...balls]
      console.log(old_balls, old_balls[idx])
      old_balls[idx].x = getRandom();
      old_balls[idx].y = getRandom();
      return old_balls
    })
  }

  return (
    <>
      <h2>Buttons board</h2>
      <BallButtons addBall={add_ball} />
      {balls.map(({ new_ball_color, x, y }, idx) => {
        return <Ball
          key={idx}
          idx={idx}
          color={new_ball_color}
          x={x} y={y}
          changed_position={changed_position} />
      })}
    </>
  )
}


export default BallBoard