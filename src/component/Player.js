import { useEffect, useState, useRef } from "react";
import playerCSS from "./css/player.css";
import VolumeModal from "./Modal";

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

function Player({
  songs,
  setSongs,
  currentSongIndex,
  setCurrentSongIndex,
  isPlaying,
  setIsPlaying,
}) {
  const audioEl = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [isShuffle, setIsShuffled] = useState(0);
  const [isVolumeClicked, setIsVolumeClicked] = useState(false);
  const [volume, setVolume] = useState(0.3);

  // isPlaying 상태 변경
  const handlePlay = () => {
    checkDuration();
    if (!isPlaying) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  // 플레이 버튼 클릭 시 재생, 일시정지
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying, currentSongIndex, isShuffle]);

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

  // 랜덤 셔플 후 songs 배열 업데이트
  const shuffleSongs = () => {
    setIsShuffled(isShuffle + 1);
    const shuffledList = shuffleArray(songs);
    setSongs(shuffledList);
    setCurrentSongIndex(0); // 셔플 후 첫 번째 곡으로 설정
  };

  // 리플레이
  const replaySong = () => {
    audioEl.current.pause();
    audioEl.current.currentTime = 0;
    setTimeout(() => {
      audioEl.current.play();
    }, 200);
  };

  // 음원의 총 길이 가져오기
  const checkDuration = () => {
    if (audioEl) {
      audioEl.current.load(); // 새로운 음원을 로드하여 메타데이터를 업데이트합니다.
      audioEl.current.onloadedmetadata = () => {
        setTotalDuration(audioEl.current.duration);
      };
    }
  };
  // 현재 재생중인 시간을 매초마다 업데이트
  const handleTimeUpdate = () => {
    if (audioEl) {
      setCurrentTime(audioEl.current.currentTime);
    }
  };

  // 남은 시간을 분:초로 보여주기
  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min} : ${sec < 10 ? "0" : ""}${sec}`;
  };
  // 볼륨바 보여주기
  const showVolumeBar = () => {
    if (!isVolumeClicked) {
      setIsVolumeClicked(true);
    } else {
      setIsVolumeClicked(false);
    }
  };

  // 볼륨 제어하기
  useEffect(() => {
    if (audioEl) {
      audioEl.current.volume = volume;
    }
  }, [volume]);

  // 타임라인 input range 스타일
  const timelineBackground = {
    background: `linear-gradient(to right, #FF0060 ${
      (currentTime / totalDuration) * 100
    }%, #fff 3%)`,
    // transition: 'background 0.1s ease-in'
  };

  return (
    <footer>
      <audio
        src={process.env.PUBLIC_URL + songs[currentSongIndex].audio}
        ref={audioEl}
        volume={volume}
        onEnded={() => {
          if (currentSongIndex === songs.length - 1) {
            setCurrentSongIndex(0);
          } else {
            setCurrentSongIndex(currentSongIndex + 1);
          }
        }}
        onTimeUpdate={handleTimeUpdate} // 재생시간이 업데이트 될때마다 handleTimeUpdate 함수호출
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
          className={`btn ${isPlaying ? "pause" : "play"}`}
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
        <p>{formatTime(totalDuration - currentTime)}</p>
        <input
          type="range"
          className="progress-bg"
          value={currentTime}
          min="0"
          max={totalDuration}
          step={0.1}
          style={timelineBackground}
          onChange={(e) => {
            if (audioEl) {
              audioEl.current.currentTime = e.target.value;
            }
          }}
        ></input>
      </div>
      <div className="btn-utility-group">
        <button
          type="button"
          className="btn replay"
          aria-label="다시 재생"
          onClick={replaySong}
        ></button>
        <button
          type="button"
          className="btn shuffle"
          aria-label="셔플"
          onClick={shuffleSongs}
        ></button>
        <button
          type="button"
          className="btn volume"
          aria-label="볼륨"
          onClick={showVolumeBar}
        >
          {isVolumeClicked ? (
            <VolumeModal volume={volume} setVolume={setVolume} />
          ) : (
            ""
          )}
        </button>
      </div>
    </footer>
  );
}

export default Player;
