import React from 'react';
import "./TaskItem.scss";

const TaskItem = () => {
  return (
    <li className="board-item">
      <h4 className="item-title">Build UI for onboarding flow</h4>
      <p className="subtask-count">0 of 2 subtasks</p>
    </li>
  )
}

export default TaskItem