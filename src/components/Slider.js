import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Slider as AntSlider } from "antd";
import { getCurrentTime } from "../utils/utils";

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
    background-color: #ff5252 !important;
  }

  .ant-slider-rail {
    background-color: #929498;
  }

  .ant-slider-handle {
    background-color: #ff5252;
    border: solid 2px #ff5252;
  }
`;

const Slider = ({ currentValue, onChange, duration }) => {
  function onAfterChange(value) {
    console.log("onAfterChange: ", value);
  }

  const currentTime = Math.ceil(duration * (currentValue / 100));

  return (
    <Container>
      <Time>{getCurrentTime(currentTime)}</Time>
      <CustomSlider
        value={typeof currentValue === "number" ? currentValue : 0}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
      <Time>{getCurrentTime(duration)}</Time>
    </Container>
  );
};

Slider.propTypes = {
  currentValue: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  duration: PropTypes.number.isRequired
};

export default Slider;
