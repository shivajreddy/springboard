import React,{useState}  from 'react'
import ColorButtons from './ColorButtons'
import Circle from './Circle';

function ColorfulCircles() {

  const [curr_circles, setCircles] = useState([]);

  const func21 = (new_item) => {
    setCircles(prev_state =>{
      return [...prev_state, new_item];
    })
  };

  return (
    <>
      <ColorButtons
        addCircle = {func21}
      />
      <div >
      {/* {curr_circles} */}
      {curr_circles.map((color,idx)=>{
        return <Circle
          color = {color}
          key={idx}
          idx = {idx}
        /> 
      })}
      </div>
    </>
  )
}

export default ColorfulCircles