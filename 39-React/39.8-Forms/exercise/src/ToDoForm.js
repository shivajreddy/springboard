import React, { useState } from 'react'

function ToDoForm({ addTask }) {

  const INITIAL_STATE = {
    task: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE)

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.task !== "") {
      // call the function that adds this task to the parent state
      addTask(formData.task)

      setFormData(INITIAL_STATE);
    }
  }

  return (
    <div>
      <form typeof='submit'>
        <label htmlFor='task'> Task:</label>
        <input
          id="task"
          name="task"
          value={formData.task}
          onChange={handleChange}

        />
        <button
          onClick={handleSubmit}
        >
          Add</button>

      </form>
    </div>
  )
}

export default ToDoForm