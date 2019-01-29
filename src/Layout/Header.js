import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  grid-column: main-start / main-end;
  display: flex;
  justify-content: space-between;
`

export default ({tries}) => (
  <Header>
    <h1>CSS Grid Game</h1>
    <p>Settings</p>
  </Header>
)
