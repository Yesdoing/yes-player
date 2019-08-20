import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  padding: 8px;
  display: flex;
  height: 5vh;
  justify-content: space-between;
  align-items: flex-end;
`;


const TextButton = styled.div`
  display: flex;
  &:first-child {
    justify-content: flex-start;
  }
  &:last-child {
    justify-content: flex-end;
  }
  align-items: center;
  width: 100px;
  height: 25px;
  font-size: 12px;
  color: ${props => props.clicked ? "#FF5252" : "#929498"};
`;

const Footer = () => {
  return (
    <Container>
      <TextButton clicked >Repeated Album</TextButton>
      <TextButton>Shuffle</TextButton>
    </Container>
  )
}

export default Footer;