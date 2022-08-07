import React from 'react';
import {hideModal, editTask, deleteTask, taskMenu} from "../../reducers/modal/modalSlice";
import {useDispatch, useSelector} from "react-redux";
import mobile from "../../assets/icon-vertical-ellipsis.svg";
import check from "../../assets/icon-check.svg";
import "./TaskItemModal.scss";
const TaskItemModal = () => {
  const dispatch = useDispatch();
  const {taskMenuToggle} = useSelector(store => store.modal);
  return (
    <div className="task-item-modal">
      <div className="task-header">
        <h3 className="task-item-title">Build UI for onboarding flow task-header task-header task-header</h3>
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
              dispatch(deleteTask());
            }}
              className="delete-board-btn">Delete Task</button>
          </div>
        )}

      </div>
      <p className="task-text">We know what we're planning to build for version one.
        Now we need to finalise the first pricing model we'll use. Keep iterating the
        subtasks until we have a coherent proposition.</p>
      <div className="task-subtask-div">
        <h5 className="subtask-counter">Subtasks (2 of 3)</h5>
        <ul className="subtask-list">
          <li className="subtask-item">
            <div className="checkbox">
              <img className="check" src={check} alt="checkbox"/>
            </div>
            Outline a business model that works for our solution</li>
          <li className="subtask-item">
            <div className="checkbox">
              <img className="check" src={check} alt="checkbox"/>
            </div>

            Outline a business model that works for our solution</li>
        </ul>
        <div className="current-status-div">
          <label htmlFor="status">Current Status</label>
          <select name="status" className="status">
            <option className="status-option" value="Todo">Todo</option>
            <option className="status-option" value="saab">Saab</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default TaskItemModal