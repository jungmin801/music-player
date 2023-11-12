import React, { useState } from "react";
import Card from "../component/Card";
import NowPlaying from "../component/NowPlaying";
import Player from "../component/Player";
import basicImg from "../image/basic.jpg";
import styles from "./css/PlayPage.module.css";
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
          <section className={styles.section}>
            <Card />
            <NowPlaying />
          </section>
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
