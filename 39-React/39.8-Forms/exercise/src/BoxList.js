import React, { useState } from 'react'
import NewBoxForm from './NewBoxForm'
import Box from './Box'
import { v4 as uuid } from 'uuid'


function BoxList() {

  // Generate boxes
  // const box1 = {
  //   color: "pink",
  //   width: "100",
  //   height: "100"
  // }

  // const box2 = {
  //   color: "pink",
  //   width: "100",
  //   height: "100"
  // }

  // state for managing all boxes
  const [boxes, setBoxes] = useState([]);

  // Create Box component and add it to state, set it.
  const addBox = (c, w, h) => {
    const newBoxObject = {
      color: c,
      width: w,
      height: h
    };

    setBoxes(prevBoxes => {
      const newBoxes = [...prevBoxes];
      newBoxes.push(newBoxObject);
      return newBoxes;
    })
  }

  // Make Div of Box components
  const boxesDiv = [];
  boxes.map(boxObject => {
    const id = uuid();
    const boxComponent = <Box
      key={id}
      id={id}
      color={boxObject.color}
      width={boxObject.width}
      height={boxObject.height}
    />;
    boxesDiv.push(boxComponent);
  })


  return (
    <div style={{ textAlign: "center" }}>


      <NewBoxForm addBox={addBox} />

      {boxesDiv}


    </div>
  )
}

export default BoxList