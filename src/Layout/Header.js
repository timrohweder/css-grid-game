import React from 'react';
import styled from 'styled-components';
import GameStatusContext from '../Game/GameStatusContext';

const Header = styled.header`
  grid-column: left-gutter-start / right-gutter-end;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: black;
  color: white;
`

export default () => (
  <Header>
    <h1>CSS Grid Game</h1>
    <p>
      <GameStatusContext.Consumer>
        {context => `Tries Remaining: ${context.triesRemaining}`}
      </GameStatusContext.Consumer>
    </p>
    <p>Settings</p>
  </Header>
)
