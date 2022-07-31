import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import BoardBody from "./components/BoardBody/BoardBody";
import NewBoardModal from "./components/NewBoardModal/NewBoardModal";
import {useState} from "react";

function App() {
  const [overlay,
    setOverlay] = useState(true);
  return (
    <div className="App">
      {overlay && (
        <div>
          <div onClick={() => setOverlay(false)} className="modal-overlay"></div>
          <NewBoardModal/>
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
