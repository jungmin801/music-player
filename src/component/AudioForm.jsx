import React from "react";
import styles from "./css/audioForm.module.css";
import * as S from "./css/Button";

export default function AudioForm({ handleAudio }) {
  return (
    <form className={styles.inputBox}>
      <label htmlFor="fileUpload">
        <S.AddSongIcon />
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
