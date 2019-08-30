import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import PlayItem from "./PlayItem";
import Loader from "./Loader";

const Container = styled.div`
  position: fixed;
  left: ${props => (props.isList ? "0" : "100vw")};
  top: 0;
  width: 100%;
  height: 70vh;
  background-color: #2f3640;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: left 0.5s ease-in-out;
  color: #ecf0f1;
  font-size: 16px;
  z-index: 15;
`;

const InputContainer = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  border: 1px solid gray;
  padding-left: 10px;
  color: gray;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 16px;
  }
`;

const SearchIcon = styled(Search)`
  color: gray;
  position: absolute;
  right: 11px;
  top: 11px;
`;

const TextButton = styled.span`
  display: block;
  width: 100%;
  height: 20px;
  border-bottom: ${props => (props.selectedMenu ? "2px solid gray" : "none")};
`;

const MenuSelector = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-items: center;
  padding: 8px;
`;

const MenuIcon = styled.li`
  width: 100%;
  text-align: center;
  &:first-child {
    margin-right: 2px;
  }
`;

const EmptyData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ListContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  overflow: scroll;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 30px;
`;

const PlayerList = ({
  isList,
  selectedMenu,
  handleSelector,
  loading,
  data,
  error,
  addMusicList,
  removeMusicList,
  inputValue,
  onChange,
  onSubmit,
  setCurrentVidoe
}) => {
  const LoadingContainer = () => (
    <ListContainer>
      <Loader />
      <Loader />
      <Loader />
      <Loader />
      <Loader />
      <Loader />
    </ListContainer>
  );

  const dataList = useMemo(() => {
    return (
      data &&
      data.length > 0 &&
      data.map((item, index) => (
        <PlayItem
          key={index}
          id={item.id}
          title={item.title}
          viewCount={item.viewCount}
          duration={item.duration}
          addMusicList={addMusicList}
          removeMusicList={removeMusicList}
          isYoutube={selectedMenu === "YOUTUBE"}
          imgUrl={item.thumbnails}
          setCurrentVidoe={setCurrentVidoe}
          itemIndex={index}
        />
      ))
    );
  }, [data, addMusicList, removeMusicList, selectedMenu, setCurrentVidoe]);

  return (
    <Container isList={isList}>
      <InputContainer onSubmit={onSubmit}>
        <Input
          placeholder={"Enter URL or Song Name"}
          value={inputValue}
          onChange={onChange}
        />
        <SearchIcon />
      </InputContainer>
      <MenuSelector>
        <MenuIcon>
          <TextButton
            selectedMenu={selectedMenu === "YOUTUBE"}
            onClick={handleSelector}
          >
            YOUTUBE
          </TextButton>
        </MenuIcon>
        <MenuIcon>
          <TextButton
            selectedMenu={selectedMenu === "PLAYLIST"}
            onClick={handleSelector}
          >
            PLAYLIST
          </TextButton>
        </MenuIcon>
      </MenuSelector>
      <ListContainer>
        {loading && <LoadingContainer />}
        {!loading && data && data.length > 0 && dataList}
        {!loading && data && data.length === 0 && (
          <EmptyData>
            {selectedMenu === "YOUTUBE"
              ? "검색된 음악이 없습니다."
              : "저장된 음악이 없습니다."}
          </EmptyData>
        )}
      </ListContainer>
    </Container>
  );
};

PlayerList.propTypes = {
  isList: PropTypes.bool.isRequired,
  selectedMenu: PropTypes.string.isRequired,
  handleSelector: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array,
  error: PropTypes.string,
  addMusicList: PropTypes.func,
  removeMusicList: PropTypes.func,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  setCurrentVidoe: PropTypes.func
};

export default PlayerList;
