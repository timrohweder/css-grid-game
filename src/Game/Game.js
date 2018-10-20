import React from 'react';
import styled from 'styled-components';
import Tile from './Tile';

const GameContainer = styled.div`
  --grid-gap: 1.5rem;
  --game-y-margin: 5rem;
  --max-col-width: calc((100vh - var(--game-y-margin) * 2 - var(--header-height) - var(--footer-height) - var(--body-y-padding) * 2 - (${props => props.numCols - 1}) * var(--grid-gap)) / ${props => props.numCols});
  grid-column: left-gutter-end / right-gutter-start;
  display: grid;
  justify-content: center;
  margin: var(--game-y-margin) 0;
  grid-gap: var(--grid-gap);
  grid-template-columns: repeat(${props => props.numCols}, minmax(5rem, var(--max-col-width)));
  @media (max-width: calc(5rem * ${props => props.numCols})) {
    grid-template-columns: repeat(auto-fit, minmax(5rem, var(--max-col-width)));
  }
`

export default class Game extends React.Component {
  state = {
    numCols: 3
  }

  renderTiles() {
    let tiles = [];
    while (tiles.length < Math.pow(this.state.numCols, 2)) {
      tiles.push(<Tile />);
    }
    return tiles;
  }

  render() {

    return (
      <GameContainer numCols={this.state.numCols}>
      {this.renderTiles()}
      </GameContainer>
    )
  }
}
