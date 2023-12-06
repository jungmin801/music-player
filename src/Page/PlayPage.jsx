import React, { useState } from "react";
import Card from "../component/Card";
import NowPlaying from "../component/NowPlaying";
import Player from "../component/Player";
import basicImg from "../image/basic.jpg";
import styles from "./css/PlayPage.module.css";
import { useRecoilValue } from "recoil";
import { SongItemsAtom, CurrentSongIndexAtom } from "../atoms/atomList";

function PlayPage() {
  const songs = useRecoilValue(SongItemsAtom);
  const currentSongIndex = useRecoilValue(CurrentSongIndexAtom);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url(${
          songs.length === 0 ? basicImg : songs[currentSongIndex]?.image
        })`,
      }}
    >
      <section>
        <Card />
        <NowPlaying />
      </section>
      <Player
        className="player"
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default PlayPage;
