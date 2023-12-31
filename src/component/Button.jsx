import React from "react";
import styled, { keyframes, css } from "styled-components";
import { ReactComponent as Backward } from "../image/icon/Backward.svg";
import { ReactComponent as Forward } from "../image/icon/Forward.svg";
import { ReactComponent as Play } from "../image/icon/Play.svg";
import { ReactComponent as Pause } from "../image/icon/Pause.svg";
import { ReactComponent as Restart } from "../image/icon/Restart.svg";
import { ReactComponent as Shuffle } from "../image/icon/Shuffle.svg";
import { ReactComponent as Speaker } from "../image/icon/Speaker.svg";
import { ReactComponent as AddSong } from "../image/icon/AddSong.svg";
import { ReactComponent as Toggle } from "../image/icon/Toggle.svg";
import { ReactComponent as Mute } from "../image/icon/Mute.svg";

export const BackwardIcon = styled(Backward)`
  height: 25px;
  cursor: pointer;

  &:hover {
    path {
      fill: var(--pink);
    }
  }

  @media screen and (max-width: 767px) {
    height: 20px;
  }
`;

export const ForwardIcon = styled(Forward)`
  height: 25px;
  cursor: pointer;
  &:hover {
    path {
      fill: var(--pink);
    }
  }
  @media screen and (max-width: 767px) {
    height: 20px;
  }
`;

export const PlayIcon = styled(Play)`
  cursor: pointer;
  &:hover {
    path {
      fill: var(--pink);
    }
    circle {
      stroke: var(--pink);
    }
  }

  @media screen and (max-width: 767px) {
    height: 40px;
  }

  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const PauseIcon = styled(Pause)`
  &:hover {
    rect {
      fill: var(--pink);
      stroke: var(--pink);
    }
    circle {
      stroke: var(--pink);
    }
  }
  @media screen and (max-width: 767px) {
    height: 40px;
  }

  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const ToggleIcon = styled(Toggle)`
  width: 34px;
  height: 34px;
  padding: 0;
  &:hover {
    path {
      fill: var(--pink);
    }
  }

  @media screen and (max-width: 767px) {
    width: 24px;
    height: 24px;
  }

  @media screen and (max-width: 480px) {
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
  }
`;

export const ReplayIcon = styled(Restart)`
  width: 25px;
  height: 25px;
  &:hover {
    path {
      fill: var(--pink);
    }
  }
  @media screen and (max-width: 767px) {
    height: 20px;
  }
`;

export const ShuffleIcon = styled(Shuffle)`
  width: 25px;
  height: 25px;
  &:hover {
    path {
      fill: var(--pink);
    }
  }
  @media screen and (max-width: 767px) {
    height: 20px;
  }
`;

export const VolumeIcon = styled(Speaker)`
  width: 25px;
  height: 25px;
  position: relative;
  &:hover {
    path {
      fill: var(--pink);
    }
  }
  @media screen and (max-width: 767px) {
    height: 20px;
  }
`;

export const MuteIcon = styled(Mute)`
  width: 32px;
  height: 32px;
  position: relative;
  &:hover {
    path {
      fill: var(--pink);
    }
  }
  @media screen and (max-width: 767px) {
    height: 20px;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
`;

export const AddSongIcon = styled(AddSong)`
  width: 36px;
  height: 34px;

  ${(props) =>
    props.songs.length === 0 &&
    css`
      animation: ${pulse} 1.8s infinite;
    `}

  &:hover {
    path {
      fill: var(--pink);
    }
    rect {
      fill: var(--pink);
      stroke: var(--pink);
    }
  }

  @media screen and (max-width: 767px) {
    width: 30px;
    height: 28px;
  }
`;
