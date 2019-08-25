import React, { useState, useCallback } from "react";
import styled from "styled-components";
import GlobalStyles from "components/GlobalStyles";
import Footer from "./Footer";
import AlbumJacket from "./AlbumJacket";
import Slider from "./Slider";
import ControlBar from "./ControlBar";
import PlayerList from "./PlayerList";
import YoutubePlayer from 'components/YoutubePlayer';
import useMusicList from "../utils/useMusicList";
import useLocalStorage from "../utils/useLocalStorage";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2f3640;
`;

const ControlContainer = styled.div`
  position: relative;
  height: 30vh;
  z-index: 30;
  background-color: #2f3640;
`;

function App() {
  const [isList, setIsList] = useState(true);
  const [isPlay, setIsPlay] = useState(false);
  const [selectedMenu, setMenu] = useState("YOUTUBE");
  const [loading, resolved, error] = useMusicList("twice");
  const [player, setPlayer] = useState(null);
  const [storageData, addList, removeList] = useLocalStorage();
  const [inputValue, setInputValue] = useState('');

  function handlePlay() {
    const bool = !isPlay;
    setIsPlay(bool);
    if(bool) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  }

  function handleNextSong() {
    player.stopVideo();
  }

  function handlePrevSong() {
    player.stopVideo();
  }


  function handleList() {
    setIsList(!isList);
  }

  function handleSelector(e) {
    setMenu(e.target.innerHTML);
  }

  const addMusicList = (id) => {
    const data = resolved.filter(item => item.id === id);
    addList(data[0]);
  }

  const onChange = useCallback(e => {
    setInputValue(e.target.value);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <AlbumJacket />
        <YoutubePlayer player={player} setPlayer={setPlayer}/>
        <PlayerList
          isList={isList}
          selectedMenu={selectedMenu}
          handleSelector={handleSelector}
          addMusicList={addMusicList}
          removeMusicList={removeList}
          loading={loading}
          error={error}
          data={selectedMenu === "YOUTUBE" ? resolved : storageData}
          inputValue={inputValue}
          onChange={onChange}
        />
        <ControlContainer>
          <Slider />
          <ControlBar handlePlay={handlePlay} isPlay={isPlay} />
          <Footer handleList={handleList} />
        </ControlContainer>
      </Container>
    </>
  );
}

export default App;
