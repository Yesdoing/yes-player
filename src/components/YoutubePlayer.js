import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import YTPlayer from "youtube-player";

const Container = styled.div`
  position: fixed;
  width: 150px;
  height: 150px;
  z-index: -100;
`;

const YoutubePlayer = ({ player, setPlayer, changeControlState }) => {
  function onPlayerStateChange(event) {
    changeControlState(event.data);
  }

  useEffect(() => {
    if (!player) {
      setPlayer(
        YTPlayer("youtube-player", {
          width: 150,
          height: 150,
          playerVars: {
            controls: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1
          }
        })
      );
    } else {
      player.on("stateChange", onPlayerStateChange);
    }
  });
  return (
    <Container>
      <div id="youtube-player" />
    </Container>
  );
};

YoutubePlayer.propTypes = {
  player: PropTypes.object,
  setPlayer: PropTypes.func,
  changeControlState: PropTypes.func
};

export default YoutubePlayer;
