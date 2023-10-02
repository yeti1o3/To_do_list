import React, { useState } from 'react'
import CreateTask from './CreateTask'
import CurrentTask from './CurrentTask';
import CompletedTask from './CompletedTask';
import "./ToDoList.css";

function ToDoList() {
  const savedList=JSON.parse(localStorage.getItem("taskList")||"[]")
    const[taskList,updateTaskList]=useState(savedList)
    const [completedTaskList, updateCompletedTaskList] = useState([]);
  return (
    <div className="main__Div">
      <div className="central__Div">
        <h1 className="heading__1">To Do List</h1>
        <CurrentTask
          taskList={taskList}
          updateTaskList={updateTaskList}
          completedTaskList={completedTaskList}
          updateCompletedTaskList={updateCompletedTaskList}
        />
        <CreateTask taskList={taskList} updateTaskList={updateTaskList} />
        <CompletedTask
          completedTaskList={completedTaskList}
          updateCompletedTaskList={updateCompletedTaskList}
        />
      </div>
    </div>
  );
}

export default ToDoList