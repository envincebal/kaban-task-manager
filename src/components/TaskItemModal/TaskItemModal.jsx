import React,{useState} from 'react';
import {hideModal, editTask, taskMenu} from "../../reducers/modal/modalSlice";
import { moveTask, deleteCurrentTask } from "../../reducers/board/boardSlice";
import {useDispatch, useSelector} from "react-redux";
import mobile from "../../assets/icon-vertical-ellipsis.svg";
import check from "../../assets/icon-check.svg";
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
        <h5 className="subtask-counter">Subtasks (2 of 3)</h5>
        <ul className="subtask-list">
          {
            activeTask.subTasks.map((item, index) => (
          <li className="subtask-item" key={index}>
            <div className="checkbox">
              <img className="check" src={check} alt="checkbox"/>
            </div>
            {item.task}</li>
            ))
          }
        </ul>
        <div className="current-status-div">
          <label>Current Status</label>
          <button onClick={() => setStatusToggle(!statusToggle)} className="status"><span>h</span> <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path stroke="#635FC7" strokeWidth="2" fill="none" d="m1 1 4 4 4-4"/></svg></button>
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