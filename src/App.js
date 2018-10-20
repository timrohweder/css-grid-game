import React, { Component } from 'react';
import Layout from './Layout/Layout';
import { GlobalStyles } from './globalCSS';
import Game from './Game/Game';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Game />
        </Layout>
        <GlobalStyles />
      </React.Fragment>
    );
  }
}

export default App;
