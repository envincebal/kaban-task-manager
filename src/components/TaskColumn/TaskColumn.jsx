import React from 'react';
import TaskItem from "../TaskItem/TaskItem";
import "./TaskColumn.scss";

const TaskColumn = () => {
  return (
    <div className="board-column">
      <h3>
        <span className="board-color"></span>TODO ({3})</h3>
      <ul className="task-list">
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/> 
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
      </ul>
    </div>
  )
}

export default TaskColumn