function Timeline({ currentTime, totalDuration, formatTime, onChange }) {
    // 타임라인 input range 스타일
    const timelineBackground = {
      background: `linear-gradient(to right, #FF0060 ${
        (currentTime / totalDuration) * 100
      }%, #fff 3%)`,
    };
  
    return (
      <div className="timeline">
        <p>{formatTime(totalDuration - currentTime)}</p>
        <input
          type="range"
          className="progress-bg"
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