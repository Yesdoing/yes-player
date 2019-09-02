import React from "react";
import styled, { keyframes, css } from "styled-components";
import PropTypes from "prop-types";
import {
  PlaylistAdd,
  ArrowRight,
  RemoveCircleOutline,
  WatchLaterOutlined
} from "@material-ui/icons";
import { timeFormat } from "../utils/utils";

const activeEffect = keyframes`
  0%,
  100% {
    background-color: black;
    border-radius: 50%;
    opacity: 0.4;
  }
  50% {
    background-color: black;
    border-radius: 50%;
    opacity: 0.8;
  }
`;


const animation = props => props.isEvent && css`${activeEffect} 2s ease-in-out`;


const Container = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  &:nth-child(1) {
    margin-right: 0;
  }
  &:active {
    animation: ${animation};
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
  margin-left: 15px;
`;

const TextColumn = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  &:first-child {
    margin-bottom: 5px;
  }
`;

const Text = styled.span`
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:nth-child(1) {
    margin-right: 5px;
  }
`;

const ImageContainer = styled.div`
  width: 50px;
  height: 40px;
`;


const Thumnail = styled.div`
  width: 50px;
  height: 40px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center center;
`;

function AddComma(num) {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.replace(regexp, ",");
}


const PlayItem = ({
  id,
  title,
  viewCount,
  duration,
  addMusicList,
  removeMusicList,
  imgUrl,
  isYoutube,
  setCurrentVidoe,
  itemIndex
}) => {
  return (
    <Container onClick={(e) => setCurrentVidoe(e, id)}>
      <ImageContainer>
        <Thumnail img={imgUrl} />
      </ImageContainer>
      <TextContainer>
        <TextColumn>
          <Text>{title}</Text>
        </TextColumn>
        <TextColumn>
          <IconContainer>
            <ArrowRight fontSize="small" />
          </IconContainer>
          <Text>{AddComma(viewCount)}</Text>
          <IconContainer>
            <WatchLaterOutlined fontSize="small" />
          </IconContainer>
          <Text>{timeFormat(duration)}</Text>
        </TextColumn>
      </TextContainer>
      <IconContainer onClick={(e) => isYoutube ? addMusicList(e, id) : removeMusicList(e, itemIndex) } isEvent>
        {isYoutube ? (
          <PlaylistAdd fontSize="small" />
        ) : (
          <RemoveCircleOutline fontSize="small" />
        )}
      </IconContainer>
    </Container>
  );
};

PlayItem.propTypes = {
  title: PropTypes.string.isRequired,
  viewCount: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  addMusicList: PropTypes.func,
  removeMusicList: PropTypes.func,
  imgUrl: PropTypes.string.isRequired,
  isYoutube: PropTypes.bool.isRequired,
  setCurrentVidoe: PropTypes.func,
  itemIndex: PropTypes.number.isRequired
};

export default PlayItem;
