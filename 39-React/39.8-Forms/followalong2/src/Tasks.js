import React, { useState } from 'react'
import MyForm from './MyForm';
import Task from './Task';

function Tasks({ tasks }) {

  const [allTasks, setAllTasks] = useState([]);

  const addTask = (newTaskText) => {
    const newTask = <Task value={newTaskText} />;
    const newList = [...allTasks];
    newList.push(newTask);
    setAllTasks(newList);
  }

  return (
    <div>

      <MyForm addTask={addTask} />

      <p> List of all tasks </p>

      {allTasks}

    </div>
  )
}

export default Tasks