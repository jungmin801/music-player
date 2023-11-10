import React from "react";
import styled from "styled-components";
import { ReactComponent as Backward } from "../../image/icon/Backward.svg";
import { ReactComponent as Forward } from "../../image/icon/Forward.svg";
import { ReactComponent as Play } from "../../image/icon/Play.svg";
import { ReactComponent as Pause } from "../../image/icon/Pause.svg";
import { ReactComponent as Restart } from "../../image/icon/Restart.svg";
import { ReactComponent as Shuffle } from "../../image/icon/Shuffle.svg";
import { ReactComponent as Speaker } from "../../image/icon/Speaker.svg";
import { ReactComponent as AddSong } from "../../image/icon/AddSong.svg";
import { ReactComponent as Toggle } from "../../image/icon/Toggle.svg";

export const BackwardIcon = styled(Backward)`
  height: 28px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 40px;
    height: 36px;
  }
`;

export const ForwardIcon = styled(Forward)`
  height: 28px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 40px;
    height: 36px;
  }
`;

export const PlayIcon = styled(Play)`
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 60px;
    height: 60px;
    flex-grow: 1;
  }
`;

export const PauseIcon = styled(Pause)`
  @media screen and (max-width: 480px) {
    width: 60px;
    height: 60px;
    flex-grow: 1;
  }
`;

export const ToggleIcon = styled(Toggle)`
  width: 34px;
  height: 34px;
  margin-right: 10px;
  padding: 0;

  @media screen and (max-width: 480px) {
    display: inline-block;
    position: relative;
  }
`;

export const ReplayIcon = styled(Restart)`
  height: 30px;
`;

export const ShuffleIcon = styled(Shuffle)`
  height: 30px;
`;

export const VolumeIcon = styled(Speaker)`
  height: 30px;
  position: relative;
`;

export const AddSongIcon = styled(AddSong)`
  width: 38px;
  height: 38px;
`;
