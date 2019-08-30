import React, { useState, useCallback, useRef, useEffect } from "react";
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

function App() {
  const [isList, setIsList] = useState(false);
  const [controlState, setControlState] = useState(CONTROLBAR_STATE.LOADING);
  const [selectedMenu, setMenu] = useState("YOUTUBE");
  const [loading, resolved, error, setSearchTerm] = useMusicList("");
  const [player, setPlayer] = useState(null);
  const [storageData, addList, removeList] = useLocalStorage();
  const [inputValue, setInputValue] = useState("");
  const [currentMusic, setCurrentMusic] = useState(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isEndSong, setEndSong] = useState(false);
  const currentMusicIndex = useRef(0);
  const clearIntervalId = useRef(0);


  const handlePlay = () => {
    player.playVideo();
  };

  const handlePause = () => {
    player.pauseVideo();
  };


  function handleNextSong() {
    if(!currentMusic) return;
    player.stopVideo();
    clearInterval(clearIntervalId.current); 
    currentMusicIndex.current = currentMusicIndex.current + 1 >= storageData.length ? 0 : currentMusicIndex.current + 1;
    setCurrentMusic(storageData[currentMusicIndex.current]);
    player.loadVideoById(storageData[currentMusicIndex.current].id, 0, "small");
  }


  function handlePrevSong() {
    if(!currentMusic) return;
    player.stopVideo();
    clearInterval(clearIntervalId.current);
    currentMusicIndex.current = currentMusicIndex.current - 1 < 0 ? storageData.length - 1 : currentMusicIndex.current - 1;
    setCurrentMusic(storageData[currentMusicIndex.current]);
    player.loadVideoById(storageData[currentMusicIndex.current].id, 0, "small");
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
      selectedMenu !== "YOUTUBE" && setMenu("YOUTUBE");
    }
  };

  function handleSliderOnChange(percentage) {
    const seconds = Math.round(duration * (percentage / 100));
    setCurrentTime(seconds);
    player.seekTo(seconds);
  }

  const changeControlState = useCallback(playerStatus => {
    const getCurrentTime = () => {
      player.getCurrentTime().then(res => setCurrentTime(Math.round(res)));
    }
  

    switch (playerStatus) {
      case PLAYER_STATE.UNSTARTED:
        setControlState(CONTROLBAR_STATE.LOADING);
        break;
      case PLAYER_STATE.ENDED:
        clearInterval(clearIntervalId.current); 
        setControlState(CONTROLBAR_STATE.LOADING);
        setEndSong(true);
        break;
      case PLAYER_STATE.PLAYING:
        setControlState(CONTROLBAR_STATE.PLAYING);
        player.getDuration().then(res => setDuration(Math.round(res)));
        clearIntervalId.current = setInterval(getCurrentTime, 1000);
        break;
      case PLAYER_STATE.PAUSED:
        setControlState(CONTROLBAR_STATE.PAUSED);
        clearInterval(clearIntervalId.current);
        break;
      case PLAYER_STATE.BUFFERING:
        setControlState(CONTROLBAR_STATE.LOADING);
        clearInterval(clearIntervalId.current);
        break;
      case PLAYER_STATE.VIDEO_CUED:
        setControlState(CONTROLBAR_STATE.NOT_STARTED);
        break;
      default:
        return;
    }
  }, [player]);

  const setCurrentVidoe = (e, id) => {
    if (selectedMenu === "YOUTUBE") {
      addMusicList(e, id);
      player.cueVideoById(id, 0, "small");
      setCurrentMusic(resolved.filter(item => item.id === id)[0]);
      currentMusicIndex.current = storageData.length;
    } else {
      player.cueVideoById(id, 0, "small");
      const data = storageData.filter(item => item.id === id)[0];
      setCurrentMusic(data);
      currentMusicIndex.current = storageData.findIndex(item => item.id === id);
    }
  };

  useEffect( () => {
    const handleEndSong = () => {
      if(!currentMusic) return;
      currentMusicIndex.current = currentMusicIndex.current + 1 >= storageData.length ? 0 : currentMusicIndex.current + 1;
      setCurrentMusic(storageData[currentMusicIndex.current]);
      player.loadVideoById(storageData[currentMusicIndex.current].id, 0, "small");
    }
  

    if(!isEndSong) return;
    handleEndSong();
    setEndSong(false);
  }, [isEndSong, currentMusic, player, storageData]);

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
          <Slider 
            currentValue={currentTime / duration * 100}
            duration={duration}
            onChange={handleSliderOnChange}
          />
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
