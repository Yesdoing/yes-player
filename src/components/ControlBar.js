import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  PlayArrow,
  FastForward,
  FastRewind,
  Pause,
  Shuffle,
  Repeat
} from "@material-ui/icons";
import { Spin } from "antd";
import { CONTROLBAR_STATE } from "../constant";

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  color: white;

  &:first-child,
  &:last-child {
    color: #929498;
  }

  &:active {
    color: #929498;
    border-color: #929498;
  }
`;

const ControlBar = ({
  handlePlay,
  handlePause,
  controlState,
  handleNextSong,
  handlePrevSong
}) => {
  return (
    <Container>
      <IconContainer>
        <Shuffle />
      </IconContainer>
      <IconContainer onClick={handlePrevSong}>
        <FastRewind />
      </IconContainer>
      {!controlState ? (
        <Spin />
      ) : (
        <IconContainer
          onClick={() => {
            if (
              controlState === CONTROLBAR_STATE.NOT_STARTED ||
              controlState === CONTROLBAR_STATE.PAUSED
            ) {
              handlePlay();
            } else if (controlState === CONTROLBAR_STATE.PLAYING) {
              handlePause();
            }
          }}
        >
          {controlState === CONTROLBAR_STATE.NOT_STARTED ||
          controlState === CONTROLBAR_STATE.PAUSED ? (
            <PlayArrow fontSize="large" />
          ) : (
            <Pause fontSize="large" />
          )}
        </IconContainer>
      )}
      <IconContainer onClick={handleNextSong}>
        <FastForward />
      </IconContainer>
      <IconContainer>
        <Repeat />
      </IconContainer>
    </Container>
  );
};

ControlBar.propTypes = {
  handlePlay: PropTypes.func,
  handlePause: PropTypes.func,
  controlState: PropTypes.number.isRequired,
  handleNextSong: PropTypes.func,
  handlePrevSong: PropTypes.func
};

export default ControlBar;
