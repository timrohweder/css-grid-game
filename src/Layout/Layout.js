import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  --header-height: 3rem;
  --footer-height: 3rem;
  display: grid;
  grid-template-columns: var(--cols);
  grid-template-rows: var(--header-height) 1fr var(--footer-height);
`

export default (props) => (
  <Container>
    <Header />
    {props.children}
    <Footer />
  </Container>
);
