import React, { useState } from "react";
import styles from "./css/volume.module.css";
import * as S from "./css/Button";

function Volume({ volume, setVolume }) {
  const [isMuted, SetIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(volume);
  const volumeBackground = {
    background: `linear-gradient(to right, #FF0060 ${volume * 100}%, #fff ${
      volume * 100
    }%)`,
  };

  // 볼륨 뮤트하기
  const handleMute = () => {
    if (volume !== 0) {
      setPrevVolume(volume);
      setVolume(0);
    } else {
      setVolume(prevVolume);
    }
    SetIsMuted(!isMuted);
  };

  console.log(isMuted);

  return (
    <div className={styles.volumeContainer}>
      <button type="button" onClick={handleMute}>
        {isMuted ? <S.MuteIcon /> : <S.VolumeIcon />}
      </button>
      <input
        type="range"
        className={styles.volumeSlider}
        min="0"
        max="100"
        value={volume * 100}
        onChange={(e) => setVolume(e.target.value / 100)}
        style={volumeBackground}
      />
    </div>
  );
}

export default Volume;
