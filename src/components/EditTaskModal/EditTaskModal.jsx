import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { hideModal } from "../../reducers/modal/modalSlice";
import { editTask } from "../../reducers/board/boardSlice";
import Button from "../Button/Button";
import "./EditTaskModal.scss"

const EditTaskModal = () => {
  const dispatch = useDispatch();
  const {activeTask} = useSelector(store => store.board);

  const [title, setTitle] = useState(activeTask.title);
  const [description , setDescription] = useState(activeTask.description);
  const [subTasks, setSubTasks] = useState([...activeTask.subTasks]);
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
    setSubTasks([...subTasks, {task: ""}])
  }

  const deleteSubTask = (i) => {
    let filteredSubTasks = [...subTasks];
    filteredSubTasks.splice(i, 1);
    setSubTasks(filteredSubTasks);
  }
  return (
    <div className="edit-task-modal">
      {console.log(subTasks)}
      <h3 className="edit-task-title">Edit New Task</h3>
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
          placeholder="e.g. It’s always good to take a break. This 15 minute break will
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
              <svg onClick={() => deleteSubTask(index)} width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                <g fill="#828FA3" fillRule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g>
              </svg>
            </div> 
          ))
        }
      </div>
      <Button onClick={() => addSubTask()} text={"+ Add New Subtask"} className={"add-column-subtask"}/>
      <div className="edit-status-div">
        <label htmlFor="edit-status">Status</label>
        <select name="edit-status" className="edit-status">
          <option className="edit-status-option" value="Todo">Todo</option>
          <option className="edit-status-option" value="saab">Saab</option>
        </select>
      </div>

      <Button onClick={() => {
        dispatch(editTask({
          title,
          description,
          subTasks
        }))
        dispatch(hideModal());
      }} text={"Save Changes"} className={"create-save-changes"}/>
    </div>
  )
}

export default EditTaskModal