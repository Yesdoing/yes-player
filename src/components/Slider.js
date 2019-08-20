import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Slider as AntSlider } from 'antd';

const Container = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Time = styled.span`
  font-size: 12px;
  color: #bdc3c7;
`;

const CustomSlider = styled(AntSlider)`
  width: 70%;
  margin: 0 10px;
  .ant-slider-track {
      background-color: #FF5252 !important;
    }
  
    .ant-slider-rail {
      background-color: #929498;
    }

  .ant-slider-handle {
    background-color: #FF5252;
    border: solid 2px #FF5252; 
  }
`;

const Slider = () => {

  function onChange(value) {
    console.log('onChange: ', value);
  }
  
  function onAfterChange(value) {
    console.log('onAfterChange: ', value);
  }
  

  return (
    <Container>
      <Time>0:00</Time>
      <CustomSlider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
      <Time>5:29</Time>
    </Container>
  )
}

export default Slider;