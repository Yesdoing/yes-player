import React from "react";
import styled from "styled-components";
import GlobalStyles from "components/GlobalStyles";
import Header from "./Header";
import AlbumJacket from "./AlbumJacket";
import Slider from "./Slider";
import ControlBar from "./ControlBar";
import Footer from "./Footer";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 550px;
  background-color: #2f3640;
`;

const ControlContainer = styled.div`
  height: 20vh;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <AlbumJacket />
        <ControlContainer>
          <Slider />
          <ControlBar />
          <Footer />
        </ControlContainer>
      </Container>
    </>
  );
}

export default App;
