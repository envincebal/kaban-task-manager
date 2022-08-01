import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import BoardBody from "./components/BoardBody/BoardBody";
import NewBoardModal from "./components/NewBoardModal/NewBoardModal";
import NewTaskModal from "./components/NewTaskModal/NewTaskModal";
import NewColumnModal from "./components/NewColumnModal/NewColumnModal";
import EditTaskModal from "./components/EditTaskModal/EditTaskModal";
import EditBoardModal from "./components/EditBoardModal/EditBoardModal";
import {useState} from "react";

function App() {
  const [overlay,
    setOverlay] = useState(true);
  return (
    <div className="App">
      {overlay && (
        <div>
          <div onClick={() => setOverlay(false)} className="modal-overlay"></div>
          <EditBoardModal />
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
