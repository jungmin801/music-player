import styled from "styled-components";
import styles from "./css/timeline.module.css";

function Timeline({ currentTime, totalDuration, onChange }) {
  // 남은 시간을 분:초로 보여주기
  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min} : ${sec < 10 ? "0" : ""}${sec}`;
  };

  // 타임라인 input range 스타일
  const timelineBackground = {
    background: `linear-gradient(to right, #FF0060 ${
      (currentTime / totalDuration) * 100
    }%, #fff 3%)`,
  };

  return (
    <div className={styles.container}>
      <p style={{ paddingRight: "1.2em" }}>
        {formatTime(totalDuration - currentTime)}
      </p>
      <input
        type="range"
        className={styles.timeline}
        value={currentTime}
        min="0"
        max={totalDuration}
        step={0.1}
        style={timelineBackground}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default Timeline;
