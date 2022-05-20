import React from 'react'

function Clicker(props) {
  const fireLaser = (event, arg1) => {
    console.log(event, arg1);
  };

  const coolors = {
    on: "red",
    off: "blue"
  }

  var key = true
  const splash = (event) => {
    console.log(event)
    const wowh1 = document.getElementById('wowh1');
    if (key) {
      wowh1.style.color = 'red'
      key = false;
    } else {
      wowh1.style.color = 'blue'
      key = true;
    }
  };

  return (
    <>
      <button onClick={(e) => { fireLaser(e, 'himan') }}>boom</button>
    </>
  )
}


export default Clicker