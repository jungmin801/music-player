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
    </div>
  );
}

export default App;
