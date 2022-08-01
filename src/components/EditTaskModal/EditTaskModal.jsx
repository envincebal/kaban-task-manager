import React from 'react';
import Button from "../Button/Button";
import "./EditTaskModal.scss"

const EditTaskModal = () => {
  return (
    <div className="edit-task-modal">
    <h3 className="edit-task-title">Edit New Task</h3>
    <div className="edit-task-title-div">
      <label htmlFor="edit-task-title">Title</label>
      <input type="text" name="edit-task-title" className="edit-task-title" placeholder="e.g. Web Design"/>
    </div>
    <div className="edit-description-div">
      <label htmlFor="edit-description">Description</label>
      <textarea
      className="edit-description"
        name="edit-description"
        rows="5"
        placeholder="e.g. It’s always good to take a break. This 15 minute break will
recharge the batteries a little."></textarea>
    </div>
    <div className="edit-subtasks-div">
      <label htmlFor="edit-subtasks">Subtasks</label>
      <div className="edit-subtasks-item-div">
        <input
          className="edit-subtasks-input"
          type="text"
          name="edit-subtasks"
          placeholder="e.g. Web Design"/>
        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
          <g fill="#828FA3" fillRule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g>
        </svg>
      </div>
    </div>
    <Button text={"+ Add New Subtask"} className={"add-column-subtask"}/>
    <div className="edit-status-div">
      <label htmlFor="edit-status">Status</label>
      <select name="edit-status" className="edit-status">
        <option className="edit-status-option" value="Todo">Todo</option>
        <option className="edit-status-option" value="saab">Saab</option>
      </select>
    </div>

    <Button text={"Save Changes"} className={"create-save-changes"}/>
  </div>
  )
}

export default EditTaskModal