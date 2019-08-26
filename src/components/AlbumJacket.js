import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  left: ${props => props.isList ? "-100vw" : "0"};
  transition: left 0.5s ease-in-out;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  margin-bottom: 40px;
`;

const JacketImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.currentMusic ? props.currentMusic.thumbnails : "https://i1.sndcdn.com/artworks-000579908738-4b0so0-t500x500.jpg"});
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  border: 15px solid black;
  box-shadow: 0px 0px 21px 3px rgba(0,0,0,0.50);
`;

const TitleContainer = styled.div``;

const Title = styled.span`
  display: block;
  font-size: 24px;
  color: #e74c3c;
  text-align: center;
  margin-bottom: 10px;
`;

const Artist = styled.span`
  display: block;
  font-size: 12px;
  color: #bdc3c7;
  text-align: center;
`;

const AlbumJacket = ({ isList, currentMusic }) => {
  return (
    <Container isList={isList}>
      <ImageContainer>
        <JacketImage currentMusic={currentMusic} />
      </ImageContainer>
      <TitleContainer>
        <Title>{currentMusic ? currentMusic.title : "Select Music"}</Title>
        <Artist>{currentMusic ? currentMusic.channelTitle : ""}</Artist>
      </TitleContainer>
    </Container>
  )
}

AlbumJacket.propTypes = {
  isList: PropTypes.bool.isRequired,
  currentMusic: PropTypes.objectOf(PropTypes.any)
}

export default AlbumJacket;