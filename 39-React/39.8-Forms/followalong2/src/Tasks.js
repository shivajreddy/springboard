import React, { useState } from 'react'
import MyForm from './MyForm';
import SignUpForm from './SignUpForm';
import Task from './Task';
import { v4 as uuid } from 'uuid';


function Tasks({ tasks }) {

  const [allTasks, setAllTasks] = useState([]);

  const addTask = (data) => {
    const newTask = <Task key={uuid()} value={data.task} email={data.email} />;
    const newList = [...allTasks];
    newList.push(newTask);
    setAllTasks(newList);
  }

  return (
    <div>

      <MyForm addTask={addTask} />

      <p> List of all tasks </p>

      {allTasks}

      <div >
        <SignUpForm />
      </div>

    </div>
  )
}

export default Tasks