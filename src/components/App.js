import React, { useState, useCallback } from "react";
import styled from "styled-components";
import GlobalStyles from "components/GlobalStyles";
import Footer from "./Footer";
import AlbumJacket from "./AlbumJacket";
import Slider from "./Slider";
import ControlBar from "./ControlBar";
import PlayerList from "./PlayerList";
import YoutubePlayer from "components/YoutubePlayer";
import useMusicList from "../utils/useMusicList";
import useLocalStorage from "../utils/useLocalStorage";
import { CONTROLBAR_STATE, PLAYER_STATE } from "../constant";

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

let index = 0;
let id = 0;

function App() {
  const [isList, setIsList] = useState(true);
  const [controlState, setControlState] = useState(CONTROLBAR_STATE.LOADING);
  const [selectedMenu, setMenu] = useState("YOUTUBE");
  const [loading, resolved, error, setSearchTerm] = useMusicList("");
  const [player, setPlayer] = useState(null);
  const [storageData, addList, removeList] = useLocalStorage();
  const [inputValue, setInputValue] = useState("");
  const [currentMusic, setCurrentMusic] = useState(null);
  

  const handlePlay = () => {
    player.playVideo();
  };

  const handlePause = () => {
    player.pauseVideo();
  };

  function handleNextSong() {
    if(!currentMusic) return;
    
    player.stopVideo()
    index = index + 1 >= storageData.length ? 0 : index + 1;
    setCurrentMusic(storageData[index]);
    player.cueVideoById(storageData[index].id, 0, "small");
  }

  function handlePrevSong() {
    if(!currentMusic) return;

    player.stopVideo();
    index = index - 1 < 0 ? storageData.length - 1 : index - 1;
    setCurrentMusic(storageData[index]);
    player.cueVideoById(storageData[index].id, 0, "small");
  }

  function handleList() {
    setIsList(!isList);
  }

  function handleSelector(e) {
    setMenu(e.target.innerHTML);
  }

  const addMusicList = (e, id) => {
    e.stopPropagation();
    const data = resolved.filter(item => item.id === id);
    addList(data[0]);
  };

  const onChange = useCallback(e => {
    setInputValue(e.target.value);
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    if (inputValue !== "") {
      setSearchTerm(inputValue);
    }
  };

  const changeControlState = playerStatus => {
    switch (playerStatus) {
      case PLAYER_STATE.UNSTARTED:
        setControlState(CONTROLBAR_STATE.LOADING);
        break;
      case PLAYER_STATE.ENDED:
        setControlState(CONTROLBAR_STATE.LOADING);
        break;
      case PLAYER_STATE.PLAYING:
        setControlState(CONTROLBAR_STATE.PLAYING);
        break;
      case PLAYER_STATE.PAUSED:
        setControlState(CONTROLBAR_STATE.PAUSED);
        break;
      case PLAYER_STATE.BUFFERING:
        setControlState(CONTROLBAR_STATE.LOADING);
        break;
      case PLAYER_STATE.VIDEO_CUED:
        setControlState(CONTROLBAR_STATE.NOT_STARTED);
        break;
      default:
        return;
    }
  };

  const setCurrentVidoe = (e, id) => {
    if (selectedMenu === "YOUTUBE") {
      addMusicList(e, id);
      player.cueVideoById(id, 0, "small");
      setCurrentMusic(resolved.filter(item => item.id === id)[0]);
      index = storageData.length;
    } else {
      player.cueVideoById(id, 0, "small");
      const data = storageData.filter(item => item.id === id)[0];
      setCurrentMusic(data);
      index = storageData.findIndex(item => item.id === id);
    }
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <AlbumJacket isList={isList} currentMusic={currentMusic} />
        <YoutubePlayer player={player} setPlayer={setPlayer} changeControlState={changeControlState}/>
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
          onSubmit={onSubmit}
          setCurrentVidoe={setCurrentVidoe}
        />
        <ControlContainer>
          <Slider />
          <ControlBar
            handlePlay={handlePlay}
            handlePause={handlePause}
            controlState={controlState}
            handleNextSong={handleNextSong}
            handlePrevSong={handlePrevSong}
          />
          <Footer handleList={handleList} />
        </ControlContainer>
      </Container>
    </>
  );
}

export default App;
