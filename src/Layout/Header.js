import React from 'react';
import styled from 'styled-components';
import SettingsContext from '../Game/SettingsContext';
import { Link } from 'react-router-dom';

const Header = styled.header`
  grid-column: left-gutter-start / right-gutter-end;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: black;
  color: white;
`

const SettingsLink = styled(Link)`
  font-size: 18px;
`

export default () => (
  <Header>
    <h1><Link to="/">CSS Grid Game</Link></h1>
    <p>
      <SettingsContext.Consumer>
        {context => `Tries Remaining: ${context.triesRemaining === null ? context.triesToStart : context.triesRemaining}`}
      </SettingsContext.Consumer>
    </p>
    <SettingsLink to="/settings">Settings</SettingsLink>
  </Header>
)
