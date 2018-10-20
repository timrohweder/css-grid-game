import React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  grid-column: 2 / span 3;
`

const Settings = styled.p`
  grid-column: -3 / span 1;
  justify-self: end;
`

const Header = styled.header`
  grid-column: left-gutter-start / right-gutter-end;
  display: grid;
  grid-template-columns: var(--cols);
  align-items: center;
`

export default () => (
  <Header>
    <Logo>CSS Grid Game</Logo>
    <Settings>Settings</Settings>
  </Header>
)
