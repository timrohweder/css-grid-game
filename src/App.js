import React, { Component } from 'react';
import Layout from './Layout/Layout';
import { GlobalStyles } from './globalCSS';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <p>Game area goes here</p>
        </Layout>
        <GlobalStyles />
      </React.Fragment>
    );
  }
}

export default App;
