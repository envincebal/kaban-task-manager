import React from 'react';
import Button from "../Button/Button";
import "./NewTaskModal.scss";

const NewTaskModal = () => {
  return (
    <div className="new-task-modal">
      <h3 className="new-task-title">Add New Task</h3>
      <div className="task-title-div">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" className="title" placeholder="e.g. Web Design"/>
      </div>
      <div className="description-div">
        <label htmlFor="description">Description</label>
        <textarea
        className="description"
          name="description"
          rows="5"
          placeholder="e.g. It’s always good to take a break. This 15 minute break will
recharge the batteries a little."></textarea>
      </div>
      <div className="subtasks-div">
        <label htmlFor="subtasks">Subtasks</label>
        <div className="subtasks-item-div">
          <input
            className="subtasks-input"
            type="text"
            name="subtasks"
            placeholder="e.g. Web Design"/>
          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
            <g fill="#828FA3" fillRule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g>
          </svg>
        </div>
      </div>
      <Button text={"+ Add New Subtask"} className={"add-column-subtask"}/>
      <div className="status-div">
        <label htmlFor="status">Status</label>
        <select name="status" className="status">
          <option className="status-option" value="Todo">Todo</option>
          <option className="status-option" value="saab">Saab</option>
        </select>
      </div>

      <Button text={"Create Task"} className={"create-save-changes"}/>
    </div>
  )
}

export default NewTaskModal