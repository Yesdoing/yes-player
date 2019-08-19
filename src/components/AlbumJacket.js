import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  margin-bottom: 40px;
  box-shadow: 0px 0px 21px 3px rgba(0,0,0,0.75);
`;

const JacketImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://i1.sndcdn.com/artworks-000579908738-4b0so0-t500x500.jpg");
  background-size: cover;
  background-position: center center;
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

const AlbumJacket = () => {

  return (
    <Container>
      <ImageContainer>
        <JacketImage />
      </ImageContainer>
      <TitleContainer>
        <Title>In These Shadows</Title>
        <Artist>Fycth feat. Carmen Forbes</Artist>
      </TitleContainer>
    </Container>
  )
}

export default AlbumJacket;