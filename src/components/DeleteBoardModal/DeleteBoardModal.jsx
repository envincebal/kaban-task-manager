import React from 'react';
import "./DeleteBoardModal.scss";

const DeleteBoardModal = () => {
  return (
    <div className="delete-board-modal">
      <h3 className="delete-board-title">Delete this board?</h3>
      <p className="delete-text">Are you sure you want to delete the 'Platform Launch' board? This action will remove all columns and tasks and cannot be reversed.</p>
      <div className="delete-btn-div">
        <button className="delete-board-btn">Delete</button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  )
}

export default DeleteBoardModal