import React from 'react';
import TaskItem from "../TaskItem/TaskItem";
import "./TaskColumn.scss";

const TaskColumn = ({name}) => {
  return (
    <div className="board-column">
      <h3>
        <span className="board-color"></span>{name} ({3})</h3>
      <ul className="task-list">

      </ul>
    </div>
  )
}

export default TaskColumn