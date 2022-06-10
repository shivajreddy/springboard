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


function MyForm(props) {

  const [task, setTask] = useState("");

  const updateTheText = (e) => {
    const userText = e.target.value;
    setTask(userText);
  }

  const [email, setEmail] = useState("");

  const validateEmail = (e) => {
    const userText = e.target.value;
    setEmail(userText)
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    if (task === "" || email === "") {
      return false;
    }
    else {
      props.addTask(task);
      setTask("");
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
          value={task}
          onChange={updateTheText}
        />

        <label htmlFor='em'>
          Email
        </label>
        <input
          id='em'
          value={email}
          onChange={validateEmail}
        />

        <button onClick={handleSumbit}>Add to List !</button>

      </form>
    </div>
  )
}

export default MyForm