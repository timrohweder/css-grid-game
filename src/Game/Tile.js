import React from 'react';
import styled from 'styled-components';

const TileContainer = styled.div`
  perspective: 600px;
`

const Tile = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform .7s;
  transform-style: preserve-3d;
  font-size: 2rem;
  border-radius: 3px;
  ::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
  }
  &:hover {
    transform: rotateY(180deg);
  }
 `

const TileContentsFront = styled.div`
  background-color: #DFDBE5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
`

const TileContentsBack = styled.div`
  transform: rotateY( 180deg );
  background: #eee;
`

export default ({active}) => (
  <TileContainer>
    <Tile className={active ? 'active' : null}>
      <TileContentsFront></TileContentsFront>
      <TileContentsBack>Back</TileContentsBack>
    </Tile>
  </TileContainer>
);

