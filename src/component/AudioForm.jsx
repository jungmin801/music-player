import React from "react";
import styles from "./css/audioForm.module.css";
import addSong from "../icon/Add Song.svg";

export default function AudioForm({ handleAudio }) {
  return (
    <form className={styles.inputBox}>
      <label htmlFor="fileUpload">
        <img src={addSong} />
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
