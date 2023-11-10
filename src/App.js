import InitialPage from "./Page/InitialPage";
import PlayPage from "./Page/PlayPage";
import "./reset.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      {songs.length === 0 ? (
        <InitialPage songs={songs} setSongs={setSongs} />
      ) : (
        <PlayPage
          songs={songs}
          setSongs={setSongs}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}
    </div>
  );
}

export default App;
