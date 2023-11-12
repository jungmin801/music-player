import { useEffect, useContext } from "react";
import styles from "./css/nowPlaying.module.css";
import * as S from "./css/Button";
import { SongsContext, CSIndexContext } from "../context/context";

function Marker() {
  return <div className={styles.marker}></div>;
}

function PlayList() {
  const { songs } = useContext(SongsContext);
  const { currentSongIndex } = useContext(CSIndexContext);
  return songs.length === 0 ? (
    <p className={styles.initialInfo}>Playlist is now empty.</p>
  ) : (
    <ol>
      {songs?.map((item, i) => {
        return (
          <li key={item.id}>
            {currentSongIndex === i ? (
              <Marker />
            ) : (
              <span className={styles.number}>{`${i + 1}.`}</span>
            )}
            <p>{`${item.song} - ${item.artist}`}</p>
          </li>
        );
      })}
    </ol>
  );
}

function NowPlaying() {
  const { songs } = useContext(SongsContext);

  //songs 배열이 변경될 때마다 재렌더링
  useEffect(() => {}, [songs]);

  return (
    <section className={styles.nowPlayingList}>
      <div type="button" className={styles.titleBox}>
        <h2>Now Playing</h2>
        <button type="button" className={styles.toggleBtn}>
          <S.ToggleIcon />
        </button>
      </div>
      <PlayList songs={songs} />
    </section>
  );
}

export default NowPlaying;
