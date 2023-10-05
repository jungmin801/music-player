import styled from 'styled-components';
import styles from './css/timeline.module.css'

function Timeline({ currentTime, totalDuration, formatTime, onChange }) {
    // 타임라인 input range 스타일
    const timelineBackground = {
      background: `linear-gradient(to right, #FF0060 ${
        (currentTime / totalDuration) * 100
      }%, #fff 3%)`,
    };
  
    return (
      <div className={styles.wrapper}>
        <p style={{paddingRight: "1.2em"}}>{formatTime(totalDuration - currentTime)}</p>
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