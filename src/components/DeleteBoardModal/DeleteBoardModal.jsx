import React from 'react';
import {useDispatch} from "react-redux";
import {hideModal} from "../../reducers/modal/modalSlice";
import {deleteCurrentBoard} from "../../reducers/board/boardSlice";
import "./DeleteBoardModal.scss";

const DeleteBoardModal = () => {

  const dispatch = useDispatch();
  return (
    <div className="delete-board-wrapper">
      <div className="delete-board-modal">
        <h3 className="delete-board-title">Delete this board?</h3>
        <p className="delete-text">Are you sure you want to delete the 'Platform Launch'
          board? This action will remove all columns and tasks and cannot be reversed.</p>
        <div className="delete-btn-div">
          <button
            onClick={() => {
            dispatch(deleteCurrentBoard());
            dispatch(hideModal());
          }}
            className="delete-board-btn">Delete</button>
          <button
            onClick={() => {
            dispatch(hideModal());
          }}
            className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>

  )
}

export default DeleteBoardModal