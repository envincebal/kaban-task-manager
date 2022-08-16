import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {newBoard} from "../../reducers/modal/modalSlice";
import { setActiveBoard } from "../../reducers/board/boardSlice";
import SideBarBoard from "../SideBarBoard/SideBarBoard";
import "./Sidebar.scss"

const Sidebar = () => {
  const {boards} = useSelector(store => store.board);
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <h5 className="sidebar-boards-counter">{`ALL BOARDS (${ boards.length})`}</h5>
      <ul className="sidebar-board-list">
        {boards && (boards.map(item => {
          return <SideBarBoard onClick={() =>   dispatch(setActiveBoard(item.id))} id={item.id} name={item.name} key={item.id}/>
        }))
}
      </ul>

      <button onClick={() => dispatch(newBoard())} className="create-board-btn">
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path
          d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
          fill="currentColor"/></svg>
        + Create New Board</button>
    </div>
  )
}

export default Sidebar