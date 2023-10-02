import React from 'react'
import './CompletedTask.css'
function CompletedTask({ completedTaskList, updateCompletedTaskList }) {
  return (
    <div className="completed__Task">
      <h3 className="heading__2">Completed List</h3>
      <div>
        {completedTaskList.map((e, index) => (
          <div key={index} className="completed__TaskRow">
            <s>{e.task}</s>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompletedTask