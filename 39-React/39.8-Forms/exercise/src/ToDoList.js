import React, { useState } from 'react'
import ToDoForm from './ToDoForm';
import Task from './Task';
import { v4 as uuid } from 'uuid';


function ToDoList() {

  const sampleTask = {
    id: "",
    taskText: "go workout",
    status: false
  }

  const [toDoList, setToDoList] = useState([sampleTask]); // starting state is empty array.

  function addTask(taskText) {
    const newTasks = [...toDoList];
    newTasks.push(taskText);
    setToDoList(newTasks);
  }


  const todoListDiv = [];
  toDoList.map(taskObject => {
    const id = uuid();
    todoListDiv.push(
      <Task
        key={id}
        id={id}
        taskText={taskObject.taskText}
        status={taskObject.status}
      />
    )
  })

  return (
    <div>
      <ToDoForm />
      {todoListDiv}
    </div>
  )
}

export default ToDoList