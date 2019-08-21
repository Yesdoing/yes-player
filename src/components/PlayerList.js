import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import PlayItem from "./PlayItem";

const Container = styled.div`
  position: absolute;
  left: 0;
  top: ${props => (props.isPlayer ? "0vh" : "71vh")};
  width: 100%;
  height: 70vh;
  background-color: #ecf0f1;
  transition: top 0.5s ease-in-out;
  color: black;
  font-size: 16px;
  z-index: 15;
`;

const InputContainer = styled.div`
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

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PlayerList = ({ isPlayer, selectedMenu, handleSelector }) => {
  return (
    <Container isPlayer={isPlayer}>
      <InputContainer>
        <Input placeholder={selectedMenu === 'YOUTUBE' ? "Enter URL or Song Name" : "Search Your PLAYLIST"} />
        <SearchIcon />
      </InputContainer>
      <MenuSelector>
        <MenuIcon>
          <TextButton selectedMenu={selectedMenu === "YOUTUBE"} onClick={handleSelector}>
            YOUTUBE
          </TextButton>
        </MenuIcon>
        <MenuIcon>
          <TextButton selectedMenu={selectedMenu === "PLAYLIST"} onClick={handleSelector}>
            PLAYLIST
          </TextButton>
        </MenuIcon>
      </MenuSelector>
      <ListContainer>
        <PlayItem />
        <PlayItem />
        <PlayItem />
      </ListContainer>
    </Container>
  );
};

PlayerList.propTypes = {
  isPlayer: PropTypes.bool.isRequired,
  selectedMenu: PropTypes.string.isRequired,
  handleSelector: PropTypes.func.isRequired
};

export default PlayerList;
