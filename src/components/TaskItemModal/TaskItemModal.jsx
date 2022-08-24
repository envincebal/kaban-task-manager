import React,{useState} from 'react';
import {hideModal, editTask, taskMenu} from "../../reducers/modal/modalSlice";
import { moveTask, deleteCurrentTask, setCheckbox } from "../../reducers/board/boardSlice";
import {useDispatch, useSelector} from "react-redux";
import mobile from "../../assets/icon-vertical-ellipsis.svg";
import "./TaskItemModal.scss";

const TaskItemModal = () => {
  const dispatch = useDispatch();
  const {taskMenuToggle} = useSelector(store => store.modal);
  const {activeBoard, activeTask} = useSelector(store => store.board);
  const [statusToggle, setStatusToggle] = useState(false);

  return (
    <div className="task-item-modal">
      <div className="task-header">
        <h3 className="task-item-title">{activeTask.title}</h3>
        <img
          onClick={() => dispatch(taskMenu())}
          className="menu-btn"
          src={mobile}
          alt="menu button"/> {taskMenuToggle && (
          <div className="menu-div">
            <button
              onClick={() => {
              dispatch(hideModal());
              dispatch(editTask());
            }}
              className="edit-board-btn">Edit Task</button>
            <button
              onClick={() => {
              dispatch(hideModal());
              dispatch(deleteCurrentTask());
            }}
              className="delete-board-btn">Delete Task</button>
          </div>
        )}

      </div>
      <p className="task-text">{activeTask.description}</p>
      <div className="task-subtask-div">
        <h5 className="subtask-counter">{`Subtasks (${activeTask.taskCount} of ${activeTask.subTasks.length})`}</h5>
        <ul className="subtask-list">
          {
            activeTask.subTasks.map((item, index) => (
          <label className="subtask-item" key={index}>
            <input onClick={() => dispatch(setCheckbox({id: item.id}))} className="checkbox" name="checked" readOnly value={item.checked} checked={item.checked}  type="checkbox" />
            <span className={`${item.checked ? "checked-text" : ""} subtask-text`}>{item.task}</span>  
          </label>
            ))
          }
        </ul>
        <div className="current-status-div">
          <label>Current Status</label>
          <button onClick={() => setStatusToggle(!statusToggle)} className="status"><span>{activeBoard.columns[0].board}</span> <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path stroke="#635FC7" strokeWidth="2" fill="none" d="m1 1 4 4 4-4"/></svg></button>
          {
            statusToggle &&(
              <ul className="status-list">
             {
            activeBoard.columns.map((item, index) => (
              <li onClick={() => {
                dispatch(moveTask(item.id))
                dispatch(hideModal())
              }} key={index} className="status-item" value={item.id}>{item.board}</li>
            ))
          }
          </ul>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default TaskItemModal