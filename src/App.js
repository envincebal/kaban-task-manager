import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import BoardBody from "./components/BoardBody/BoardBody";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Sidebar/>
        <BoardBody/>
      </main>
    </div>
  );
}

export default App;
