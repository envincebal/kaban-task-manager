import React from 'react';
import Button from "../Button/Button";
import "./NewBoardModal.scss";

const NewBoardModal = () => {
  return (
    <div className="new-board-modal">
      <h3 className="modal-title">Add New Board</h3>
      <div className="board-name-div">
        <label htmlFor="board name">Board Name</label>
        <input type="text" name="board name" placeholder="e.g. Web Design"/>
      </div>
      <div className="board-columns-div">
        <label htmlFor="board columns">Board Columns</label>
        <div className="columns-item-div">
          <input className="column-input" type="text" name="board name" placeholder="e.g. Web Design"/>
        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
          <g fill="#828FA3" fillRule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g>
        </svg>
        </div>
      </div>
      <Button text={"+ Add New Column"} className={"add-column-subtask"} />
      <Button text={"Save Changes"} className={"create-save-changes"} />

    </div>
  )
}

export default NewBoardModal