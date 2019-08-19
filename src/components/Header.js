import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlaylistAdd, PlaylistPlay } from "@material-ui/icons";

const Container = styled.header`
  width: 100%;
  height: 100px;
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
  width: 180px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <Container>
      <List>
        <ItemIcon>
          <PlaylistPlay fontSize="large" />
        </ItemIcon>
        <ItemTitle>
          <Text>Now Playing</Text>
        </ItemTitle>
        <ItemIcon>
          <PlaylistAdd fontSize="large" />
        </ItemIcon>
      </List>
    </Container>
  );
};

export default Header;
