import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "./reducers/modal/modalSlice";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import BoardBody from "./components/BoardBody/BoardBody";
import NewBoardModal from "./components/NewBoardModal/NewBoardModal";
import NewTaskModal from "./components/NewTaskModal/NewTaskModal";
import NewColumnModal from "./components/NewColumnModal/NewColumnModal";
import EditTaskModal from "./components/EditTaskModal/EditTaskModal";
import EditBoardModal from "./components/EditBoardModal/EditBoardModal";
import DeleteBoardModal from "./components/DeleteBoardModal/DeleteBoardModal";
import DeleteTaskModal from "./components/DeleteTaskModal/DeleteTaskModal";

function App() {

  let {
    newBoardModal,
    newTaskModal,
    newColumnModal,
    editTaskModal,
    editBoardModal,
    deleteBoardModal,
    deleteTaskModal
  } = useSelector(store => store.modal);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {(newBoardModal || newTaskModal || newColumnModal || editTaskModal || editBoardModal || deleteBoardModal || deleteTaskModal) && (
        <div>
          <div onClick={() => dispatch(hideModal())} className="modal-overlay"></div>
          {newBoardModal && <NewBoardModal/>}
          {newTaskModal && <NewTaskModal/>}
          {newColumnModal && <NewColumnModal/>}
          {editTaskModal && <EditTaskModal/>}
          {editBoardModal && <EditBoardModal/>}
          {deleteBoardModal && <DeleteBoardModal/>}
          {deleteTaskModal && <DeleteTaskModal/>}
        </div>
      )
}
      <Navbar/>
      <main>
        <Sidebar/>
        <BoardBody/>
      </main>
    </div>
  );
}

export default App;
