import React from 'react';
import TaskItem from "../TaskItem/TaskItem";
import {  useSelector } from "react-redux/es/exports";
import "./TaskColumn.scss";

const TaskColumn = ({name, id}) => {

  const {activeBoard} = useSelector(store => store.board);
  const columnsByID = activeBoard.columns.find(el => el.id ===  id);
  return (
    <div className="board-column">
      <h3>
        <span className="board-color"></span>{name} ({columnsByID.tasks.length})</h3>
      <ul className="task-list">
      {columnsByID.tasks.map((item, index) => (
        <TaskItem
          columnID={id}
          taskID={item.id}
          key={index}
          title={item.title}
          taskCount={item.taskCount}
          tasksLength={item.subTasks.length}
        />
      ))}
      </ul>
    </div>
  )
}

export default TaskColumn