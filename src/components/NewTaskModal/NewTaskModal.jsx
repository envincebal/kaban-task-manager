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
  const [status, setStatus] = useState(activeBoard.columns[0].id);
  const [subTasks, setSubTasks] = useState([{task: "", checked: false }
  , {task: "", checked: false}]);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  }
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value)
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  const subTasksChangeHandler = (i, e) => {
    let subTasksValues = [...subTasks];
    subTasksValues[i][e.target.name] = e.target.value;
    setSubTasks(subTasksValues);
  }

  const addSubTask = () => {
    setSubTasks([...subTasks, {task: "", checked: false}])
  }

  const deleteSubTask = (i) => {
    let filteredSubTasks = [...subTasks];
    filteredSubTasks.splice(i, 1);
    setSubTasks(filteredSubTasks);
  }

  return (
    <div className="new-task-modal">
      <h3 className="new-task-title">Add New Task</h3>
      <div className="task-title-div">
        <label>Title</label>
        <input
          onChange={titleChangeHandler}
          type="text"
          name="title"
          value={title}
          className="title"
          placeholder="e.g. Web Design"/>
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
              className="subtasks-input"
              type="text"
              name="task"
              value={item.task || ""}
              placeholder="e.g. Take Coffee Break"/>
            <svg onClick={() => deleteSubTask(index)} width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <g fill="#828FA3" fillRule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g>
            </svg>
          </div>
        ))}
      </div>
      <Button
        onClick={() => addSubTask()}
        text={"+ Add New Subtask"}
        className={"add-column-subtask"}/>
      <div className="status-div">
        <label>Status</label>
        <select className="status" onChange={statusHandler}>
          {
            activeBoard.columns.map((item, index) => (
              <option key={index} className="status-option" value={item.id}>{item.board}</option>
            ))
          }
        </select>
      </div>
      <Button
        onClick={() => {
          dispatch(addTask({
            id: uuid(),
            title,
            description,
            status,
            subTasks
          }))
          dispatch(hideModal())}}
        text={"Create Task"}
        className={"create-save-changes"}/>
    </div>
  )
}

export default NewTaskModal