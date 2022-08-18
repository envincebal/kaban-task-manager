import React,{useState} from 'react';
import Button from "../Button/Button";
import { useDispatch } from "react-redux/es/exports";
import {hideModal} from "../../reducers/modal/modalSlice";
import { addColumn } from "../../reducers/board/boardSlice";
import {v4 as uuid} from "uuid";
import "./NewColumnModal.scss";

const NewColumnModal = () => {
  const dispatch = useDispatch();
  const [newColumn, setNewColumn] = useState("");

  const newColumnHandler = e => {
    setNewColumn(e.target.value);
  }
  
  return (
  <div className="new-column-modal">
      <h3 className="column-title">Add New Column</h3>
      <div className="new-column-div">
      <label htmlFor="name">Name</label>
        <input onChange={newColumnHandler} type="text" name="name" className="name" placeholder="e.g. Archived"/>
      </div>
      <Button onClick={() =>{
        dispatch(hideModal());
        dispatch(addColumn({id:uuid(), board: newColumn, tasks: []}));
      }} text={"+ Add New Column"} className={"create-save-changes"}/>
    </div>
  )
}

export default NewColumnModal