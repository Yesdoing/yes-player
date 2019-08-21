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
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid gray;
  margin-bottom: 8px;
`;

const IconContainer = styled.div``;

const AddIcon = styled(Add)`
  font-size: 40px !important;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextColumn = styled.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 5px;
  }
`;

const Text = styled.span`
  &:nth-child(2) {
    margin-right: 8px;
  }
  &:nth-child(3) {
    margin-right: 4px;
  }
`;

const PlayItem = () => {
  return (
    <Container>
      <IconContainer>
        <AddIcon />
      </IconContainer>
      <TextContainer>
        <TextColumn>
          <Text>Numb (Official Video) - Linkin Park</Text>
        </TextColumn>
        <TextColumn>
          <Text>
            <ArrowRight fontSize="small" />
          </Text>
          <Text>
            1,214,949,007
          </Text>
          <Text>
            <WatchLaterOutlined fontSize="small" />
          </Text>
          <Text>3:07</Text>
        </TextColumn>
      </TextContainer>
      <IconContainer>
        <PlaylistAdd fontSize="small" />
      </IconContainer>
    </Container>
  );
};

export default PlayItem;
