import React from 'react';
import { useDispatch } from "react-redux";
import { taskItem } from "../../reducers/modal/modalSlice";
import "./TaskItem.scss";

const TaskItem = () => {
  const dispatch = useDispatch();
  return (
    <li className="board-item" onClick={() => dispatch(taskItem())}>
      <h4 className="item-title">Build UI for onboarding flow</h4>
      <p className="subtask-count">0 of 2 subtasks</p>
    </li>
  )
}

export default TaskItem