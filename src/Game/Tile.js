import React from 'react';
import styled from 'styled-components';


const Tile = styled.div`
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  border-radius: 3px;
  ::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export default (props) => (
  <Tile span='4'>Hi</Tile>
);
