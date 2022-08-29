import React, {useState} from 'react';
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../../reducers/modal/modalSlice";
import { addTask } from "../../reducers/board/boardSlice";
import {v4 as uuid} from "uuid";
import "./NewTaskModal.scss";

const NewTaskModal = () => {
  const dispatch = useDispatch();
  const {activeBoard} = useSelector(store => store.board);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subTasks, setSubTasks] = useState([{id:uuid(), task: "", checked: false }
  , {id:uuid(), task: "", checked: false}]);
  const [status, setStatus] = useState(activeBoard.columns[0].id);
  const [statusToggle, setStatusToggle] = useState(false);
  const [option, setOption] = useState(activeBoard.columns[0].board);
  const [emptyInputs, setEmptyInputs] = useState(false);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  }

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value)
  }

  const subTasksChangeHandler = (i, e) => {
    let subTasksValues = [...subTasks];
    subTasksValues[i][e.target.name] = e.target.value;
    setSubTasks(subTasksValues);
   let empty = subTasksValues.find(el => el.task === "");

   if(empty){
    setEmptyInputs(false);
   }else{
    setEmptyInputs(true);
   }

  }

  const addSubTask = () => {
    setSubTasks([...subTasks, {id:uuid() ,task: "", checked: false}])
  }

  const deleteSubTask = (i) => {
    let filteredSubTasks = [...subTasks];
    filteredSubTasks.splice(i, 1);
    setSubTasks(filteredSubTasks);
  }

  return (
    <div className="new-task-wrapper">
      {console.log(emptyInputs)}
      <div className="new-task-modal">
      <h3 className="new-task-title">Add New Task</h3>
      <div className="task-title-div">
        <label>Title</label>
        <input
          onChange={titleChangeHandler}
          type="text"
          maxLength={60}
          name="title"
          value={title}
          className={`${!title && "error-border"} title`}
          placeholder="e.g. Web Design"/>
      {!title && <div className="title-error">Can't be empty</div>}
      </div>
      <div className="description-div">
        <label>Description</label>
        <textarea
          onChange={descriptionChangeHandler}
          className="description"
          value={description}
          name="description"
          rows="5"
          placeholder="e.g. It's always good to take a break. This 15 minute break will
recharge the batteries a little."></textarea>
      </div>
      <div className="subtasks-div">
        <label>Subtasks</label>
        {subTasks.map((item, index) => (
           <div className="subtasks-item-div" key={index}>
            <input
              onChange={(e) =>  subTasksChangeHandler(index, e)}
              className={`${!item.task && "error-border"} subtasks-input`}
              type="text"
              name="task"
              maxLength={30}
              value={item.task}
              placeholder="e.g. Take Coffee Break"/>
            <svg onClick={() => deleteSubTask(index)} width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <g fill="#828FA3" fillRule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g>
            </svg>
            {!item.task && <div className="subtask-error">Can't be empty</div>}  
          </div>
        ))}
      </div>
      <Button
        onClick={() => addSubTask()}
        text={"+ Add New Subtask"}
        className={"add-column-subtask"}/>
      <div className="status-div">
        <label>Status</label>
        <button onClick={() => setStatusToggle(!statusToggle)} className="status"><span>{option}</span> <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path stroke="#635FC7" strokeWidth="2" fill="none" d="m1 1 4 4 4-4"/></svg></button>
          {
            statusToggle &&(
              <ul className="status-list">
             {
            activeBoard.columns.map((item, index) => (
              <li onClick={() =>{ 
                setOption(item.board)
                setStatus(item.id)
                setStatusToggle(!statusToggle);
              }} key={index} className="status-option" value={item.id}>{item.board}</li>
            ))
          }
          </ul>
            )
          }
      </div>
      <Button
        onClick={() => {
          if(emptyInputs && title){
          dispatch(addTask({
            id: uuid(),
            title,
            description,
            status,
            subTasks,
            count: 0
          }))
          dispatch(hideModal())}
          }
       }
        text={"Create Task"}
        className={"create-save-changes"}/>
    </div>
    </div>
    
  )
}

export default NewTaskModal