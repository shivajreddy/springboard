import React, { useState } from 'react'
import './Task.css'

function Task({ id, taskText, deleteTask }) {

  const [status, setStatus] = useState(false);

  function handleChange() {
    setStatus(status ? false : true)
  }

  const classes = `Task ${status ? "Finished" : "UnFinished"}`;

  return (
    <div className='Task' id={id}>

      <input
        type="checkbox"
        onChange={handleChange}
      />
      <h4 className={classes} >{taskText}</h4>
      <button onClick={() => deleteTask(id)}>X</button>

    </div>
  )
}

export default Task