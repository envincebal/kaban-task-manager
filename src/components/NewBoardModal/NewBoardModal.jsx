import React from 'react';
import Button from "../Button/Button";
import "./NewBoardModal.scss";

const NewBoardModal = () => {
  return (
    <div className="new-board-modal">
      <h3>Add New Board</h3>
      <div>
        <label htmlFor="board name">Board Name</label>
        <input type="text" name="board name" placeholder="e.g. Web Design"/>
      </div>
      <div>
        <label htmlFor="board columns">Board Columns</label>
        <input type="text" name="board name" placeholder="e.g. Web Design"/>
        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
          <g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g>
        </svg>
      </div>
      <Button text={"+ Add New Column"} className={"add-edit-button"} />
    </div>
  )
}

export default NewBoardModal