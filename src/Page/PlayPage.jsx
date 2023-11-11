import React, { useState } from "react";
import Card from "../component/Card";
import NowPlaying from "../component/NowPlaying";
import Player from "../component/Player";
import basicImg from "../image/basic.jpg";
import { SongsContext, CSIndexContext } from "../context/context";
function PlayPage() {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <SongsContext.Provider value={{ songs, setSongs }}>
      <CSIndexContext.Provider
        value={{ currentSongIndex, setCurrentSongIndex }}
      >
        <div
          className="bg"
          style={{
            backgroundImage: `url(${
              songs.length === 0 ? basicImg : songs[currentSongIndex]?.image
            })`,
          }}
        >
          <article>
            <Card />
            <NowPlaying />
          </article>
          <Player
            className="player"
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </div>
      </CSIndexContext.Provider>
    </SongsContext.Provider>
  );
}

export default PlayPage;
