import React from 'react';
import { useDispatch } from "react-redux";
import { taskItem } from "../../reducers/modal/modalSlice";
import { setActiveTask } from "../../reducers/board/boardSlice";
import "./TaskItem.scss";

const TaskItem = ({title, tasksLength, columnID, taskID}) => {
  const dispatch = useDispatch();
  return (
    <li className="board-item" onClick={() => {
      dispatch(setActiveTask({columnID, taskID}));
      dispatch(taskItem())
      }}>
      <h4 className="item-title">{title}</h4>
      <p className="subtask-count">{`0 of ${tasksLength} subtasks`}</p>
    </li>
  )
}

export default TaskItem