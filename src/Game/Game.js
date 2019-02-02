import React from 'react';
import styled from 'styled-components';
import Tile from './Tile';
import SettingsContext from './SettingsContext';
import Layout from '../Layout/Layout';

const GameWrapper = styled.div`
  --grid-gap: 1.5rem;
  --game-y-margin: 5rem;
  --max-col-width: calc((100vh - var(--game-y-margin) * 2 - var(--header-height) - var(--body-y-padding) * 2 - (${props => props.numCols - 1}) * var(--grid-gap)) / ${props => props.numCols});

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
  static contextType = SettingsContext;

  state = {
    numCols: this.context.numCols,
    tiles: null,
    selectedA: undefined,
    selectedB: undefined
  }

  handleClick = (e) => {
    const tile = e.target.closest('.tile__container');

    // disregard click if game is over
    if(this.context.triesRemaining === 0) return;

    // disregard click if it's on an already matched item
    if (tile.classList.contains('matched')) return;

    // reset if two umatched tiles are showing
    if(this.state.selectedA && this.state.selectedB) {
      this.setState({
        selectedA: undefined,
        selectedB: undefined
      })
      return;
    }

    if(this.state.selectedA) {
      // return if the second click equals the same square as the first click
      if(tile.dataset.id === this.state.selectedA.dataset.id) return;

      // set selectedB and compare to selectedA
      this.setState({selectedB: tile}, this.compareTiles)
    } else {
      this.setState({
        selectedA: tile
      });
    }
  }

  compareTiles() {
    const tileAContent = this.state.selectedA.getElementsByClassName('tile__back')[0].textContent;
    const tileBContent = this.state.selectedB.getElementsByClassName('tile__back')[0].textContent;

    if(tileAContent === tileBContent) {
      // set matching tiles' property memberOfMatch to true in state
      let tiles = this.context.tiles.map(tile => {
        if(tile.tile.toString() === tileAContent) {
          tile.memberOfMatch = true;
        }
        return tile;
      });
      this.setState({ tiles }, this.context.checkIfGameWon());

      // reset selectedA and selectedB
      this.setState({
        selectedA: undefined,
        selectedB: undefined
      })
    } else { // guess was incorrect
      this.context.decrementTries(this.delayTileFlipBack.bind(this));
    };
  }

  // if the game isn't over, delay the tile flipping back so the player can see
  // the tile's contents
  delayTileFlipBack() {
    setTimeout(
      () => {
        this.setState({
          selectedA: undefined,
          selectedB: undefined
        }
      )}, this.context.triesRemaining ? 1500 : 0);
  }

  // createTiles(numCols) {
  //   let tiles = [];
  //   let tilesFodder = [];
  //   let i, randomIndex;

  //   while (tilesFodder.length < Math.pow(numCols, 2) / 2) {
  //     console.log("making fodder");
  //     i = Math.floor(Math.random() * (Math.pow(numCols, 2) / 2) + 1);
  //     if (!tilesFodder.includes(i)) tilesFodder.push(i);
  //   }

  //   [...tilesFodder,...tilesFodder].forEach(tile => {
  //     while(true) {
  //       randomIndex = Math.floor(Math.random() * Math.pow(numCols, 2));
  //       if(tiles[randomIndex] === undefined || tiles[randomIndex] === null) {
  //         tiles[randomIndex] = {
  //           tile,
  //           id: tile * Math.random() * Math.random(),
  //           memberOfMatch: false
  //         };
  //         break;
  //       }
  //     }
  //   });

  //   this.setState({ tiles });
  // }

  componentDidMount() {
      this.context.createTiles();
  }

  render() {
    console.log("rendered");
    return (
      <Layout>
        <GameWrapper numCols={this.state.numCols}>
          {
            this.context.tiles &&
              this.context.tiles
                .map(({tile, id, memberOfMatch}) =>
                  <Tile
                    active={(this.state.selectedA && +this.state.selectedA.dataset.id === id) || (this.state.selectedB && +this.state.selectedB.dataset.id === id)}
                    key={id}
                    dataId={id}
                    contents={tile}
                    memberOfMatch={memberOfMatch}
                    clickHandler={this.handleClick}
                    gameOver={this.context.triesRemaining === 0}
                  />
                )
          }
        </GameWrapper>
      </Layout>
    )
  }
}
