import styled from 'styled-components';
import backwardImg from '../icon/backward.png';
import forwardImg from '../icon/forward.png';
import playImg from '../icon/play.png';
import pauseImg from '../icon/pause.png';
import restartImg from '../icon/restart.png';
import shuffleImg from '../icon/shuffle.png';
import speakerImg from '../icon/speaker.png';


// Define a base button component
const BaseButton = styled.button`
  width: 38px;
  height: 38px;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
`;

// Extend the base button component for specific button types
const BackwardButton = styled(BaseButton)`
  height: 28px;
  background-image: url(${backwardImg});
`;

const ForwardButton = styled(BaseButton)`
  height: 28px;
  background-image: url(${forwardImg});
`;

const PlayButton = styled(BaseButton)`
  background-image: url(${playImg});
`;

const PauseButton = styled(BaseButton)`
  background-image: url(${pauseImg});
`;

const ReplayButton = styled(BaseButton)`
  background-image: url(${restartImg});
`;

const ShuffleButton = styled(BaseButton)`
  background-image: url(${shuffleImg});
`;

const VolumeButton = styled(BaseButton)`
  background-image: url(${speakerImg});
  position: relative;
`;

function Button({ label, className, onClick }) {

  let ButtonComponent = BaseButton; // Default to the base button
  if (className === 'backward') {
    ButtonComponent = BackwardButton;
  } else if (className === 'forward') {
    ButtonComponent = ForwardButton;
  } else if (className === 'play') {
    ButtonComponent = PlayButton;
  } else if (className === 'pause') {
    ButtonComponent = PauseButton;
  } else if (className === 'replay') {
    ButtonComponent = ReplayButton;
  } else if (className === 'shuffle') {
    ButtonComponent = ShuffleButton;
  } else if (className === 'volume') {
    ButtonComponent = VolumeButton;
  }

    return (
      <ButtonComponent
        type="button"
        className={`btn ${className}`}
        aria-label={label}
        onClick={onClick}
      ></ButtonComponent>
    );
  }
  
  export default Button