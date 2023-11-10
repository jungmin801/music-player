import { useState, useEffect } from "react";
import styles from "./css/nowPlaying.module.css";
import AudioForm from "./AudioForm";
import * as S from "./css/Button";
import { useHandleAudio } from "../hook/useHandleAudio";

function PlayList({ songs, isOpened }) {
  return (
    <ol className={isOpened ? styles.listOpened : styles.hidden}>
      {songs?.map((item, i) => {
        return (
          <li key={i + 1}>
            <span>{`${i + 1}.`}</span>
            <span>{`${item.song} - ${item.artist}`}</span>
          </li>
        );
      })}
    </ol>
  );
}

function NowPlaying({ songs, setSongs }) {
  const handleAudio = useHandleAudio(setSongs);
  const [isOpened, setIsOpened] = useState(true);
  //songs 배열이 변경될 때마다 재렌더링
  useEffect(() => {}, [songs]);

  //재생목록 토글 여닫기

  const handleToggle = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  return (
    <section
      className={`${styles.nowPlayingList} ${isOpened ? styles.active : ""}`}
    >
      <div type="button" className={styles.titleBtn} onClick={handleToggle}>
        <h2>Now Playing</h2>
        <button type="button">
          <S.ToggleIcon />
        </button>
      </div>
      <PlayList songs={songs} isOpened={isOpened} />
      <AudioForm handleAudio={handleAudio} />
    </section>
  );
}

export default NowPlaying;
