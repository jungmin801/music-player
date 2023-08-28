import { useEffect, useState, useRef } from "react";
import playerCSS from "./css/player.css";

// 랜덤하게 셔플하는 함수
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    console.log(i, j);
  }
  return shuffledArray;
}

function Player({songs, setSongs, currentSongIndex, setCurrentSongIndex, isPlaying, setIsPlaying}) {
  const audioEl = useRef(null);

  //플레이 버튼 클릭 시 isPlaying 상태 변경
  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  // 이전 곡으로 변경
  const playPrevSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    } else {
      setCurrentSongIndex(songs.length - 1);
    }
  };

  // 다음 곡으로 변경
  const playNextSong = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    } else {
      setCurrentSongIndex(0);
    }
  };

  // 플레이 버튼 클릭 시 재생, 일시정지
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying, currentSongIndex]);

  // 랜덤 셔플 후 songs 배열 업데이트
  const shuffleSongs = () => {
    const shuffledList = shuffleArray(songs);
    setSongs(shuffledList);
    setCurrentSongIndex(0); // 셔플 후 첫 번째 곡으로 설정
};
  return (
    <footer>
      <audio
        src={process.env.PUBLIC_URL + songs[currentSongIndex].audio}
        ref={audioEl}
      ></audio>
      <div className="btn-play-group">
        <button
          type="button"
          className="btn backward"
          aria-label="이전 곡"
          onClick={playPrevSong}
        ></button>
        <button
          type="button"
          className="btn play"
          aria-label="재생"
          onClick={handlePlay}
        ></button>
        <button
          type="button"
          className="btn forward"
          aria-label="다음 곡"
          onClick={playNextSong}
        ></button>
      </div>
      <div className="timeline">
        <p>3:30</p>
        <div className="progress-bg"></div>
      </div>
      <div className="btn-utility-group">
        <button
          type="button"
          className="btn replay"
          aria-label="다시 재생"
        ></button>
        <button
          type="button"
          className="btn shuffle"
          aria-label="셔플"
          onClick={shuffleSongs}
        ></button>
        <button type="button" className="btn volume" aria-label="볼륨"></button>
      </div>
    </footer>
  );
}

export default Player;
