import React from "react";
import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextColumn = styled.div`
  &:first-child {
    margin-bottom: 5px;
  }
`;

const ImageSkeleton = styled.div`
  width: 40px;
  height: 40px;
  background-color: #bdc3c7;
  border-radius: 5px;
  animation: ${glow} 1.5s ease-in-out infinite;
`;

const TextTitleSkeleton = styled.div`
  width: 250px;
  height: 15px;
  background-color: #bdc3c7;
  border-radius: 5px;
  animation: ${glow} 1.5s ease-in-out infinite;
`;

const TextDescriptionSkeleton = styled.div`
  width: 200px;
  height: 15px;
  background-color: #bdc3c7;
  border-radius: 5px;
  animation: ${glow} 1.5s ease-in-out infinite;
`;

const IconSkeleton = styled.div`
  width: 20px;
  height: 20px;
  background-color: #bdc3c7;
  border-radius: 5px;
  animation: ${glow} 1.5s ease-in-out infinite;
`;

const Loader = () => {
  return (
    <Container>
      <IconContainer>
        <ImageSkeleton />
      </IconContainer>
      <TextContainer>
        <TextColumn>
          <TextTitleSkeleton />
        </TextColumn>
        <TextColumn>
          <TextDescriptionSkeleton />
        </TextColumn>
      </TextContainer>
      <IconContainer>
        <IconSkeleton />
      </IconContainer>
    </Container>
  );
};

export default Loader;
