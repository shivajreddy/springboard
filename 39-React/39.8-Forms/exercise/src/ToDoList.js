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

  const [toDoList, setToDoList] = useState([]); // starting state is empty array.

  function addTask(taskText) {
    const newTasks = [...toDoList];
    const id = uuid();
    const newTaskObject = {
      id: id,
      taskText: taskText,
      status: false
    }
    newTasks.push(newTaskObject);
    setToDoList(newTasks);
  }

  function deleteTask(id) {

    setToDoList(prevTasks => {

      const newTasks = [...prevTasks];

      // get the idx of the task that is to be deleted
      let task_idx;
      newTasks.map((task, idx) => {
        if (task.id === id) {
          task_idx = idx
        }
      })
      newTasks.splice(task_idx, 1); // delete the task
      return newTasks;
    })

  }


  // Create array of Task Components based off state objects
  const todoListDiv = [];
  toDoList.map(taskObject => {
    todoListDiv.push(
      <Task
        key={taskObject.id}
        id={taskObject.id}
        taskText={taskObject.taskText}
        status={taskObject.status}
        deleteTask={deleteTask}
      />
    )
  })

  return (
    <div>
      <ToDoForm addTask={addTask} />
      {todoListDiv}
    </div>
  )
}

export default ToDoList