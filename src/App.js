<<<<<<< HEAD
import Info from "./component/Info";
import NowPlaying from "./component/NowPlaying";
import Player from "./component/Player";
import AppCSS from "./App.css"
import nowPlayingCSS from "./component/nowPlaying.css"


function App() {
  return (
    <div className="App">
      <article>
        <Info/>
        <NowPlaying/>
      </article>
      <Player className="player"/>
=======
import Card from "./component/Card";
import NowPlaying from "./component/NowPlaying";
import Player from "./component/Player";
import AppCSS from "./App.css"
import { useState } from "react";
import objData from "./objData.json"

function App() {
  const [songs, setSongs] = useState(objData) 
  const [currentSong, setCurrentSong] = useState(objData[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <article>
        <Card currentSong={currentSong}/>
        <NowPlaying/>
      </article>
      <Player className="player" 
              songs={songs} 
              setSongs={setSongs} 
              isPlaying={isPlaying} 
              setIsPlaying={setIsPlaying}/>
>>>>>>> master
    </div>
  );
}

export default App;
