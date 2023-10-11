import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Note from "./Components/Note";
import Log from "./Components/Log";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note" element={<Note />} />
        <Route path="/log" element={<Log />} />
      </Routes>
    </div>
  );
}

export default App;
