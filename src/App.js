import PlayPage from "./Page/PlayPage";
import Login from "./Page/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/player" element={<PlayPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
