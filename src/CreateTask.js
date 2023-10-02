import React, { useState } from 'react'
import './CreateTask.css'
function CreateTask({ taskList, updateTaskList }) {
  const [tempTask, updateTempTask] = useState("");
  const [add, setAdd] = useState(false);
  function createTask(e) {
    const newTask = e.target.value;
    updateTempTask(newTask);
  }
  function confirmTask() {
    const taskObj={
      task:tempTask,
      ischecked:false,
    }

    updateTaskList([...taskList,taskObj]);
    const List=JSON.stringify(taskList)
    localStorage.setItem("taskList",List);
    updateTempTask("");
  }
  function addTask()
  {
    setAdd(!add);
  }
  return (
    <div className="create__Task">
      {add && (
        <div className="add__Task">
            <input type="text" onChange={createTask} value={tempTask}></input>
            <button type="submit" onClick={confirmTask}>
              Create
            </button>  
        </div>
      )}
      <button onClick={addTask}>add task</button>
    </div>
  );
}

export default CreateTask