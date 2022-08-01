import React from 'react';
import Button from "../Button/Button";
import "./NewColumnModal.scss";

const NewColumnModal = () => {
  return (
    <div className="new-column-modal">
      <h3 className="column-title">Add New Column</h3>
      <div className="new-column-div">
      <label htmlFor="name">Name</label>
        <input type="text" name="name" className="name" placeholder="e.g. Archived"/>
      </div>
      <Button text={"+ Add New Column"} className={"create-save-changes"}/>
    </div>
  )
}

export default NewColumnModal