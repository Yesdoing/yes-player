import React from "react";
import styled from "styled-components";
import GlobalStyles from 'components/GlobalStyles';
import Header from "./Header";
import AlbumJacket from "./AlbumJacket";
import Slider from "./Slider";
import ControlBar from "./ControlBar";
import Footer from "./Footer";


const Container = styled.div`
  width: 100%;
  height: 980px;
  max-width: 550px;
  background-color: #2F3640; 
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <AlbumJacket />
        <Slider />
        <ControlBar />
        <Footer />
      </Container>
    </>
  );
}

export default App;
