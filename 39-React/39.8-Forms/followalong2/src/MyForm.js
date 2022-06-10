import React, { useState } from 'react'

// 1. start a state, usually an empty string
//    in.other.words-> you set the value of a label, with a state.
// 2. So the input's value is going to be the state. So initially an empty string.
// 3. Everytime there is a change in the input, our function we give at "onChange" will run.
// 4. This function will take the event as input. And event.target.value will give the
//    events value, i.e.,

/*  COMPUTED PROPERTY NAMES
ES2015 -> New Feature
let instructorCode = "elie";
let instructorDate = {
  [instructorCode] : "Elie Schooppik"
};
*/

/*
instead of multiple functions to evaluate stuff,
you can have same function to evaluate
*/


function MyForm({ addTask }) {

  const INITIALSTATE = {
    "task": "",
    "email": ""
  }
  const [formData, setFormData] = useState(INITIALSTATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.task === "" || formData.email === "") {
      return false
    } else {
      // props.addTask(formData.task, formData.email);
      addTask({ ...formData })
      setFormData(INITIALSTATE);
    }
  }

  return (
    <div>
      <form>
        <label htmlFor='tsk'>
          Task
        </label>
        <input
          id='tsk'
          name="task"
          value={formData.task}
          onChange={handleChange}
        />

        <label htmlFor='em'>
          Email
        </label>
        <input
          id='em'
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Add to List !</button>

      </form>
    </div>
  )
}

export default MyForm