import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import YTPlayer from "youtube-player";

const Container = styled.div`
  position: fixed;
  width: 150px;
  height: 150px;
  z-index: -100;
  top: 0;
  left: 0;
`;

const YoutubePlayer = ({ player, setPlayer, changeControlState }) => {
  

  const ref = useRef();

  useEffect(() => {
    function onPlayerStateChange(event) {
      changeControlState(event.data);
    }
    
    if (!player) {
      setPlayer(
        YTPlayer(ref.current, {
          width: 150,
          height: 150,
          playerVars: {
            controls: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            playsinline: 1
          }
        })
      );
    } else {
      player.on("stateChange", onPlayerStateChange);
    }
  }, [player, setPlayer, changeControlState]);

  return (
    <Container>
      <div ref={ref} />
    </Container>
  );
};

YoutubePlayer.propTypes = {
  player: PropTypes.object,
  setPlayer: PropTypes.func,
  changeControlState: PropTypes.func
};

export default YoutubePlayer;
