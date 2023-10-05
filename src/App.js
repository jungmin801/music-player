import Card from "./component/Card";
import NowPlaying from "./component/NowPlaying";
import Player from "./component/Player";
import "./reset.css"
import "./App.css"
import { useState } from "react";
import objData from "./objData.json"

function App() {
  const [songs, setSongs] = useState(objData) 
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <div className="bg" style={ {backgroundImage : `url(${process.env.PUBLIC_URL + songs[currentSongIndex].image})`} }>
        <article>
          <Card 
            songs={songs}
            currentSongIndex={currentSongIndex}/>
          <NowPlaying
            songs={songs}
          />
        </article>
        <Player className="player" 
                songs={songs}
                setSongs={setSongs}
                currentSongIndex={currentSongIndex} 
                setCurrentSongIndex={setCurrentSongIndex} 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying}
        />
      </div>          
    </div>
  );
}

export default App;
