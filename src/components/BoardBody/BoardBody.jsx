import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import {newColumn, newBoard} from "../../reducers/modal/modalSlice";
import Button from "../Button/Button";
import TaskColumn from "../TaskColumn/TaskColumn";
import "./BoardBody.scss";

const BoardBody = () => {
  const dispatch = useDispatch();

  const {boards,activeBoard} = useSelector(store => store.board);

  const colors = ['#49c4e5', '#8471f2', '#67e2ae', '#ff6fa2', "#ffca5e"]

  return (
    <div className="board-body">

      {boards.length > 0
        ? (
          <div className="boards-div">
            {
              activeBoard.columns.map((item,index) => {
                return <TaskColumn id={item.id} name={item.board} key={item.id} color={colors[index % colors.length]} />
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