import PlayPage from "./Page/PlayPage";
import Login from "./Page/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/music-player"
          element={<Navigate to="/login" replace />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/player" element={<PlayPage />} />
      </Routes>
    </div>
  );
}

export default App;
