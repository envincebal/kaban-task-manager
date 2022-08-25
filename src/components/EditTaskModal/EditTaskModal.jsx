import React, { useState} from 'react';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { hideModal } from "../../reducers/modal/modalSlice";
import { editTask, moveTask } from "../../reducers/board/boardSlice";
import Button from "../Button/Button";
import {v4 as uuid} from "uuid";
import "./EditTaskModal.scss"

const EditTaskModal = () => {
  const dispatch = useDispatch();
  const {activeTask, activeBoard, activeColumn} = useSelector(store => store.board);
  const [title, setTitle] = useState(activeTask.title);
  const [description , setDescription] = useState(activeTask.description);
  const [subTasks, setSubTasks] = useState([...activeTask.subTasks]);
  const [removedSubTask, setRemovedSubTask] = useState(0);
  const [status, setStatus] = useState(activeColumn.id);
  const [statusToggle, setStatusToggle] = useState(false);
  const [option, setOption] = useState(activeColumn.board);

  const titleHandler = e => {
    setTitle(e.target.value);
  }
  const descriptionHandler = e => {
    setDescription(e.target.value);
  }

  const subTasksChangeHandler = (i, e) => {
    const { name, value } = e.target;
    setSubTasks(tasks => tasks.map((el, index) => index === i
      ? {
        ...el,
        [name]: value,
      }
      : el
    ));
  }
  
  const addSubTask = () => {
    setSubTasks([...subTasks, {id: uuid(), task: "", checked: false}])
  }

  const deleteSubTask = (i,id) => {
    let filteredSubTasks = [...subTasks];
    let getSubTaskByID = subTasks.find(el => el.id === id);

    if(getSubTaskByID.checked){
      setRemovedSubTask(removedSubTask + 1);
    }

    filteredSubTasks.splice(i, 1);

    setSubTasks(filteredSubTasks);

  }

  return (
    <div className="edit-task-modal">
      <h3 className="edit-task-title">Edit Task</h3>
      <div className="edit-task-title-div">
        <label htmlFor="edit-task-title">Title</label>
        <input
          onChange={titleHandler}
          type="text"
          name="edit-task-title"
          value={title}
          className="edit-task-title"
          placeholder="e.g. Web Design"/>
      </div>
      <div className="edit-description-div">
        <label htmlFor="edit-description">Description</label>
        <textarea
          onChange={descriptionHandler}
          className="edit-description"
          name="edit-description"
          value={description}
          rows="5"
          placeholder="e.g. It's always good to take a break. This 15 minute break will
recharge the batteries a little."></textarea>
      </div>
      <div className="edit-subtasks-div">
        <label htmlFor="edit-subtasks">Subtasks</label>
        {
          subTasks.map((item, index) => (
            <div className="edit-subtasks-item-div" key={index} >
              <input
              onChange={(e) => subTasksChangeHandler(index, e)}
                className="edit-subtasks-input"
                type="text"
                value={item.task}
                name="task"
                placeholder="e.g. Web Design"/>
              <svg onClick={() => {
                deleteSubTask(index, item.id)}} width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                <g fill="#828FA3" fillRule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g>
              </svg>
            </div>
          ))
        }
      </div>
      <Button onClick={() => addSubTask()} text={"+ Add New Subtask"} className={"add-column-subtask"}/>
      <div className="edit-status-div">

        <button onClick={() => setStatusToggle(!statusToggle)} className="edit-status"><span>{option}</span> <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path stroke="#635FC7" strokeWidth="2" fill="none" d="m1 1 4 4 4-4"/></svg></button>
          {
            statusToggle &&(
              <ul className="edit-status-list">
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

      <Button onClick={() => {
        dispatch(editTask({
          title,
          description,
          subTasks,
          removedChecked: removedSubTask
        }))
        dispatch(moveTask(status))
        dispatch(hideModal());
      }} text={"Save Changes"} className={"create-save-changes"}/>
    </div>
  )
}

export default EditTaskModal