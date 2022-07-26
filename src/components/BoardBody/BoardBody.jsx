import React from 'react';
import Button from "../Button/Button";
import BoardColumn from "../BoardColumn/BoardColumn";
import "./BoardBody.scss";

const BoardBody = () => {
  return (
    <div className="board-body">
      <BoardColumn /> 
      {/* <div className="empty-board-div">
        <div className="empty-content">
        <h3>This board is empty. Create a new column to get started.</h3>
        <Button className={"add-task"} text={"+ Add New Column"} />
        </div>

      </div> */}
    </div>
  )
}

export default BoardBody