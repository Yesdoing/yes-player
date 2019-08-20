import React from "react";
import styled from "styled-components";
import GlobalStyles from "components/GlobalStyles";
import Header from "./Header";
import AlbumJacket from "./AlbumJacket";
import Slider from "./Slider";
import ControlBar from "./ControlBar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2f3640;
`;


const ControlContainer = styled.div`
  height: 30vh;
`;

function App() { 
  return (
    <>
      <GlobalStyles />
      <Container>
        <AlbumJacket />
        <ControlContainer>
          <Slider />
          <ControlBar />
          <Header />
        </ControlContainer>
      </Container>
    </>
  );
}

export default App;
