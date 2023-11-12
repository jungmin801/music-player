import React, { useContext } from "react";
import styles from "./css/audioForm.module.css";
import * as S from "./Button";
import { SongsContext } from "../context/context";

export default function AudioForm({ handleAudio }) {
  const { songs } = useContext(SongsContext);
  return (
    <form className={styles.inputBox}>
      <label htmlFor="fileUpload">
        <S.AddSongIcon songs={songs} />
      </label>
      <input
        type="file"
        id="fileUpload"
        accept=".mp3"
        onChange={handleAudio}
        multiple
      />
    </form>
  );
}
