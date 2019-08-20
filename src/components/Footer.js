import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  height: 135px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const FooterContainer = styled.div`
`;

const TextButton = styled.div`
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