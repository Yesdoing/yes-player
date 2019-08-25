import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlayArrow, FastForward, FastRewind, Pause, Shuffle, Repeat } from "@material-ui/icons";

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
  
  &:first-child, &:last-child {
    color: #929498;
  }

  

  &:active {
    color: #929498;
    border-color: #929498;
  }
`;

const ControlBar = ({isPlay, handlePlay}) => {
  return (
    <Container>
      <IconContainer>
        <Shuffle />
      </IconContainer>
      <IconContainer>
        <FastRewind />
      </IconContainer>
      <IconContainer play={isPlay} onClick={handlePlay} >
        {
          isPlay ? <Pause fontSize="large" /> : <PlayArrow fontSize="large" />
        }
      </IconContainer>
      <IconContainer>
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
  isPlay: PropTypes.bool.isRequired
}

export default ControlBar;
