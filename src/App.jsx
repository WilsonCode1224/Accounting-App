import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Note from "./Components/Note";
import Log from "./Components/Log";
import { CalculatorContext } from "./context/ForContext";

function App() {
  const [result, setResult] = useState(0); // 顯示面板
  return (
    <div className="app">
      <CalculatorContext.Provider value={{ result, setResult }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/note" element={<Note />} />
          <Route path="/log" element={<Log />} />
        </Routes>
      </CalculatorContext.Provider>
    </div>
  );
}

export default App;
