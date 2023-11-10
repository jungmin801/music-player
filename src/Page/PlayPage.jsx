import React from "react";
import Card from "../component/Card";
import NowPlaying from "../component/NowPlaying";
import Player from "../component/Player";
import basicImg from "../image/basic.jpg";

function PlayPage({
  songs,
  setSongs,
  currentSongIndex,
  setCurrentSongIndex,
  isPlaying,
  setIsPlaying,
}) {
  return (
    <>
      <div
        className="bg"
        style={{
          backgroundImage: `url(${
            songs.length === 0 ? basicImg : songs[currentSongIndex]?.image
          })`,
        }}
      >
        <article>
          <Card songs={songs} currentSongIndex={currentSongIndex} />
          <NowPlaying songs={songs} setSongs={setSongs} />
        </article>
        <Player
          className="player"
          songs={songs}
          setSongs={setSongs}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </>
  );
}

export default PlayPage;
