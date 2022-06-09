import React, { useState } from 'react'

/*
Controlled Components
input -> has own state
React has state also.
So -> we will make React the incharge of the input state.
*/

// 1. start a state, usually an empty string
//    in.other.words-> you set the value of a label, with a state.
// 2. So the input's value is going to be the state. So initially an empty string.
// 3. Everytime there is a change in the input, our function we give at "onChange" will run.
// 4. This function will take the event as input. And event.target.value will give the
//    events value, i.e.,



function MyForm(props) {


  const [task, setTask] = useState("");

  const updateTheText = (e) => {
    // console.log(e.target.value);
    const userText = e.target.value;

    setTask((prevState) => {
      // console.log(prevState);
      return e.target.value;
    })

    // check if ther is any number.
    // if (/\d/.test(userText)) {
    //   setTask("")
    // }

  }

  const handleSumbit = (e) => {

    e.preventDefault();

    props.addTask(task);
    setTask("");

  }


  const func21 = () => { console.log("hi") };
  const func22 = () => { console.clear() };

  return (
    <div>
      <form>
        <label className='MyForm-label'> Task</label>
        <input
          value={task}
          onChange={updateTheText}
        // onKeyDown={func21}
        // onKeyUp={func22}
        />
        <button onClick={handleSumbit}>Add to List !</button>
      </form>
    </div>
  )
}

export default MyForm