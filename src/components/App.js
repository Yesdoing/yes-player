import React from "react";
import styled from "styled-components";
import GlobalStyles from 'components/GlobalStyles';
import Header from "./Header";
import AlbumJacket from "./AlbumJacket";
import Slider from "./Slider";
import 'antd/dist/antd.css';

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
      </Container>
    </>
  );
}

export default App;
