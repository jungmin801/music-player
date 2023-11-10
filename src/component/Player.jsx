import { useEffect, useState, useRef } from "react";
import styles from "./css/player.module.css";
import VolumeModal from "./Volume";
import Audio from "./Audio.jsx";
import Timeline from "./Timeline.jsx";
import * as S from "./css/Button";

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

  // 음원의 총 길이 가져오기
  useEffect(() => {
    if (audioEl) {
      audioEl.current.load(); // 새로운 음원을 로드하여 메타데이터를 업데이트합니다.
      audioEl.current.onloadedmetadata = () => {
        setTotalDuration(audioEl.current.duration);
      };
    }
  }, [currentSongIndex]);

  // isPlaying 상태 변경
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
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

  // 랜덤하게 셔플하는 함수
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
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
    }, 500);
  };

  // 현재 재생중인 시간을 매초마다 업데이트
  const handleTimeUpdate = () => {
    if (audioEl) {
      setCurrentTime(audioEl.current.currentTime);
    }
  };

  // 볼륨 조절 바 클릭 여부 제어
  const showVolumeBar = () => {
    setIsVolumeClicked(!isVolumeClicked);
  };

  // 볼륨 제어하기
  useEffect(() => {
    if (audioEl) {
      audioEl.current.volume = volume;
    }
  }, [volume]);

  return (
    <footer>
      <Audio
        audioEl={audioEl}
        songIndex={songs[currentSongIndex]}
        volume={volume}
        onTimeUpdate={handleTimeUpdate} // 재생시간이 업데이트 될때마다 handleTimeUpdate 함수호출
        onEnded={() => {
          if (currentSongIndex === songs.length - 1) {
            setCurrentSongIndex(0);
          } else {
            setCurrentSongIndex(currentSongIndex + 1);
          }
        }}
      />
      <div className={styles.btnPlayGroup}>
        <button type="button" onClick={playPrevSong}>
          <S.BackwardIcon />
        </button>
        <button
          type="button"
          className={`${isPlaying ? "pause" : "play"}`}
          onClick={handlePlay}
        >
          <S.PlayIcon />
        </button>
        <button type="button" onClick={playNextSong}>
          <S.ForwardIcon />
        </button>
      </div>
      <Timeline
        currentTime={currentTime}
        totalDuration={totalDuration}
        onChange={(e) => {
          if (audioEl) {
            audioEl.current.currentTime = e.target.value;
          }
        }}
      />
      <div className={styles.btnUtilityGroup}>
        <button type="button" onClick={replaySong}>
          <S.ReplayIcon />
        </button>

        <button type="button" onClick={shuffleSongs}>
          <S.ShuffleIcon />
        </button>

        <button type="button" onClick={showVolumeBar}>
          <S.VolumeIcon />
        </button>

        {isVolumeClicked && (
          <VolumeModal volume={volume} setVolume={setVolume} />
        )}
      </div>
    </footer>
  );
}

export default Player;
