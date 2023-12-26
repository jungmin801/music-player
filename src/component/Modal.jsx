import React, { useEffect, useRef } from "react";
import styles from "./css/modal.module.css";
import { storage, db } from "../service/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { SongItemsAtom } from "../atoms/atomList";
import basicImg from "../image/basic.jpg";

export const InputModal = ({ setShowInputModal }) => {
  const songs = useRecoilValue(SongItemsAtom);
  const inputRef = useRef(null);
  let playListTitle = "";

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSaveList = async (event) => {
    event.preventDefault();
    playListTitle = inputRef.current.value;
    setShowInputModal(false);
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
        <h3>저장할 재생 목록의 이름을 입력해주세요.</h3>
        <input type="text" ref={inputRef} />
        <div>
          <button
            className={styles.confirmButton}
            type="button"
            onClick={() => {
              setShowInputModal(false);
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

export const ListModal = ({ loadList, setShowListModal }) => {
  const setSongs = useSetRecoilState(SongItemsAtom);

  const handleLoadMusic = async (event) => {
    const listName = event.target.innerText;
    const playlistDocRef = doc(db, "playlists", listName);
    try {
      const docSnapshot = await getDoc(playlistDocRef);
      const result = docSnapshot.data().playList;

      for (let data of result) {
        const response = await fetch(data.url);
        const blob = await response.blob();
        window.jsmediatags.read(blob, {
          onSuccess: function (tag) {
            let albumCover = tag.tags.picture;

            if (albumCover) {
              const albumCoverBlob = new Blob(
                [new Uint8Array(albumCover.data)],
                { type: albumCover.format }
              );
              albumCover = URL.createObjectURL(albumCoverBlob);
            } else {
              albumCover = basicImg;
            }
            data.image = albumCover;
            data.audio = URL.createObjectURL(blob);

            setSongs((prev) => [...prev, data]);
            setShowListModal(false);
          },
          onError: function (error) {
            alert(JSON.stringify(error));
          },
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    <div className={styles.modalBg}>
      <div className={styles.modalContainer}>
        <h3>재생할 목록을 선택하세요.</h3>
        <ul>
          {loadList?.map((title, index) => (
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
