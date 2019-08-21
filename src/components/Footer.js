import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaylistAdd, PlaylistPlay } from "@material-ui/icons";

const Container = styled.footer`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
`;

const ItemIcon = styled.li`
  width: 45px;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  font-size: 18px;
`;

const ItemTitle = styled.li`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = ({handlePlayer}) => {
  return (
    <Container>
      <List>
        <ItemTitle>
          <Text>YesPlayer</Text>
        </ItemTitle>
        <ItemIcon onClick={handlePlayer}>
          <PlaylistAdd fontSize="large" />
        </ItemIcon>
      </List>
    </Container>
  );
};

Footer.propTypes = {
  handlePlayer: PropTypes.func
}

export default Footer;
