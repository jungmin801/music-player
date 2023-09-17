import styled from 'styled-components';

const TimelineWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    flex-grow: 1;
`
const TimelineBar =styled.input`
    flex-grow: 1;
    height: 4px;
    transition: all 0.5s;
    border-radius: 10px;
`

function Timeline({ currentTime, totalDuration, formatTime, onChange }) {
    // 타임라인 input range 스타일
    const timelineBackground = {
      background: `linear-gradient(to right, #FF0060 ${
        (currentTime / totalDuration) * 100
      }%, #fff 3%)`,
    };
  
    return (
      <TimelineWrapper className="timeline">
        <p style={{paddingRight: "1.2em"}}>{formatTime(totalDuration - currentTime)}</p>
        <TimelineBar
          type="range"
          className="progress-bg"
          value={currentTime}
          min="0"
          max={totalDuration}
          step={0.1}
          style={timelineBackground}
          onChange={onChange}
        ></TimelineBar>
      </TimelineWrapper>
    );
  }

  export default Timeline;