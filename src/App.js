import React, { Component } from 'react';
import { GlobalStyles } from './globalCSS';
import Game from './Game/Game';
import SettingsContext from './Game/SettingsContext';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Settings from './Game/Settings';

class App extends Component {

  decrementTries = (callback) => {
    this.setState(state => ({
      triesRemaining: state.triesRemaining !== null ? --state.triesRemaining : state.triesToStart - 1
    }), callback ? callback : () => {})
  };

  setNumCols = (numCols) => {
    this.setState({numCols})
  }

  setNumTries = (numTries) => {
      this.setState({triesToStart: numTries})
  }

  createTiles = () => {
    if (this.state.tiles.length) return;

    let tiles = [];
    let tilesFodder = [];
    let i, randomIndex;

    while (tilesFodder.length < Math.pow(this.state.numCols, 2) / 2) {
      i = Math.floor(Math.random() * (Math.pow(this.state.numCols, 2) / 2) + 1);
      if (!tilesFodder.includes(i)) tilesFodder.push(i);
    }

    [...tilesFodder,...tilesFodder].forEach(tile => {
      while(true) {
        randomIndex = Math.floor(Math.random() * Math.pow(this.state.numCols, 2));
        if(tiles[randomIndex] === undefined || tiles[randomIndex] === null) {
          tiles[randomIndex] = {
            tile,
            id: tile * Math.random() * Math.random(),
            memberOfMatch: false
          };
          break;
        }
      }
    });

    this.setState({ tiles });
  }

  resetGame = () => {
    this.setState({
      tiles: [],
      triesRemaining: null
    })
  }

  state = {
    triesToStart: 3,
    triesRemaining: null,
    setNumTries: this.setNumTries,
    decrementTries: this.decrementTries,
    numCols: 4,
    setNumCols: this.setNumCols,
    tiles: [],
    createTiles: this.createTiles,
    resetGame: this.resetGame
  };

  render() {
    return (
      <Router>
        <SettingsContext.Provider value={this.state}>
          <Route path="/" exact component={Game} />
          <Route path="/settings" component={Settings} />
          <GlobalStyles />
        </SettingsContext.Provider>
      </Router>
    );
  }
}

export default App;
