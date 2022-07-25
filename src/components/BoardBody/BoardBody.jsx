import React from 'react';
import Button from "../Button/Button";
import "./BoardBody.scss";

const BoardBody = () => {
  return (
    <div className="board-body">
      <div className="empty-board-div">
        <h3>This board is empty. Create a new column to get started.</h3>
        <Button className={"add-task"} text={"+ Add New Column"} />
      </div>
    </div>
  )
}

export default BoardBody