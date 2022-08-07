import React from 'react';
import "./DeleteTaskModal.scss";

const DeleteTaskModal = () => {
  return (
    <div className="delete-task-modal">
      <h3 className="delete-task-title">Delete this board?</h3>
      <p className="delete-text">Are you sure you want to delete the "Build settings UI" task and its subtasks? This action cannot be reversed.</p>
      <div className="delete-btn-div">
        <button className="delete-task-btn">Delete</button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  )
}

export default DeleteTaskModal;