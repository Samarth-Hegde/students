import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./Components/Student";
import Home from "./Components/Student";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student/:id" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
