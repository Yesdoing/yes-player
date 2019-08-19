import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Slider as AntSlider } from 'antd';


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Time = styled.span``;

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
      <AntSlider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
      <Time>5:29</Time>
    </Container>
  )
}

export default Slider;