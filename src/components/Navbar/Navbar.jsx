import React from 'react';
import darkLogo from "../../assets/logo-light.svg";
import mobile from "../../assets/icon-vertical-ellipsis.svg";
import Button from "../Button/Button";
import {useDispatch,useSelector} from "react-redux";

import {newTask, editBoard, deleteBoard, navMenu} from "../../reducers/modal/modalSlice";
import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const {navMenuToggle} = useSelector(store => store.modal);
  const {activeBoard} = useSelector(store => store.board);
  return (
    <nav className="navbar">
      <div className="logo-div">
        <img className="log-img" src={darkLogo} alt="logo"/>
      </div>
      <div className="main-navbar">
        <h2>{activeBoard && activeBoard.name}</h2>
        <div className="add-task-div">
          <Button
            onClick={() => dispatch(newTask())}
            className={"add-task"}
            text={"+ Add New Task"}/>
          <img
            onClick={() => dispatch(navMenu())}
            className="menu-btn"
            src={mobile}
            alt="menu"/>

        </div>
        {navMenuToggle && (
          <div className="menu-div">
            <button onClick={() => dispatch(editBoard())} className="edit-board-btn">Edit Board</button>
            <button onClick={() => dispatch(deleteBoard())} className="delete-board-btn">Delete Board</button>
          </div>
        )
}

      </div>

    </nav>
  )
}

export default Navbar