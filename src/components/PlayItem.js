import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Add,
  PlaylistAdd,
  ArrowRight,
  WatchLaterOutlined
} from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
  margin-bottom: 8px;
`;

const IconContainer = styled.div`
  margin-right: 5px;
  &:nth-child(1) {
  margin-right: 0;
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

const Thumnail = styled.div`
  width: 50px;
  height: 40px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center center;
`;

function AddComma(num)
{
var regexp = /\B(?=(\d{3})+(?!\d))/g;
return num.replace(regexp, ',');
}

function timeFormat(str) {
  const arr = str.slice(2).replace("S", "").split("M");
  return arr.map(item => {
    if(item.length === 1) return "0" + item;
    else if(item.length === 0) return "00"
    else return item;
  }).join(":");
}


const PlayItem = ({id, title, viewCount, duration, AddList, imgUrl }) => {
  return (
    <Container>
      <IconContainer>
        <Thumnail img={imgUrl} />
      </IconContainer>
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
      <IconContainer onClick={() => AddList(id)}>
        <PlaylistAdd fontSize="small" />
      </IconContainer>
    </Container>
  );
};

PlayItem.propTypes = {
  title: PropTypes.string.isRequired,
  viewCount: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  AddList: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default PlayItem;
