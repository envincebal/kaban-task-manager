import React from 'react';
import { useDispatch } from "react-redux";
import { newColumn } from "../../reducers/modal/modalSlice";
import Button from "../Button/Button";
import TaskColumn from "../TaskColumn/TaskColumn";
import "./BoardBody.scss";

const BoardBody = () => {
  const dispatch = useDispatch();
  return (
    <div className="board-body">
      <TaskColumn /> 
      <TaskColumn /> 

      <div onClick={() => dispatch(newColumn())} className="new-board-column">
        <h2>+ New Column</h2>
      </div>
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