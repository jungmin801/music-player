import React, { useState } from "react";
import Card from "../component/Card";
import NowPlaying from "../component/NowPlaying";
import Player from "../component/Player";
import basicImg from "../image/basic.jpg";
import styles from "./css/PlayPage.module.css";
import { InputModal, ListModal } from "../component/Modal";
import { useRecoilValue } from "recoil";
import { SongItemsAtom, CurrentSongIndexAtom } from "../atoms/atomList";

function PlayPage() {
  const songs = useRecoilValue(SongItemsAtom);
  const currentSongIndex = useRecoilValue(CurrentSongIndexAtom);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInputModal, setShowInputModal] = useState(false);
  const [showListModal, setShowListModal] = useState(false);
  const [loadList, setLoadList] = useState(null);

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
        <section className={styles.section}>
          <Card />
          <NowPlaying
            setShowInputModal={setShowInputModal}
            setShowListModal={setShowListModal}
            setLoadList={setLoadList}
          />
        </section>
        <Player
          className="player"
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
      {showInputModal ? (
        <InputModal setShowInputModal={setShowInputModal} />
      ) : null}
      {showListModal ? (
        <ListModal loadList={loadList} setShowListModal={setShowListModal} />
      ) : null}
    </>
  );
}

export default PlayPage;
