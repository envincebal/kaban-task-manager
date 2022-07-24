import React from 'react';
import darkLogo from "../../assets/logo-light.svg";
import mobile from "../../assets/icon-vertical-ellipsis.svg";
import Button from "../Button/Button";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-div">
        <img className="log-img" src={darkLogo} alt="logo"/>
      </div>
      <div className="main-navbar">
        <h2>Platform Launch</h2>
        <div className="add-task-div">
          <Button className={"add-task"} text={"+ Add New Task"}/>
          <img className="menu-btn" src={mobile} alt="menu"/>
        </div>
      </div>

    </nav>
  )
}

export default Navbar