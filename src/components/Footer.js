import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: space-between;
`;

const FooterContainer = styled.div`
`;

const TextButton = styled.div`
  font-size: 14px;
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