import { useEffect, useState } from "react";
import styles from "./css/nowPlaying.module.css";
import * as S from "./Button";
import { useRecoilValue } from "recoil";
import { SongItemsAtom, CurrentSongIndexAtom } from "../atoms/atomList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../service/firebase";

function Marker() {
  return <div className={styles.marker}></div>;
}

function PlayList({ showList }) {
  const songs = useRecoilValue(SongItemsAtom);
  const currentSongIndex = useRecoilValue(CurrentSongIndexAtom);

  return songs.length > 0 ? (
    <ol className={showList ? styles.showList : styles.hideList}>
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
  ) : (
    <p
      className={`${styles.initialInfo} ${
        showList ? styles.showList : styles.hideList
      }`}
    >
      Playlist is now empty.
    </p>
  );
}

function NowPlaying({ setShowModal, setLoadList }) {
  const songs = useRecoilValue(SongItemsAtom);
  const [showList, setShowList] = useState(true);

  //songs 배열이 변경될 때마다 재렌더링
  useEffect(() => {}, [songs]);

  const handleList = () => {
    setShowList(!showList);
  };

  const handleLoadList = async () => {
    setLoadList(null);
    const querySnapshot = await getDocs(collection(db, "playlists"));
    const result = querySnapshot.docs.map((doc) => doc.id);
    setLoadList(result);
  };

  return (
    <>
      <div className={styles.nowPlayingList}>
        <div className={styles.titleBox}>
          <h2>Now Playing</h2>
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={handleList}
          >
            <S.ToggleIcon />
          </button>
        </div>
        <PlayList songs={songs} showList={showList} />
        <button
          type="button"
          className={styles.saveList}
          onClick={handleLoadList}
        >
          불러오기
        </button>
        <button
          type="button"
          className={styles.saveList}
          onClick={() => setShowModal(true)}
        >
          저장하기
        </button>
      </div>
    </>
  );
}

export default NowPlaying;
