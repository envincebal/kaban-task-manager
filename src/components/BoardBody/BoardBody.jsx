import React, { useEffect } from 'react';
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {newColumn, newBoard} from "../../reducers/modal/modalSlice";
import Button from "../Button/Button";
import TaskColumn from "../TaskColumn/TaskColumn";
import "./BoardBody.scss";

const BoardBody = () => {
  const dispatch = useDispatch();

  const {boards, activeBoard} = useSelector(store => store.board);
  const [currentBoard, setCurrentBoard] = useState(null);
  useEffect(() => {
    const getBoardByID = boards.find(el => el.id === activeBoard);
 
    setCurrentBoard(getBoardByID);
     
  },[activeBoard, currentBoard,boards]);

  return (
    <div className="board-body">
    {console.log(currentBoard)}
      {boards.length > 0
        ? (
          <div className="boards-div">
            {
              currentBoard.columns.map((item, i) => {
                return <TaskColumn name={item.board} key={i}/>
              })
            }
            <div onClick={() => dispatch(newColumn())} className="new-board-column">
              <h2>+ New Column</h2>
            </div>
          </div>
        )
        : (
          <div className="empty-board-div">
            <div className="empty-content">
              <h3>This board is empty. Create a new column to get started.</h3>
              <Button onClick={() => dispatch(newBoard())} className={"add-task"} text={"+ Add New Column"}/>
            </div>
          </div>
        )}
    </div>
  )
}

export default BoardBody