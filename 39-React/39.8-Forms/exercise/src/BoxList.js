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
    const newId = uuid();
    const newBoxObject = {
      id: newId,
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
      key={boxObject.id}
      id={boxObject.id}
      color={boxObject.color}
      width={boxObject.width}
      height={boxObject.height}
      deleteBox={deleteBox}
    />;
    boxesDiv.push(boxComponent);
  })

  // FUnction to delete box
  function deleteBox(id) {
    console.log(id);
    const newBoxes = [...boxes];
    let idx;
    for (let i = 0; i < newBoxes.length; i++) {
      const box = newBoxes[i];
      if (box.id === id) {
        idx = i;
        break
      }
    }
    newBoxes.splice(idx, 1);
    // set the state except the box with that id
    setBoxes(newBoxes);
  }


  return (
    <div style={{ textAlign: "center" }}>

      <NewBoxForm addBox={addBox} />

      {boxesDiv}

    </div>
  )
}

export default BoxList