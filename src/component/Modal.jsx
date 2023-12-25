import React, { useEffect, useRef } from "react";
import styles from "./css/modal.module.css";
import { storage, db } from "../service/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { SongItemsAtom } from "../atoms/atomList";

export const InputModal = ({ setShowModal }) => {
  const songs = useRecoilValue(SongItemsAtom);
  const inputRef = useRef(null);
  let playListTitle = "";

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSaveList = async (event) => {
    event.preventDefault();
    playListTitle = inputRef.current.value;
    setShowModal(false);
    try {
      const playlistCollectionRef = doc(db, "playlists", playListTitle);
      const playList = [];

      for (let song of songs) {
        const storageRef = ref(storage, "uploads/" + song.file.name);
        const storageURL = await uploadBytes(storageRef, song.file).then(() => {
          return getDownloadURL(storageRef);
        });

        const songData = {
          id: song.id,
          artist: song.artist,
          song: song.song,
          image: song.image,
          url: storageURL,
        };
        playList.push(songData);
      }

      await setDoc(playlistCollectionRef, { playList });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.modalBg}>
      <form
        className={styles.modalContainer}
        onSubmit={(event) => handleSaveList(event)}
      >
        <p>저장할 재생 목록의 이름을 입력해주세요.</p>
        <input type="text" ref={inputRef} />
        <div>
          <button
            className={styles.confirmButton}
            type="button"
            onClick={() => {
              setShowModal(false);
            }}
          >
            취소
          </button>
          <button className={styles.confirmButton}>확인</button>
        </div>
      </form>
    </div>
  );
};

export const ListModal = ({ loadList }) => {
  const setSongs = useSetRecoilState(SongItemsAtom);

  const handleLoadMusic = async (event) => {
    const listName = event.target.innerText;
    const playlistDocRef = doc(db, "playlists", listName);
    try {
      const docSnapshot = await getDoc(playlistDocRef);
      const result = docSnapshot.data();
      setSongs(result.playList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.modalBg}>
      <div className={styles.modalContainer}>
        <h3>재생할 목록을 선택하세요.</h3>
        <ul>
          {loadList.map((title, index) => (
            <li key={index} onDoubleClick={(event) => handleLoadMusic(event)}>
              <button type="button" className={styles.listButton}>
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
