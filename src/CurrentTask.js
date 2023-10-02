import React from 'react'
import './CurrentTask.css'

function CurrentTask({taskList,updateTaskList,completedTaskList,updateCompletedTaskList}) {
    function handleChange(index) {
    taskList[index].ischecked=true;
    let tempTaskList=taskList.filter((e)=>!e.ischecked)
    updateCompletedTaskList([...completedTaskList,taskList[index]])
    updateTaskList([...tempTaskList])
    }
  return (
    <div className='current__Task'>
      <h3>Things to get done</h3>
      {taskList.map((e,index) => {
        return (
          <div
            className="current__TaskRow"
            key={index}
            onClick={() => {
              return handleChange(index);
            }}
          >
            {e.task}
          </div>
        );
      })}
    </div>
  );
}

export default CurrentTask
 