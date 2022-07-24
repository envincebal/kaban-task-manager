import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import BoardBody from "./components/BoardBody/BoardBody";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="main-body">
      <Sidebar />
      <BoardBody />
      </main>

    </div>
  );
}

export default App;
