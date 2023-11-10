import React from "react";
import Card from "../component/Card";
import NowPlaying from "../component/NowPlaying";
import Player from "../component/Player";

function PlayPage({
  songs,
  setSongs,
  currentSongIndex,
  setCurrentSongIndex,
  isPlaying,
  setIsPlaying,
}) {
  return (
    <p>
      <div
        className="bg"
        style={{
          backgroundImage: `url(${songs[currentSongIndex].image})`,
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
    </p>
  );
}

export default PlayPage;
