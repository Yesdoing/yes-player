import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlayArrow, FastForward, FastRewind, Pause } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: 90px;
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
  color: #929498;
  border-radius: 50%;
  &:nth-child(2) {
    border: ${props => (props.play ? `1px solid #FF5252` : "1px solid #929498")};
  }

  &:active {
    color: white;
    border-color: white;
  }
`;

const ControlBar = () => {
  const play = false;
  return (
    <Container>
      <IconContainer>
        <FastRewind fontSize="large" />
      </IconContainer>
      <IconContainer play={play}>
        {
          play ? <Pause fontSize="large" /> : <PlayArrow fontSize="large" />
        }
      </IconContainer>
      <IconContainer>
        <FastForward fontSize="large" />
      </IconContainer>
    </Container>
  );
};

export default ControlBar;
