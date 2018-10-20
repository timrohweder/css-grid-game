import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  grid-column: left-gutter-start / right-gutter-end;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default () => (
  <Footer>
    <p>Design by Tim Rohweder</p>
  </Footer>
)
